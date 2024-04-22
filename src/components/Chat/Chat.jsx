import React from "react";
import { Avatar, Box, Stack, TextField, Toolbar } from "@mui/material";

import EastIcon from '@mui/icons-material/East';
import '../../css/message.css';
export default function Chat() {
  return (
    <Box
      sx={{ margin: '20px', padding: '20px', minHeight: '400px', height: '100%' }}>
      <Stack sx={{
        fontSize: 'xx-large',
        fontWeight: 'bold'
      }}><div style={{ color: 'rgb(88, 67, 135)' }}>
          James
          <hr style={{ opacity: '0.4' }} />
        </div>
      </Stack>
      <Stack direction='row' justifyContent='flex-end' alignItems='flex-end'>
        <div className="message">안녕하세요 반갑습니다</div>
      </Stack>
      <Stack direction='row' justifyContent='flex-start' alignItems='flex-end'>
        <Avatar sx={{ width: '50px', height: '50px' }}>R</Avatar>
        <div className="othermessage">네<br />안녕하세요<br />반갑습니다</div>
      </Stack>
      <Stack direction='row' justifyContent='flex-start' alignItems='flex-end'>
        <Avatar sx={{ width: '50px', height: '50px' }}>P</Avatar>
        <div className="othermessage">일정확인 부탁드립니다<br />오늘 저녁까지 부탁드립니다.<br />감사합니다.</div>
      </Stack>
      <Stack position="fixed" sx={{ top: 'auto', bottom: '5px', backgroundColor: 'rgb(75, 52, 145)', width: '80%', borderRadius: '10px' }}>
        <Toolbar>
          <TextField fullWidth placeholder="메시지를 입력하세요." variant="filled" sx={{ backgroundColor: "white", margin: '10px', border: 0 }}></TextField>

          <button className="msg_button">
            <EastIcon></EastIcon>
          </button>
        </Toolbar>
      </Stack>
    </Box>
  )
}