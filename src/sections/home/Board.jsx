// 기본
import React, { useEffect, useState } from 'react'
import {
  Card, CardHeader, CardMedia, CardActions, CardContent, Avatar, Typography,
  ListItemAvatar, ListItem, List, Button, Box, Modal
} from '@mui/material';
import { red } from '@mui/material/colors';
import { Stack } from '@mui/system';

// 이모티콘
import InputEmoji from 'react-input-emoji'

// 아이콘
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { GetWithExpiry } from "../../api/LocalStorage.js";
import axios from 'axios';

import { Carousel } from "react-responsive-carousel";

// css 연결
import './board.css';

import { useNavigate } from "react-router-dom";

export default function Board() {
  const navigate = useNavigate();

  const uid = parseInt(GetWithExpiry("uid"));
  const [bid, setBid] = useState([null]);
  const [BoardList, setBoardList] = useState([]);
  const [replyList, setReplyList] = useState([]);
  
  // uid가 로컬스토리지에 없으면 로그인 창으로 이동
  if (!uid) {
    navigate("/login");
  }
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    if (uid != null) {
      axios.get('http://localhost:8090/user/getUser', {
        params: {
          uid: uid,
        }
      }).then(res => {
        if (res.data.nickname != null && res.data.nickname != '') {
          setNickname(res.data.nickname);
        }
        else {
          setNickname(res.data.email);
        }
      })
    }
  }, []);
  // 창 열고 닫기
  const [open, setOpen] = useState(false);
  const handleOpen = (bid) => {
    setOpen(true);
    setBid(bid);
  }
  const handleClose = () => {
    setOpen(false);
    setBid(null);
  };

  useEffect(() => {
    axios.get('http://localhost:8090/board/list', {
      params: {
        c: 0,
        f: '',
        q: '',
      }
    })
      .then(res => {
        setBoardList(res.data.map(item =>({
          ...item,
          images:item.images.split(',')
        })));
        // if ((res.data.image).length > 0)
        // {
        //   const images = res.data.image.split(',');
          
        // }
      })
      .catch(err => {
        console.log(err);
      });

  }, []);
  useEffect(() => {
    axios.get('http://localhost:8090/board/replyList', {
      params: {
        bid: bid,
        uid: uid,
      }
    })
      .then(res => {
        const formData = res.data.map(item => ({
          rContents: item.rContents,
          modTime: item.modTime,
          nickname: item.nickname
        }));
        setReplyList(formData);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  // const handleFormSubmit = () => {
  //   var sendData = JSON.stringify({
  //     bid: bid,
  //     uid: uid,
  //     rContents: text.toString(),
  //     nickname: nickname,
  //   })

  //   axios({
  //     method: "POST",
  //     url: 'http://localhost:8090/board/reply',
  //     data: sendData,
  //     headers: { 'Content-Type': 'application/json' }
  //   }).catch(error => console.log(error));
  // };
  const handleFormSubmit = () => { console.log(text);
    axios.post('http://localhost:8090/board/reply', {
      bid: bid,
      uid: uid,
      rContents: text,
      nickname: nickname,
    }).catch(error => console.log(error));
  }
  // 댓글 입력창 구현 - 이모티콘
  const [text, setText] = useState("");
  function handleOnEnter(text) {
    setText(text);
    console.log(text);
  }
  return (
    <>
      {/* boardList */}
      {BoardList.map((data) => (
        <Card key={data.bid} sx={{ width: "70%", marginTop: '30px', border: '1px solid lightgrey' }}>
          {/* Home 부분에서 게시글이 보이는 모습 */}
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={data.title}
            subheader={data.modTime}
          />
          {data.images.map((image, index) => (
            <CardMedia key={index} component="img" height="194" image={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${image}`} alt="Paella dish" />
          ))}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.bContents}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* 게시글 하단 버튼 - 좋아요 / 게시글 */}
            <Button>
              <FavoriteIcon />
            </Button>
            <Button onClick={() => { handleOpen(data.bid) }}>

              <ChatBubbleOutlineIcon />
            </Button>
            <Button >
              <ShareIcon />
            </Button>
            <Button>
              <BookmarkIcon />
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* 게시글 모달 */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className='board_modal'>
          <Stack direction="row" sx={{ height: "100%" }}>
            <Stack direction="column" sx={{ flex: 1.3, height: "100%", }} >
              {/* 게시글 내용 */}
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

            {/*  ReplyList */}
            <form onSubmit={handleFormSubmit}>
              <Stack direction="column" sx={{ flex: 0.7, height: "100%", padding: "32px 4px 32px 20px ", justifyContent: "space-between" }}>
                {replyList.map((data) => (
                  <List key={data} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflowY: 'auto', paddingRight: 3 }}>
                    <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* alignItem 값을 수정 */}
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>
                      <Typography>
                        안순현
                      </Typography>
                    </ListItem>
                    <Typography variant="body2" color="text.secondary">
                      {data.nickname}
                    </Typography>
                  </List>
                ))}

                {/* 댓글 입력란 */}
                <Stack className='board_div_style_1' direction="row" alignItems="center" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography>
                    {nickname}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 6 }}>
                  {/* 이모티콘 */}
                  <InputEmoji
                    value={text}
                    onChange={handleOnEnter}
                    // onEnter={handleOnEnter}
                    placeholder="입력.."
                    shouldReturn
                    fontSize={15}
                    language='kr'
                  >
                  </InputEmoji>
                  <Button type='submit' sx={{ position: 'absolute', right: 35, zIndex: 2 }}>게시</Button>
                </Stack>
              </Stack>
            </form>

            {/* 닫기 버튼 */}
            <div className='board_div_style_2'>
              <ClearIcon onClick={handleClose} sx={{ cursor: 'pointer', fontSize: '26px', backgroundColor: 'rgb(162, 152, 182)', borderRadius: '100%', margin: '3px' }} />
            </div>
          </Stack>
        </Box>
      </Modal>

    </>
  );
}