import React from 'react';
import '../../css/notice.css';
import { useNavigate } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SettingsIcon from '@mui/icons-material/Settings';

import AlertModal from '../Home/NoticeModal';
import ChattingModal from '../Home/ChattingModal';
import PostingModal from '../Home/PostingModal';
import { Grid, Modal } from '@mui/material';

export default function Aside() {
  const navigate = useNavigate();

  const SettingButton = () => {
    navigate('/setting');
  };

  const ProfileButton = () => {
    navigate('/profile');
  };

  const HomeButton = () => {
    navigate('/');
  };

  const BookmarkButton = () => {
    navigate('/profile/mypage');
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div style={{ marginTop: '20px' }}>
      <button className='asideStyle' onClick={HomeButton}>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
            <HomeIcon className='iconStyle' /> {/* 홈 아이콘 */}
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            홈
          </Grid>
        </Grid>
      </button>
      <AlertModal />
      <button className='asideStyle' onClick={BookmarkButton}>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
            <BookmarkIcon className='iconStyle' />
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            북마크
          </Grid>
        </Grid>
      </button>
      
      {/* 글쓰기 모달 */}
      <PostingModal/>
      
      {/* 메시지 모달*/}
      <ChattingModal />
      
      <button className='asideStyle' onClick={SettingButton}>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
            <SettingsIcon className='iconStyle' />
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            설정
          </Grid>
        </Grid>
      </button>
      <button className='asideStyle' onClick={ProfileButton}>
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