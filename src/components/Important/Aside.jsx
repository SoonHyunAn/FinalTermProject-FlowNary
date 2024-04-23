import * as React from 'react';
import '../../css/notice.css';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';

import AlertModal from '../Home/NoticeModal';
import { Grid } from '@mui/material';

export default function Aside() {

  return (
    <div style={{ marginTop: '20px' }}>
      <button className='asideStyle'>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' },  pl: 3 }}>
            <HomeIcon className='iconStyle' /> {/* 홈 아이콘 */}
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            홈
          </Grid>
        </Grid>
      </button>
      <AlertModal />
      <button className='asideStyle'>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
            <BookmarkIcon className='iconStyle' />
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            북마크
          </Grid>
        </Grid>
      </button>
      <button className='asideStyle'>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
            <CreateIcon className='iconStyle' />
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            글쓰기
          </Grid>
        </Grid>
      </button>
      <button className='asideStyle'>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
            <SettingsIcon className='iconStyle' />
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            설정
          </Grid>
        </Grid>
      </button>
      <button className='asideStyle'>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
            <AccountCircleIcon className='iconStyle' />
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            프로필
          </Grid>
        </Grid>
      </button>
    </div>
  );
}