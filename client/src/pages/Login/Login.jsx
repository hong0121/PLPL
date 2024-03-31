import React, { useState } from "react";
import NaverLogin from "react-naver-login";
import { useNavigate } from "react-router-dom";
// import NaverLoginButton from '../NaverLogin/NaverLogin';
import "./Login.css";

function Login() {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  //naver-login
  const navigate = useNavigate();

  const onSuccess = (naverUser) => {
    console.log("네이버 로그인 성공 : ", naverUser);

    navigate("/home");
  };
  const onFailure = (err) => {
    console.error("네이버 로그인 실패 : ", err);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className={`sign-in-container ${isSignIn ? "" : "hidden"}`}>
          <form>
            <h1>Sign In</h1>
            <div className="social-links">
              <div>
                <NaverLogin
                  clientId={process.env.REACT_APP_CLIENT_ID} // 네이버 개발자 센터에서 발급받은 클라이언트 ID 입력
                  callbackUrl={process.env.REACT_APP_CALLBACK_URL} // 네이버 개발자 센터에서 등록한 콜백 URL 입력
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  render={(props) => (
                    <button type="button" onClick={props.onClick}>
                      {" "}
                      <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
                    </button>
                  )}
                />
              </div>
              {/* <div>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
              <div>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div> */}
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="form_btn">Sign In</button>
          </form>
        </div>

        {/* <div className="overlay-container">
          <div className="overlay-left">
            <h1>Welcome Back</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button id="signIn" className="overlay_btn" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="overlay-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <button id="signUp" className="overlay_btn" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Login;

/* <div className={`sign-up-container ${isSignIn ? 'hidden' : ''}`}>
          <form>
            <h1>Create Account</h1>
            <div className="social-links">
              <div>
                <NaverLogin
                  clientId={process.env.REACT_APP_CLIENT_ID} 
                  callbackUrl={process.env.REACT_APP_CALLBACK_URL} 
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  render={(props) =>
                    <button type="button" onClick={props.onClick}>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </button>
                  }
                />
              </div>
              <div>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
              <div>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" autoComplete="current-password" />
            <button className="form_btn">Sign Up</button>
          </form>
        </div> */
