import React , { useState } from 'react';
import NaverLoginButton from '../NaverLogin/NaverLogin';
import './Login.css';

function Login({ }) {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className={`sign-up-container ${isSignIn ? 'hidden' : ''}`}>
          <form>
            <h1>Create Account</h1>
            <div className="social-links">
              <div>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
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
            <input type="password" placeholder="Password" />
            <button className="form_btn">Sign Up</button>
          </form>
        </div>
        <div className={`sign-in-container ${isSignIn ? '' : 'hidden'}`}>
          <form>
            <h1>Sign In</h1>
            <div className="social-links">
              <div>
              <button className="social-button" type="button"><i className="fa fa-facebook" aria-hidden="true"></i> </button>
              </div>
              <div>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
              <div>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
              
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="form_btn">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay-left">
            <h1>Welcome Back</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button id="signIn" className="overlay_btn" onClick={toggleForm}>Sign In</button>
          </div>
          <div className="overlay-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <button id="signUp" className="overlay_btn" onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>  );
}

export default Login;




// import React, { useState } from 'react';
// import NaverLoginButton from '../NaverLogin/NaverLogin';

// function Login({ }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     //onLogin({ username, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" value={username} onChange={handleUsernameChange} />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={handlePasswordChange} />
//       </div>
//       <button type="submit">Login</button> 
//       <NaverLoginButton />

//     </form>
//   );
// }

// export default Login;
