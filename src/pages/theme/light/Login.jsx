import { Card } from "@mui/material";
import React from "react";
import '../../../css/login,register.css';

export default function Login() {
    // 인풋 스타일 코드
    const commonInputStyle = {
        textAlign: 'center',
        width: '300px',
        height: '35px',
        fontsize: '15px',
        border: '0',
        borderRadius: '15px',
        outline: 'none',
        marginBottom: '15px', // 모든 입력 필드에 하단 여백을 일관되게 적용
    };

    return (
        // 배경
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'url(/img/flowLightPurple.jpg)', // 이미지 경로 지정
            backgroundSize: 'cover', // 이미지를 커버하도록 설정
            backgroundPosition: 'center', // 이미지를 가운데 정렬
        }}>

            <Card id='cardMain'
                style={{
                    textAlign: 'center',
                    maxWidth: '80%',
                    padding: '10%',
                    boxSizing: 'border-box',  // 패딩 포함하여 너비 계산
                    height: 'auto',  // 높이를 내용에 맞춰 자동 조절
                    borderRadius: '10px',
                    border: '2.5px solid rgba(255, 255, 255, 0.4)',  // 흰색 실선 테두리
                    background: 'transparent',  // 투명 배경
                    backdropFilter: 'blur(15px)'  // 배경 블러 효과             
                }}
            >

                <div id='login-box' style={{ padding: '35px', }}>

                    {/* 로고 */}
                    <img src="../img/naryLogo2.png"
                        style={{ maxWidth: '35%', }}
                        />
                    <br />

                    <input id="id-input" placeholder="닉네임 혹은 이메일"
                        className="commonInputStyle"
                        style={commonInputStyle}>
                    </input>

                    <br />

                    <input id='pwd' type="password" placeholder="비밀번호"
                        className="commonInputStyle"
                        style={commonInputStyle}>
                    </input>
                    <br />
                    <button className="fill">로그인</button>
                    <p style={{ color: '#dca3e7' }}>혹시 계정이 없으신가요?</p>
                    <button className="fill">가입하기</button>
                </div>
                <br />
            </Card>
        </div>
    )
}