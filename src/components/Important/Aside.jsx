import * as React from 'react';
import '../../css/notice.css';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';

import AlertModal from '../Home/NoticeModal';

export default function Aside() {

  return (
    <div style={{ marginTop: '20px' }}>
      <button className='asideStyle'>
        <HomeIcon className='iconStyle' /> {/* 홈 아이콘 */}
        홈
      </button>
      <AlertModal />
      <button className='asideStyle'>
        <BookmarkIcon className='iconStyle' /> 
        {/* 북마크 아이콘 */}
        북마크
      </button>
      <button className='asideStyle'>
        <CreateIcon className='iconStyle' /> {/* 글쓰기 아이콘 */}
        글쓰기
      </button>
      <button className='asideStyle'>
        <SettingsIcon className='iconStyle' /> {/* 설정 아이콘 */}
        설정
      </button>
      <button className='asideStyle'>
        <AccountCircleIcon className='iconStyle' /> {/* 프로필 아이콘 */}
        프로필
      </button>
    </div>
  );
}