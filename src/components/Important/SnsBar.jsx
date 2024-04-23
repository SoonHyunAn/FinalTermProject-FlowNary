import { React, useState } from 'react';
import { styled, alpha, AppBar, Box, Toolbar, InputBase, Grid, Button, Modal, TextField } from '@mui/material';

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

export default function SnsBar() {
  const logoImageLarge = '/img/LightLogo.png';
  const logoImageXs = '/img/LightLogoXs.png';

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSearch = () => {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #7B68EE, rgb(28, 0, 53))', boxShadow: 'none' }}>
        <Toolbar sx={{ padding: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1} lg={0}>
            </Grid>
            <Grid item xs={3} lg={1} sx={{ placeItems: 'center', display: { xs: 'none', lg: 'flex' }, }}>
              <img src={logoImageLarge} alt='LOGO' style={{ width: '100%', alignItems: 'center' }} />
            </Grid>
            <Grid item xs={3} lg={1} sx={{ placeItems: 'center', display: { xs: 'flex', lg: 'none' }, }}>
              <img src={logoImageXs} alt='LOGO' style={{ width: '15%', alignItems: 'center' }} />
            </Grid>
            <Grid item xs={1} lg={1}>
            </Grid>

            <Grid item xs={2} lg={6} sx={{ placeItems: 'center', display: 'flex' }}>
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
                        <span style={{ color: 'purple', fontSize: '20px', fontWeight: 'bold' }}>검색</span><Button sx={{ cursor: 'pointer' }} onClick={handleSearch}><SearchIcon sx={{ color: 'purple', fontSize: '35px' }} /></Button>
                      </Grid>
                      <Grid item xs={2}>
                        <span style={{ color: 'purple', fontSize: '20px', fontWeight: 'bold' }}>취소</span><Button sx={{ cursor: 'pointer' }} onClick={handleClose}><CloseIcon sx={{ color: 'purple', fontSize: '35px' }} /></Button>
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
                <Button sx={{ cursor: 'pointer' }} onClick={handleClose}><CloseIcon sx={{ color: 'white'}} /></Button>
              </Search>
            </Grid>

            <Grid item xs={1} lg={1}>
            </Grid>
            <Grid item xs={4} lg={1} sx={{ placeItems: 'center', display: 'flex' }}>
              <Button style={{ color: 'white', opacity: 0.7 }}>로그아웃</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box >
  );
}