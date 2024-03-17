const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MySQL 연결 정보 설정
const connection = mysql.createConnection({
  host: 'localhost', // 호스트 이름
  user: 'root', // 사용자 이름
  password: 'root', // 비밀번호
  database: 'plpl' // 데이터베이스 이름
});

// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// 연결된 MySQL 데이터베이스 커넥션을 외부에서 사용할 수 있도록 내보내기
module.exports = connection;

// Body parser 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 로그인 엔드포인트
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM members WHERE username = ? AND password = ?`;
  connection.query(query, [username, password], (error, results, fields) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }
    res.status(200).json({ message: 'Login successful', user: results[0] });
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
