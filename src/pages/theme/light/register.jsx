import { Card } from "@mui/material";
import React from "react";
import '../../../css/login,register.css';

export default function Register() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'url(../../../img/flowLightPurple.jpg)', // 이미지 경로 지정
            backgroundSize: 'cover', // 이미지를 커버하도록 설정
            backgroundPosition: 'center', // 이미지를 가운데 정렬
        }}>

            <div>
                <Card id='cardMain'
                    style={{
                        textAlign: 'center',
                        padding: '5%',
                        boxSizing: 'border-box',
                        height: '80%',
                        borderRadius: '10px',
                        border: '2.5px solid rgba(255, 255, 255, 0.4)',
                        background: 'transparent',
                        backdropFilter: 'blur(15px)'
                    }}
                >
                    <div id='login-box' style={{ padding: '35px', }}>

                        {/* 로고 */}
                        <img src="../../../img/naryLogo2.png" alt="Logo" style={{ maxWidth: '30%', }} />
                        <br />

                        <input placeholder="닉네임 혹은 이메일"
                            className="commonInputStyle">
                        </input>
                        <br />

                        <input type="password" placeholder="비밀번호"
                            className="commonInputStyle">
                        </input>
                        <br />

                        <input type="password" placeholder="비밀번호 확인"
                            className="commonInputStyle">
                        </input>
                        <br />

                        <button className="fill">가입확인</button>
                        <hr style={{ border: '2px solid rgba(255, 255, 255, 0.4)' }} />

                        <p style={{ color: '#dca3e7' }}>또는</p>

                        <button className="fill">GOOGLE <br />로그인</button>
                        <button className="fill">FlowNary <br />로그인</button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
