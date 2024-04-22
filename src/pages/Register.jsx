import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

import '../css/theme.css';

export default function Register() {
    const [theme, setTheme] = useState('light'); // 초기 테마를 설정

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); // 테마 전환 함수
    };

    const backgroundImage = theme === 'light' ? '/img/flowLight.png' : '/img/flowNight.png';
    const logoImage = theme === 'light' ? '/img/LightLogo.png' : '/img/DarkLogo.png';
    const HelloLogo = theme === 'light' ? '/img/HelloLight.png' : '/img/HelloBlack.png';

    return (
        <div className={`background ${theme}`} style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Card id='cardMain' className="cardMain">
                <div id='login-box' className="loginBox">
                    <div className={`welcome-message`}>
                        <img src={HelloLogo}  alt='Hello' style={{ maxWidth: '10%' }} />
                    </div>
                    <img src={logoImage}  alt='LOGO' style={{ maxWidth: '20%' }} />
                    <br />
                    <input placeholder="닉네임 혹은 이메일" className="commonInputStyle" />
                    <br />
                    <input type="password" placeholder="비밀번호" className="commonInputStyle" />
                    <br />
                    <input type="password" placeholder="비밀번호 확인" className="commonInputStyle" />
                    <br /><br />
                    <Link to="/login" className={`custom-button ${theme}`}>가입하기</Link>

                    <hr style={{ border: '2px solid rgba(255, 255, 255, 0.4)' }} />
                    <p style={{ color: theme === 'light' ? '#dca3e7' : '#ffffff' }}>계정이 이미 있으신가요?</p>
                    <button className="fill">GOOGLE <br />로그인</button>
                    <button className="fill">FlowNary <br />로그인</button>
                    <br />
                    <button onClick={toggleTheme} className="fill">테마변경</button>
                </div>
            </Card>
        </div>
    );
}
