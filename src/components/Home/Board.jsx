import React, { useState } from 'react'
import {
  Card, CardHeader, CardMedia, CardActions, CardContent, Avatar, Typography,
  ListItemAvatar, ListItem, List, Button, Box, Modal
} from '@mui/material';
import InputEmoji from 'react-input-emoji'
import { red } from '@mui/material/colors';
import { Stack } from '@mui/system';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import '../../css/board.css';

export default function Board() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = useState('');

  function handleOnEnter(text) {
    console.log('enter', text)
  }

  return (
    <Card sx={{ width: "70%", marginTop: '20px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/img/sea.avif"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Button>
          <FavoriteIcon />
        </Button>

        <Button onClick={handleOpen}><ChatBubbleOutlineIcon /></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='board_modal'>

            <Stack direction="row" sx={{ height: "100%" }}>
              <Stack direction="column" sx={{ flex: 1.3, height: "100%", }} >
                <Card sx={{ height: "100vh", padding: 3 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="/img/sea.avif"
                    alt="Paella dish"
                  />
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '62%', overflowY: 'auto' }}>
                    <Stack direction="row" spacing={1} padding={'10px 0 25px 0'}>
                      <Button sx={{ padding: 0, width: 0 }}>
                        <FavoriteIcon />
                      </Button>
                      <Button sx={{ padding: 0, width: 0 }}>
                        <ShareIcon />
                      </Button>
                      <Button sx={{ padding: 0, width: 0 }}>
                        <BookmarkIcon />
                      </Button>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Typography variant="body2" color="text.secondary" >
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook

                        cook

                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.

                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}></Stack>
                    <Stack direction="row" spacing={1}></Stack>
                    <Stack direction="row" spacing={1}></Stack>
                    <Stack direction="row" spacing={1}></Stack>
                    <Stack direction="row" spacing={1}></Stack>
                    <Stack direction="row" spacing={1}></Stack>
                    <Stack direction="row" spacing={1}></Stack>

                  </CardContent>
                </Card>
              </Stack>
              <Stack direction="column" sx={{ flex: 0.7, height: "100%", padding: "32px 4px 32px 20px ", justifyContent: "space-between" }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflowY: 'auto', paddingRight: 3 }}>
                  <ListItem alignItems="center" sx={{ display: 'flex', alignItems: 'center' }}> {/* alignItem 값을 수정 */}
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <Typography>
                      안순현
                    </Typography>
                  </ListItem>
                  <h4 style={{ flexWrap: 'wrap' }}>내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다</h4>

                  <ListItem alignItems="flex" sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <Typography>
                      안순현
                    </Typography>
                  </ListItem>
                  <h4 style={{ flexWrap: 'wrap' }}>내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다</h4>

                  <ListItem alignItems="flex" sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <Typography>
                      안순현
                    </Typography>
                  </ListItem>
                  <h4 style={{ flexWrap: 'wrap' }}>내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다</h4>

                  <ListItem alignItems="flex" sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <Typography>
                      안순현
                    </Typography>
                  </ListItem>
                  <h4 style={{ flexWrap: 'wrap' }}>내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다내용입니다안녕하세요감사합니다</h4>


                </List>
                <Stack className='board_div_style_1' direction="row" alignItems="center" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography>
                    안순현
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 6 }}>
                  <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="입력.."
                    fontSize={15}
                    language='kr'
                    className='styled-input-emoji'
                  >
                  </InputEmoji>
                </Stack>
              </Stack>
              <div className='board_div_style_2'>
                <ClearIcon onClick={handleClose} sx={{ cursor: 'pointer', fontSize: '26px', backgroundColor: 'rgb(162, 152, 182)', borderRadius: '100%', margin: '3px' }} />
              </div>
            </Stack>
          </Box>
        </Modal>
        <Button >
          <ShareIcon />
        </Button>
        <Button>
          <BookmarkIcon />
        </Button>
      </CardActions>
    </Card>
  );

}