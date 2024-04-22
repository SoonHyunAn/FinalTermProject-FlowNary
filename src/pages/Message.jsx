import React from "react";
import Box from '@mui/material/Box'
import { Avatar, Button, Stack, TextField, Toolbar } from "@mui/material";
import '../css/message.css';
import EastIcon from '@mui/icons-material/East';
import SnsBar from '../components/SnsBar';
import Aside from "../components/Aside";

export default function Message() {

    return (
        <div style={{ position: 'absolute', height: '100%', width: '100%', minWidth: '500px', minHeight: '400px' }}>
            <SnsBar />
            <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
                {/* 첫 번째 영역 */}
                <Stack direction="column" spacing={2} sx={{ flex: 0.3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>

                    {/* 영역 1의 컨텐츠 */}
                    <Aside />
                </Stack>

                {/* 두 번째 영역 */}
                <Stack direction="column" spacing={2} sx={{ flex: 1.5, position: 'relative' }}>
                    <Box
                        sx={{ margin: '20px', padding: '20px', minHeight: '400px', height: '100%' }}>
                        <Stack sx={{
                           fontSize: 'xx-large',
                           fontWeight:'bold'
                        }}><div style={{color: 'rgb(88, 67, 135)'}}>
                            James
                            <hr style={{opacity: '0.4'}}/>
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
                </Stack>
            </Stack>
        </div>
    )
}