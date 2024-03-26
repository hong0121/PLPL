import React from 'react';
import NaverLogin from 'react-naver-login';
import { useNavigate } from 'react-router-dom';

function NaverLoginButton() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const onSuccess = (naverUser) => {
    console.log('네이버 로그인 성공 : ', naverUser);

    navigate('/home');
  }

  const onFailure = (err) => {
    console.error('네이버 로그인 실패 : ', err);
  }

  return (
    <NaverLogin
      clientId={process.env.REACT_APP_CLIENT_ID} // 네이버 개발자 센터에서 발급받은 클라이언트 ID 입력
      callbackUrl={process.env.REACT_APP_CALLBACK_URL} // 네이버 개발자 센터에서 등록한 콜백 URL 입력
      onSuccess={onSuccess}
      onFailure={onFailure}
      render={(props) => <button onClick={props.onClick}> 네이버로 로그인하기 </button>}
    />
  );
}

export default NaverLoginButton;
