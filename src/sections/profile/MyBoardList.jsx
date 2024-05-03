// 기본
import React, { useState, useEffect } from "react";
import {
  Avatar, Box, Button, Chip, Divider, Grid, List, ListItem, ListItemAvatar,
  ListItemText, Modal, Paper, Stack, TextField, Typography, Card, InputAdornment,
  InputLabel, MenuItem, FormControl, Select,
  IconButton,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import axios from "axios";

// 아이콘
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SubjectIcon from '@mui/icons-material/Subject';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import SettingsIcon from '@mui/icons-material/Settings';

// alert 창
import Swal from "sweetalert2";

// 비밀번호 확인 - 재로그인
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { GetWithExpiry } from "../../api/LocalStorage";

// const searchData = [
//   'Remy Sharp',
//   'Travis Howard',
//   'Summer BBQ',
// ];

//Follower Modal 창
function FollowerModal({ open, handleClose, content }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // const filteredData = searchData.filter((item) =>
  //   item.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {content.title} <br />
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
          />
          <hr />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {content.description}
          <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/img/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="아이디 혹은 닉네임"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        실명 혹은 메일주소
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/img/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="아이디 혹은 닉네임"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        실명 혹은 메일주소
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>


              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/img/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="아이디 혹은 닉네임"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        실명 혹은 메일주소
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>

            </List>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
}

//Setting Modal 창
function SettingModal({ open, handleClose }) {
  const email = GetWithExpiry("email");
  const navigate = useNavigate();
  // localStorage를 이용해서 user 받아오기
  const uid = parseInt(GetWithExpiry("uid"));
  const [pwd, setPwd] = useState('');
  const [veriPwd, setVeriPwd] = useState('');

  useEffect(() => {
    if (uid == null) {
      navigate('/login');
    }
  }, []);

  // 비밀번호 숨기기/보이기
  const [showPassword, setShowPassword] = useState(false);
  // 비밀번호 숨기기/보이기 토글
  const togglePasswordVisibility = () => { setShowPassword(!showPassword); };

  const handlePwd = (e) => { setVeriPwd(e.target.value); };

  const confirmPWd = async e => {
    e.preventDefault();
    const auth = getAuth();

    // Firebase Authentication을 통해 사용자를 인증합니다.
    try {
      await signInWithEmailAndPassword(auth, email, veriPwd);
      Swal.fire({
        icon: 'success',
        title: "비밀번호가 일치합니다.",
        showClass: {
          popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
        },
        hideClass: {
          popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
        }
      });
      navigate('/setting');
    } catch (error) {
      // 비밀번호가 일치하지 않을 때
      Swal.fire({
        title: "비밀번호가 일치하지 않습니다.",
        text: "다시 입력해주세요",
        icon: "warning"
      });
    }
  }


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        sx={{ zIndex: 1 }}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          {/* 비밀번호 입력 */}
          <TextField
            fullWidth
            label="비밀번호 입력"
            variant="standard"
            type={showPassword ? 'text' : 'password'}
            sx={{ mt: 2, width: '100%' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    onMouseDown={(event) => event.preventDefault()}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            onChange={handlePwd}
          />

          {/* 하단 버튼 영역 */}
          <Grid container sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Grid item xs={8} lg={6} sx={{ display: 'flex' }}>
              <Button
                variant="contained"
                onClick={confirmPWd}
                style={{ margin: '1em', width: '20%', backgroundColor: 'rgb(54, 11, 92)' }}>
                완료
              </Button>

              <Button
                variant="contained"
                onClick={handleClose}
                style={{ margin: '1em', width: '20%', backgroundColor: '#bbbbbb' }}>
                취소
              </Button>
            </Grid>

          </Grid>

        </Box>
      </Modal>
    </>
  );

}


export default function MyBoardList() {

  //모달 관리
  const [followerModalOpen, setFollowerModalOpen] = useState(false);
  const [SettingModalOpen, setSettingModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const handleOpen = (title, description) => {
    setModalContent({ title, description });
    setFollowerModalOpen(true);
  };

  const handleClose = () => {
    setFollowerModalOpen(false);
    setSettingModalOpen(false);
  };

  const handleCheckingPwd = () => {
    setSettingModalOpen(true);
  }


  return (
    <>
      {/* 상단 정보 넣는 Stack 태그 */}
      <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}> {/* 방향을 row로 지정하면 가로 방향으로 배치됨 */}
        {/* Avatar 태그 : 유튜브 프사처럼 동그란 이미지 넣을 수 있는 것 */}
        <Avatar sx={{ width: '15rem', height: '15rem', margin: '20px', fontSize: '60px' }}>
          R
        </Avatar>
        {/* 프사 옆 정보와 팔로우 버튼 만드는 Stack 공간 */}
        <Stack sx={{ padding: '20px' }} fontWeight={'bold'}>
          <Stack direction={'row'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
            <Typography variant="h4" fontWeight={'bold'}>
              O O O
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
            <Box sx={{ cursor: 'pointer' }} >
              게시물 수
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => handleOpen('팔로워', '여기에 팔로워 수에 대한 정보를 표시')}>
              팔로워 수
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => handleOpen('팔로잉', '여기에 팔로잉 수에 대한 정보를 표시')}>
              팔로잉 수
            </Box>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <button variant="outlined" color="secondary" className='msg_button' sx={{ width: '80px' }}>팔로우</button>
            <button variant="outlined" color="secondary" className='msg_button' sx={{ width: '140px' }}>메시지 보내기</button>
          </Stack>
        </Stack>
        <Stack direction={'column'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
          <Button onClick={handleCheckingPwd}><SettingsIcon sx={{ fontSize: '50px', color: 'darkgray' }} /></Button>
        </Stack>
      </Stack>
      <FollowerModal open={followerModalOpen} handleClose={handleClose} content={modalContent} />
      <SettingModal open={SettingModalOpen} handleClose={handleClose} />

      {/* 소개문 넣는 Stack */}
      <Stack sx={{ paddingLeft: '30px', paddingRight: '30px' }}>
        소개문
      </Stack>
      <Divider sx={{ marginTop: '20px', marginBottom: '10px' }}><Chip label="활동"></Chip></Divider>

      {/* 게시물과 태그 넣는 거 생성 */}
      <Stack direction="row" justifyContent="center" alignItems='center' spacing={5}>
        <Stack direction="row" sx={{ cursor: 'pointer' }}>
          <SubjectIcon sx={{ fontSize: '15px' }} />
          <Typography sx={{ fontSize: '12px' }}>게시물</Typography>
        </Stack>
        <Stack direction="row" sx={{ cursor: 'pointer' }}>
          <AssignmentReturnedIcon sx={{ fontSize: '15px' }} />
          <Typography sx={{ fontSize: '12px' }}>태그</Typography>
        </Stack>
      </Stack>

      {/* 게시물 표시하는 Grid */}
      <Grid container>
        <Grid item xs={4}> {/* 1/3 만큼 가로를 차지하고 3개가 넘어가면 다음 줄에 생성 */}
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              1
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              2
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              3
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              4
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              5
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              6
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              7
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              8
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              9
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </>
  )
}