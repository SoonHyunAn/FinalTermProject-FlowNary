import { React } from 'react';
import { styled, alpha, AppBar, Box, Toolbar, InputBase, Grid, Button } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

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
  const logoImage = '/img/LightLogo.png';
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #7B68EE, rgb(28, 0, 53))', boxShadow: 'none' }}>
        <Toolbar sx={{ padding: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2} sx={{ placeItems: 'center', display: 'grid' }}>
                <img src={logoImage} alt='LOGO' style={{ maxWidth: '70%', display: 'flex', alignItems: 'center'  }} />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={6} sx={{ placeItems: 'center', display: 'grid' }}>
              <Search sx={{borderRadius:50}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={1} sx={{ placeItems: 'center', display: 'grid' }}>
              <Button style={{ color: 'white', opacity: 0.7 }}>로그아웃</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box >
  );
}