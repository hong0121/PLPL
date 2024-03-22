import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import NaverLoginButton from '../NaverLogin/NaverLogin';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate ();

  const onSuccess = (data) => {
    history.push('/home');
    console.log('로그인 성공 : ', data);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button> 
      <NaverLoginButton onLogin={onLogin} onSuccess={onSuccess} /> {/* onLogin을 props로 전달 */}

    </form>
  );
}

export default Login;
