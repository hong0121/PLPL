const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mysql = require("mysql");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MySQL 연결 정보 설정
const connection = mysql.createConnection({
  host: "localhost", // 호스트 이름
  user: "root", // 사용자 이름
  password: "root", // 비밀번호
  database: "plpl", // 데이터베이스 이름
});

// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// 연결된 MySQL 데이터베이스 커넥션을 외부에서 사용할 수 있도록 내보내기
module.exports = connection;

// Body parser 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 로그인 엔드포인트
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM members WHERE username = ? AND password = ?`;
  connection.query(query, [username, password], (error, results, fields) => {
    if (error) {
      console.error("Error querying database:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    res.status(200).json({ message: "Login successful", user: results[0] });
  });
});

// POST /naver-login 요청을 처리하는 핸들러
app.post("/naver-login", async (req, res) => {
  try {
    // 네이버 로그인 API 호출
    const response = await axios.get("https://openapi.naver.com/v1/nid/me", {
      headers: {
        Authorization: `Bearer ${req.body.accessToken}`,
      },
    });

    // 사용자 정보를 가져옴
    const userData = response.data.response;

    // 여기서 사용자 정보를 확인하고 필요한 작업을 수행
    console.log("네이버 사용자 정보:", userData);

    // 콜백 URL로 리다이렉트 또는 다른 작업 수행
    res.status(200).json({ message: "Naver login success", userData });
  } catch (error) {
    console.error("네이버 로그인 오류:", error.response.data);
    res.status(500).json({ message: "Naver login failed" });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
