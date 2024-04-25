import { React, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { styled, alpha, AppBar, Box, Toolbar, InputBase, Grid, Button, Modal, TextField } from '@mui/material';
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15), // 검색창 배경색
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '120%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '400px',
      '&:focus': {
        width: '450px',
      },
    },
  },
}));

const StyledToolbar = (props) => (
  <Toolbar {...props} sx={{ padding: 0 }} />
);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};



export default function SnsBar() {
  const logoImageLarge = '/img/LightLogo.png';
  const logoImageXs = '/img/LightLogoXs.png';

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const HomeButton = () => {
    navigate('/');
  };
  // eslint-disable-next-line
  const app = initializeApp(firebaseConfig);

  // Firebase Auth 객체 생성
  const auth = getAuth();

  // 로그인 상태를 나타내는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect 훅
  useEffect(() => {
    // 사용자의 로그인 상태를 실시간으로 확인하는 이벤트 리스너 등록
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // 사용자가 로그인한 경우
      if (user) {
        setIsLoggedIn(true); // 로그인 상태로 설정
      } else {
        setIsLoggedIn(false); // 로그아웃 상태로 설정
      }
    });

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth) // 현재 사용자의 로그인 세션을 종료
      .then(() => {
        console.log('로그아웃 성공');
        // 로그아웃 성공 시 필요한 추가적인 작업을 수행할 수 있습니다.
      })
      .catch((error) => {
        console.error('로그아웃 오류:', error);
        // 로그아웃 중 에러가 발생한 경우 적절히 처리합니다.
      });
  };

  const handleSearch = () => {
    return null;
  }

  const navigate = useNavigate();
  const handleLinkToLogin = () => {
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #7B68EE, rgb(28, 0, 53))', boxShadow: 'none' }}>
        <StyledToolbar>
          <Grid container spacing={2}>
            <Grid item xs={0.5} lg={0.1}>
            </Grid>
            <Grid item xs={3.5} lg={1.4} sx={{ placeItems: 'center', display: { xs: 'none', lg: 'flex' }, }}>
              <img src={logoImageLarge} alt='LOGO' style={{ width: '100%', alignItems: 'center', cursor: 'pointer' }} onClick={HomeButton} />
            </Grid>
            <Grid item xs={3} lg={1} sx={{ placeItems: 'center', display: { xs: 'flex', lg: 'none', cursor: 'pointer' }, justifyContent: 'start' }} onClick={HomeButton}>
              <img src={logoImageXs} alt='LOGO' style={{ width: '15%', alignItems: 'center' }} />
            </Grid>
            <Grid item xs={1} lg={1.8}>
            </Grid>

            <Grid item xs={2} lg={5.5} sx={{ placeItems: 'center', display: 'flex' }}>
              <Search sx={{ borderRadius: 50, display: { xs: 'flex', lg: 'none' } }}  >
                <Button sx={{ cursor: 'pointer' }} onClick={handleOpen}><SearchIcon sx={{ color: 'white' }} /></Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box className='search_modal' sx={{ display: 'flex' }}>
                    <Grid container>
                      <Grid item xs={8}>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="검색"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Button sx={{ cursor: 'pointer' }} onClick={handleSearch}><SearchIcon sx={{ color: 'purple', fontSize: '35px' }} /></Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button sx={{ cursor: 'pointer' }} onClick={handleClose}><CloseIcon sx={{ color: 'purple', fontSize: '35px' }} /></Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Modal>
              </Search>
              <Search sx={{ borderRadius: 50, display: { xs: 'none', lg: 'flex' } }}  >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="검색"
                  inputProps={{ 'aria-label': 'search' }}
                />
                <Button sx={{ cursor: 'pointer' }} onClick={handleClose}><CloseIcon sx={{ color: 'white' }} /></Button>
              </Search>
            </Grid>
            <Grid item xs={1} lg={2.1}>
            </Grid>
            {/* 로그아웃 또는 로그인 버튼 */}
            <Grid item xs={4} lg={1} sx={{ placeItems: 'center', display: 'flex' }}>
              {isLoggedIn ? ( // 로그인 상태인 경우
                <Button style={{ color: 'white', opacity: 0.7 }} onClick={handleLogout}>로그아웃</Button>
              ) : ( // 로그아웃 상태인 경우
                <Button style={{ color: 'white', opacity: 0.7 }} onClick={handleLinkToLogin}>로그인</Button>
              )}
            </Grid>
          </Grid>
        </StyledToolbar>
      </AppBar>
    </Box >
  );
}