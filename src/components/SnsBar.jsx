import { React } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
// import zIndex from '@mui/material/styles/zIndex';

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
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      '&:focus': {
        width: '300px',
      },
    },
  },
}));

export default function SnsBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #7B68EE, rgb(28, 0, 53))', boxShadow: 'none' }}>
      <Toolbar sx={{paddingTop: 3}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              flownary
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={2}>
            <button style={{color:'red', border:'1px solid red', fontSize:12}}>프로필 사진 / 닉네임</button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </Box >
  );
}