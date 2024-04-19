import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import '../css/notice.css';

export default function AlertModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button onClick={handleOpen} className='asideStyle'>
        <Badge badgeContent={4} color="primary" sx={{ marginRight: '28px'}}>
          <NotificationsNoneIcon sx={{ marginRight: '4px'}}/>
        </Badge>
        알림
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='styleBox'>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ margin: 3 }}>
            알림 목록
            <Badge badgeContent={4} color="primary" sx={{ marginLeft: 5, marginRight: 10 }}>
              <NotificationsActiveIcon color="action" sx={{ marginRight: '8px'}}/>
            </Badge>
          </Typography>
          <hr />
          <List sx={{ width: '100%', Width: 500 }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary='내 게시글에 새로운 댓글이 작성되었습니다.'
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline', marginRight: 5 }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      게시글 이름
                    </Typography>
                    {'댓글 내용'}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary='~가 당신을 팔로우 하고 싶어합니다.'
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline', marginRight: 5 }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      ~~의 마이페이지
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary='내 게시글에 ~~이 좋아요를 눌렀습니다.'
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline', marginRight: 5 }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      게시글 이름
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary='~~가 당신에게 DM을 보냈습니다.'
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline', marginRight: 5 }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      보낸사람 이름
                    </Typography>
                    {'메시지 내용'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Modal>
    </div>
  );
}