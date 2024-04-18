import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const asideStyle = {
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer', 
  display: 'flex',
  alignItems: 'center',
  padding:3,
  marginBottom: 55
};

const iconStyle = {
  marginRight: '2'
}



export default function Aside() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{marginTop:'20px'}}>
      <button style={asideStyle}>
        <HomeIcon style={iconStyle} /> {/* 알림 아이콘 */}
        홈
      </button>
      <button onClick={handleOpen} style={asideStyle}>
        <NotificationsNoneIcon style={iconStyle} /> {/* 알림 아이콘 */}
        알림
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            알림
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <button style={asideStyle}>
        <BookmarkIcon style={iconStyle} /> {/* 알림 아이콘 */}
        북마크
      </button>
      <button style={asideStyle}>
        <CreateIcon style={iconStyle} /> {/* 알림 아이콘 */}
        글쓰기
      </button>
      <button style={asideStyle}>
        <SettingsIcon style={iconStyle} /> {/* 알림 아이콘 */}
        설정
      </button>
      <button style={asideStyle}>
        <AccountCircleIcon style={iconStyle} /> {/* 알림 아이콘 */}
        프로필
      </button>
    </div>
  );
}