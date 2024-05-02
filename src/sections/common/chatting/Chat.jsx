// 기본
import React, { useState } from 'react'
import { Avatar, Box, Stack, TextField, InputAdornment } from "@mui/material";

// 아이콘
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';

// css 연결
import './chat.css';



export default function Chat() {
  // 채팅 전송 함수(24.04.30 정성한)
  // 초기 메시지 설정: 상대방의 메시지 하나 포함 - 테스트 용(DB연결 후 지울 것)
  const [messages, setMessages] = useState([
    { text: "안녕하세요, 반갑습니다!", sender: 'other' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleMessageSend = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = { text: inputMessage, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputMessage(''); // 입력 필드 비움
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleMessageSend();
    }
  };

  return (
    <Box sx={{
      top: '10 %',
      margin: '20px',
      padding: '20px',
      minHeight: '400px',
      height: '100%',
      width: '80%',     
      mx: 'auto',
    }}>

      {/* 상대방 이름 표시 */}
      <Stack sx={{ fontSize: 'xx-large', fontWeight: 'bold', mx: 'auto' }}>
        <div style={{ color: 'rgb(88, 67, 135)' }}>

          {/* 프로필 상단 영역 */}
          <Avatar alt="James" src='../../../../public/img/profile/profile1.jpg' /> James
          <hr style={{ opacity: '0.4', marginTop: 20 }} />
        </div>
      </Stack>

      {/* 채팅방 내용 동적 렌더링 */}
      {messages.map((message, index) => (
        <Stack key={index} direction='row' justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}>
          {message.sender !== 'user' && <Avatar sx={{ width: 50, height: 50 }}>R</Avatar>}
          <div className={message.sender === 'user' ? "message" : "othermessage"}>{message.text}</div>
          {message.sender === 'user' && <Avatar sx={{ width: 50, height: 50 }}>U</Avatar>}
        </Stack>
      ))}

      {/* 메시지 입력란 */}
      <Stack sx={{
        position: 'fixed',
        bottom: '5px',
        width: { xs: '60%', sm: '70%', md: '80%' },
      }}>
        <TextField
          sx={{
            marginBottom: '1.5em',
            width: { xs: '60%', sm: '80%', md: '85%', lg: '88%', xl: '90%', },
          }}
          fullWidth
          placeholder="메시지를 입력하세요..."
          variant="outlined"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <IconButton onClick={handleMessageSend} sx={{}}>
                  <EastIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  )
}