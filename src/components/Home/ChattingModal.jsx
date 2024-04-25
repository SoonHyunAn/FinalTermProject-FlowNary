import React, { useState } from 'react';
import { Box, Modal, Grid, ListItem, List, Divider, ListItemAvatar, Avatar, ListItemText, Typography, ListSubheader } from '@mui/material';

import MessageIcon from '@mui/icons-material/Message';
import ClearIcon from '@mui/icons-material/Clear';
import '../../css/notice.css';
import Chat from '../Chat/Chat';

export default function ChattingModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button onClick={handleOpen} className='asideStyle'>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
            <MessageIcon className='iconStyle' />
          </Grid>
          <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
            DM
          </Grid>
        </Grid>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='styleBox2'>
          <List
            sx={{ width: '20%', boxShadow: '0 0 6px rgba(0, 0, 0, 0.5)', padding: 3 }}
            subheader={<ListSubheader component="div" id="nested-list-subheader" sx={{textAlign:'center' ,fontSize:25}}>
              메시지
            </ListSubheader>
            }>
            <ListItem alignItems="flex-start" sx={{ marginBottom: '10%' }} button>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary='곽주영'
                secondary='2024-04-25'
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" sx={{ marginBottom: '10%' }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary='곽주영'
                secondary='2024-04-25'
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start" sx={{ marginBottom: '10%' }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary='곽주영'
                secondary='2024-04-25'
              />
            </ListItem>
            <Divider variant="inset" component="li" />

          </List>
          <Chat />
          <div className='board_div_style_2'>
        <ClearIcon onClick={handleClose} sx={{ cursor: 'pointer', fontSize: '26px', backgroundColor: 'rgb(162, 152, 182)', borderRadius: '100%', margin: '3px' }} />
      </div>
        </Box>
      </Modal >
    </>
  );
}