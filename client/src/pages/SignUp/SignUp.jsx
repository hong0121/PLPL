import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 회원가입 정보를 서버로 전송
    axios.post('/signup', {
      username,
      password,
      name,
      age,
      phone_number: phoneNumber, // 백엔드에서 사용하는 필드명으로 변환
      email
    })
    .then(response => {
      console.log('회원가입 성공:', response.data);
      // 회원가입 성공 시 처리 (예: 로그인 페이지로 리다이렉트)
    })
    .catch(error => {
      console.error('회원가입 오류:', error);
      // 회원가입 오류 시 처리
    });
  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">아이디:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="name">이름:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="age">나이:</label>
          <input type="number" id="age" value={age} onChange={handleAgeChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">전화번호:</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default SignUp;
