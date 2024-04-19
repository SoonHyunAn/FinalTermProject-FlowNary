import React, { useState } from "react";
import { Card } from "@mui/material";
import '../css/theme.css';  // CSS 임포트

export default function Login() {
    const [theme, setTheme] = useState('light'); // 초기 테마를 'light'로 설정

    // 테마를 토글하는 함수
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // 테마에 따른 배경 이미지 경로 변경
    const backgroundImage = theme === 'light' ? '/img/flowLight.png' : '/img/flowNight.png';
    const logoImage = theme === 'light' ? '/img/LightLogo.png' : '/img/DarkLogo.png';

    return (
        <div className={`background ${theme}`} style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Card id='cardMain' className="cardMain">
                <div id='login-box' className="loginBox">
                    <img src={logoImage} style={{ maxWidth: '30%' }} />
                    <br />
                    <input id="id-input" placeholder="닉네임 혹은 이메일" className="commonInputStyle" />
                    <br />
                    <input id='pwd' type="password" placeholder="비밀번호" className="commonInputStyle" />
                    <br />
                    <button className="fill">로그인</button>
                    <p style={{ color: theme === 'light' ? '#dca3e7' : '#ffffff' }}>혹시 계정이 없으신가요?</p>
                    <button className="fill">가입하기</button>
                    <br />
                    <button onClick={toggleTheme} className="fill">테마변경</button>
                </div>
            </Card>
        </div>
    );
}
