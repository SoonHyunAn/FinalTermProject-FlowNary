// 기본
import React from 'react'
import { Avatar, Box, Stack, TextField, Toolbar } from "@mui/material";

// 아이콘
import EastIcon from '@mui/icons-material/East';

// css 연결
import './chat.css';

export default function Chat() {

  return (
    <Box sx={{ top: '10 %', margin: '20px', padding: '20px', minHeight: '400px', height: '100%', width: '80%' }}>

      {/* 상대방 이름 표시 */}
      <Stack sx={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
        <div style={{ color: 'rgb(88, 67, 135)' }}>
          James
          <hr style={{ opacity: '0.4', marginTop: 30 }} />
        </div>
      </Stack>

      {/* 채팅방 내용 */}
      <Stack direction='row' justifyContent='flex-end' alignItems='flex-end'>
        <div className="message">안녕하세요 반갑습니다</div>
      </Stack>
      <Stack direction='row' justifyContent='flex-start'>
        <Avatar sx={{ width: '50px', height: '50px', placeSelf: 'flex-start' }}>R</Avatar>
        <div className="othermessage">네<br />안녕하세요<br />반갑습니다</div>
      </Stack>
      <Stack direction='row' justifyContent='flex-start' >
        <Avatar sx={{ width: '50px', height: '50px' }}>R</Avatar>
        <div className="othermessage">일정확인 부탁드립니다. 감사합니다.</div>
      </Stack>

      {/* 메시지 입력란*/}
      <Stack position="fixed" sx={{ top: 'auto', bottom: '5px', backgroundColor: 'white', width: '70%', borderRadius: '10px' }}>
        <Toolbar>
          <TextField fullWidth placeholder="메시지를 입력하세요..." variant="filled" sx={{ backgroundColor: "white", margin: '10px', border: 0 }}></TextField>
          <button className="msg_button">
            <EastIcon />
          </button>
        </Toolbar>
      </Stack>
    </Box>
  )
}