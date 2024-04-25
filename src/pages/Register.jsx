import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@mui/material";

import '../css/theme.css';
import { initializeApp, } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {
    // 테마설정
    const [theme, setTheme] = useState('light'); // 초기 테마를 설정
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); // 테마 전환 함수
    };

    // 그림 추가
    const backgroundImage = theme === 'light' ? '/img/flowLight.png' : '/img/flowNight.png';
    const logoImage = theme === 'light' ? '/img/LightLogo.png' : '/img/DarkLogo.png';
    const HelloLogo = theme === 'light' ? '/img/HelloLight.png' : '/img/HelloBlack.png';

    // 회원가입 초기값 설정
    const [userInfo, setUserInfo] = useState({ email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    // Firebase 초기화
    useEffect(() => {
        const firebaseConfig = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        };
        initializeApp(firebaseConfig);
    }, []);
    const auth = getAuth();

    const loginWithGoogle = async () => {
        try {
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider);
          alert('구글 로그인 성공!! 환영합니다!!');
          console.log("구글 로그인 성공!");
          navigate('/');
        } catch (error) {
          console.error("구글 로그인 오류:", error);
        }
      };

    // 회원가입 항목 입력시 값 변경
    const handleChange = e => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    // 가입하기 버튼 눌렀을 때 일어나는 기능
    const handleSubmit = async e => {
        e.preventDefault();

        // 정규식으로 이메일 형식 확인
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(com|net)$/;
        if (!emailRegex.test(userInfo.email)) {
            alert("올바른 이메일 형식이 아닙니다.");
            return;
        }
        // 비밀번호 확인 - 일치여부, 형식
        if (userInfo.password !== userInfo.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
            return;
        }
        if (userInfo.password.length < 6) { // 파이어베이스 비밀번호 길이 제한
            alert("비밀번호는 6자리 이상이어야 합니다.");
            return;
        }
        if (!/[0-9]/.test(userInfo.password) || !/[!@#$%^&*?]/.test(userInfo.password)) { // 정규식으로 비밀번호 확인
            alert("비밀번호는 숫자와 특수문자(!@#$%^&*?)를 포함해야 합니다.");
            return;
        }

        await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then(() => {
                console.log("회원가입 성공");
                alert('회원가입 성공. 환영합니다.');
                setTimeout(() => {
                    navigate('/login');
                }, 1000); // 1000 밀리초 = 1초 딜레이
            })
            .catch(error => {
                // 이미 사용 중인 이메일일 경우 또는 다른 오류가 발생한 경우
                console.error("회원가입 에러:", error.message);
                if (error.code === "auth/email-already-in-use") {
                    alert("이미 사용 중인 이메일입니다. 다른 이메일을 입력해주세요.");
                } else {
                    alert("회원가입 중 에러가 발생했습니다. 다시 시도해주세요.");
                }
            });

    }

    return (
        <div className={`background ${theme}`} style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Card id='cardMain' className="cardMain">
                <div id='login-box' className="loginBox">
                    <div className={`welcome-message`}>
                        <img src={HelloLogo} alt='Hello' style={{ maxWidth: '10%' }} />
                    </div>
                    <img src={logoImage} alt='LOGO' style={{ maxWidth: '20%' }} />
                    <br />
                    <input type="email" name='email' placeholder="이메일" className="commonInputStyle" onChange={handleChange} />
                    <br />
                    <input type="password" name='password' placeholder="비밀번호" className="commonInputStyle" onChange={handleChange} />
                    <br />
                    <input type="password" name='confirmPassword' placeholder="비밀번호 확인" className="commonInputStyle" onChange={handleChange} />
                    <br /><br />
                    <Link className={`custom-button ${theme}`} onClick={handleSubmit}>가입하기</Link>

                    <hr style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }} />
                    <p style={{ color: theme === 'light' ? '#dca3e7' : '#ffffff' }}>계정이 이미 있으신가요?</p>
                    <Link onClick={loginWithGoogle} className={`custom-button ${theme}`}>Google <br /> 로그인</Link>
                    <Link to="/login" className={`custom-button ${theme}`}>FlowNary <br />로그인</Link>
                    <br />
                    <div className="container">
                        <button onClick={toggleTheme} className="fill">테마변경</button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
