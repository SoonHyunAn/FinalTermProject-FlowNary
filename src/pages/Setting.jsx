import React, { useState } from "react";
import { Box, Button, Card, TextField, Modal, InputAdornment, FormControlLabel, FormGroup, Typography, Stack } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SnsBar from "../components/SnsBar";
import Aside from "../components/Aside";
import '../css/setting.css'; // CSS 파일 임포트
import { MaterialUISwitch, AntSwitch } from '../css/SwitchStyles.jsx'; // 토글 버튼 style

// import ProfileMenu from "../components/ProfileMenu";

export default function Setting() {
    // 성별
    const [gender, setGender] = useState('');
    // Modal 열기,닫기
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 비밀번호 숨기기/보이기
    const [showPassword, setShowPassword] = useState(false);
    // 성별 이벤트
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    // 모달 이벤트 - 열기
    const openModal = () => {
        setIsModalOpen(true);
    };
    // 모달 이벤트 - 닫힘
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // 비밀번호 숨기기/보이기 토글
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = () => {
        // 변경 확인 버튼 클릭 시 실행될 로직
        console.log('비밀번호 변경 확인');
    };

    return (
        <>
            <SnsBar />
            {/* <ProfileMenu /> */}

            <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
                <Stack direction="column" spacing={2} sx={{ flex: 0.3 }}>

                    <Stack sx={{ flexGrow: 1 }}>
                        <Aside />
                    </Stack>
                </Stack>
                {/* 첫 번째 영역 */}
                <Stack direction="column" spacing={2} sx={{ flex: 1.5, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>

                    {/* 전체 스타일 */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '4%',
                    }}>

                        {/* 메인 프로필 영역 */}
                        <Card className="MainProfile" style={{
                            border: '1px solid rgb(100, 78, 193)',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>

                            {/* 프로필 사진, 닉네임, 편집 영역 */}
                            <div className="profile">
                                <Avatar alt="H" src="/img/profile/profile1.jpg"
                                    style={{ marginLeft: '20px', width: '20%', height: '100%' }} />
                                <p className="nickname">닉네임</p>
                                <Button className="profile-edit-button" 
                                 onClick={openModal}>프로필 편집</Button>
                            </div>

                            {/* 소개 영역 */}
                            <div id="introduce" style={{ margin: '10px 0' }}>
                                <p className="introduce-label">소개</p>
                            </div>

                            {/* 소개글 수정 영역 */}
                            <Box component="section" sx={{
                                p: 2,
                                border: 'none',
                                marginTop: '1%',
                                width: '65%',
                            }}>
                                <TextField id="outlined-basic" label="나로 말할거 같으면!" variant="outlined" fullWidth />
                            </Box>

                            {/* 성별 영역 */}
                            <div id="gender" className="gender-select-area">
                                <p className="gender-label">성별</p>

                                {/* 성별 선택영역 */}
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" style={{ marginLeft: '35px' }}>성별</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        label="성별"
                                        onChange={handleChange}
                                        style={{ width: '25%', marginLeft: '3%' }}
                                    >
                                        <MenuItem value={"man"}>남자</MenuItem>
                                        <MenuItem value={"girl"}>여자</MenuItem>
                                        <MenuItem value={"none"}>설정 안함</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            {/* 계정 비활성화(탈퇴) 영역 */}
                            <div id="profile-disabled" className="profile-disabled">
                                <Button sx={{
                                    backgroundColor: 'red',
                                    color: 'white', '&:hover':
                                        { backgroundColor: 'darkred' }
                                }}>계정 비활성화</Button>
                            </div>

                            {/* 프로필 편집 - 모달 영역 */}
                            <Modal
                                open={isModalOpen}
                                onClose={closeModal}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >

                                <div className="modal-content">
                                    <h2 id="modal-modal-title">프로필 편집</h2>
                                    <p id="modal-modal-description" className="another-label"
                                        style={{ width: '100%', marginLeft: '2px', marginBottom: '10px', }}>개인정보 수정</p>

                                    {/* 프로필 편집 폼 */}
                                    <TextField
                                        id="standard-basic"
                                        label="이름"
                                        variant="standard"
                                        fullWidth  // 입력 폼 너비를 전체로 설정
                                    /><br /><br />

                                    <TextField
                                        className="nickname-text"
                                        id="standard-basic"
                                        label="닉네임"
                                        variant="standard"
                                        fullWidth
                                    /><br /><br />

                                    <TextField
                                        className="email-text"
                                        id="standard-basic"
                                        label="이메일"
                                        variant="standard"
                                        fullWidth
                                    /><br /><br />

                                    <TextField
                                        className="pwd-text"
                                        id="standard-basic"
                                        label="비밀번호"
                                        variant="standard"
                                        type={showPassword ? 'text' : 'password'}
                                        fullWidth
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Button
                                                        color="inherit"
                                                        style={{ width: '10px' }}
                                                        onClick={togglePasswordVisibility}
                                                        onMouseDown={(event) => event.preventDefault()}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </Button>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <div style={{textAlign:'right'}}>
                                        <Button variant="contained" color="primary"
                                            style={{
                                                width: '30%', marginTop: '1%'
                                            }}>
                                            비밀번호 변경
                                        </Button>
                                    </div>


                                    {/* 그 외 정보에서 도메인 구간 */}
                                    <br /><br />
                                    <p className="another-label"
                                        style={{
                                            width: '100%', marginLeft: '-2px',
                                            marginTop: '10px',
                                            marginBottom: '8px'
                                        }}>도메인 수정</p>

                                    <TextField
                                        id="standard-basic"
                                        label="도메인"
                                        variant="standard"
                                        fullWidth
                                    /><br /><br /><br />

                                    {/* 드롭다운 밝은배경/어두운 배경 */}
                                    <FormGroup>
                                        <p className="another-label"
                                            style={{ width: '100%', marginLeft: '0px', marginBottom: '15px' }}>테마 선택</p>
                                        <FormControlLabel
                                            style={{ justifyContent: 'center' }}
                                            control={<MaterialUISwitch sx={{ m: 2 }} defaultChecked />}
                                            label="밝은 테마 / 어두운 테마"
                                        />
                                        <br /><br />

                                        {/* on/off에 따른 계정 공개/비공개 */}
                                        <p className="another-label"
                                            style={{ width: '100%', marginLeft: '0px', marginBottom: '15px' }}
                                        >계정 공개 여부</p>
                                        <Stack direction="row" spacing={1} justifyContent="center">
                                            <Typography>비공개</Typography>
                                            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                            <Typography>공개</Typography>
                                        </Stack>

                                        <div style={{ textAlign: 'right', marginTop: '5%' }}>
                                            <Button variant="contained" color="primary"
                                                style={{ width: '35%' }}> 프로필 수정하기
                                            </Button>
                                        </div>

                                    </FormGroup>
                                </div>
                            </Modal>

                        </Card>
                    </div>                    
                </Stack>
                
            </Stack>
        </>
    );
}
