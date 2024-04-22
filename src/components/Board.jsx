import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from '@mui/material/Button';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ClearIcon from '@mui/icons-material/Clear';

import InputEmoji from 'react-input-emoji'
import styled from 'styled-components'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1100,
  height: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInputEmoji = styled(InputEmoji)`
  width: 350px;
  height: 50px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

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
          <Box sx={style}>

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
                <div style={{ marginBottom: 50, marginTop: 40, borderTop: "1px solid lightgrey", padding: 15 }}>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 4 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Typography>
                      안순현
                    </Typography>
                  </Stack>
                  <FlexContainer>
                    <StyledInputEmoji
                      value={text}
                      onChange={setText}
                      cleanOnEnter
                      onEnter={handleOnEnter}
                      placeholder="입력.."
                      fontSize={15}
                      language='kr'
                    />
                  </FlexContainer>
                </div>
              </Stack>
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: 3 }} >
                <ClearIcon onClick={handleClose} sx={{ cursor: 'pointer', fontSize: '30px', backgroundColor:'red',borderRadius:'100%',margin:'1px' }} />
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