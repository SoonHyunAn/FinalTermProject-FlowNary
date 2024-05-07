// 기본
import React, { useEffect, useState } from 'react'
import {
  Card, CardHeader, CardMedia, CardActions, CardContent, Avatar, Typography,
  ListItemAvatar, ListItem, List, Button, Box, Modal, Grid
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

// css 연결
import './board.css';

import { useNavigate } from "react-router-dom";

export default function Board() {
  const navigate = useNavigate();

  const uid = parseInt(GetWithExpiry("uid"));
  const [bid, setBid] = useState(0);
  const [text, setText] = useState('');


  // uid가 로컬스토리지에 없으면 로그인 창으로 이동
  if (!uid) {
    navigate("/login");
  }
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    if (uid != null && !isNaN(uid)) {
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
      }).catch(error => console.log(error));
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
    setBid(-1);
  };
  const [dataList, setDataList] = useState([]);
  const [replyList, setRelpyList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/board/list', {
      params: {
        c: 10,
      }
    })
      .then(res => {
        const formData = res.data.map(item => ({
          title: item.title,
          bContents: item.bContents,
          image: item.image.split(','),
          modTime: item.modTime,
          bid: item.bid,
        }));
        setDataList(formData);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  useEffect(() => {
    if (open == true)
    {
      axios.get('http://localhost:8090/board/replyList', {
        params: {
          bid: bid,
          offset: 0,
          limit: 10
        }
      })
        .then(res => {
          const formData = res.data.map(item => ({
            rContents: item.rContents,
            modTime: item.modTime,
            likeCount: item.likeCount,
            nickname: item.nickname,
          }));
          setRelpyList(formData);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [open]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    var sendData = JSON.stringify({
      bid: bid,
      uid: uid,
      rContents: text,
      nickname: nickname,
    })

    axios({
      method: "POST",
      url: 'http://localhost:8090/board/reply',
      data: sendData,
      headers: { 'Content-Type': 'application/json' }
    }).catch(error => console.log(error));
    console.log(text);
  };

  // 댓글 입력창 구현 - 이모티콘
  function handleOnEnter(text) { console.log('enter', text); }

  // 더보기
  const [expandedContents, setExpandedContents] = useState({});
  const toggleExpand = (index) => {
    setExpandedContents((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* boardList */}
      {dataList.map((data) => (
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
          <CardMedia component="img" height="194" image={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${data.image[0]}`} alt="Paella dish" />
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
            <Button onClick={() => handleOpen(data.bid)}>
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
          <Stack direction="row" justifyContent="space-between" sx={{ height: "100%" }}>
            <Stack direction="column" sx={{ flex: '1.4', height: "100%", }} >
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


            {/* 댓글 내용 List */}
            <Stack direction="column" sx={{ flex: '1.4', height: "100%", padding: 1 }}>
              {/* padding: "32px 4px 32px 20px " */}
              <Stack direction="column" alignItems="center" sx={{ width: "100%", overflowX: 'hidden', overflowY: 'auto' }}>
                {replyList.map((data, index) => (
                  <List key={data} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingRight: 3, }}>

                    <ListItem sx={{ display: 'flex', alignItems: 'center' }}> {/* alignItem 값을 수정 */}
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>
                      <Typography>
                        {data.nickname}
                      </Typography>
                    </ListItem>
                    <Typography variant="body2" color="text.secondary" sx={{ padding: 2, overflowWrap: 'break-word', }}>
                      {expandedContents[index] ? data.rContents : data.rContents.slice(0, 30)}
                      {data.rContents.length > 100 && !expandedContents[index] && (
                        <button onClick={() => toggleExpand(index)}>더보기</button>
                      )}
                    </Typography>
                    <hr />

                  </List>
                ))}
              </Stack>

              {/* 댓글 입력란 */}
              <Stack className='board_div_style_1' direction="column" alignItems="center" >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography>
                  {nickname}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <InputEmoji
                    value={text}
                    onChange={setText}
                    onEnter={handleOnEnter}
                    placeholder="입력.."
                    shouldReturn
                    fontSize={15}
                    language='kr'
                    sx={{ flex: 1 }} // InputEmoji의 크기를 조절
                  />
                  <Button onClick={handleFormSubmit} sx={{ alignItems: 'end' }}>게시</Button>
                </Box>
              </Stack>

              {/* <Stack direction="row" alignItems="center" spacing={2} sx={{ marginBottom: 6 }}>
                  {/* 이모티콘 */}
            </Stack>

            {/* 닫기 버튼 */}
            <div className='board_div_style_2'>
              <ClearIcon onClick={handleClose} sx={{ cursor: 'pointer', fontSize: '26px', backgroundColor: 'rgb(162, 152, 182)', borderRadius: '100%', margin: '3px' }} />
            </div>
          </Stack>
        </Box>
      </Modal >

    </>
  );

}