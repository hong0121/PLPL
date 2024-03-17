import React from 'react';
import NaverLogin from 'react-naver-login';

function NaverLoginButton() {
  const callback = (response) => {
    console.log(response); // 네이버 로그인 후 사용자 정보가 response로 전달됩니다.
  };

  return (
    <NaverLogin
      clientId="6y5ZyhnipCj_CORAAY04" // 네이버 개발자 센터에서 발급받은 클라이언트 ID 입력
      callbackUrl="TFVxdMbsSQ" // 네이버 개발자 센터에서 등록한 콜백 URL 입력
      callback={callback}
      render={(props) => <button onClick={props.onClick}> 네이버로 로그인하기 </button>}
    />
  );
}

export default NaverLoginButton;
