// 기본
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, Chip, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

// 아이콘
import ImageIcon from '@mui/icons-material/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

// css 연결
import './search.css';
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function MySearchList() {
  
  const query = sessionStorage.getItem("search");
  // const location = useLocation();
  
  const [count, setCount] = useState(12);
  const [page, setPage] = useState(0);
  const [boardList, setBoardList] = useState([{
    bid: -1,
    uid: -1,
    title: '',
    bContents: '',
    modTime: null,
    viewCount: 0,
    likeCount: 0,
    replyCount: 0,
    image: '',
    shareUrl: '',
    nickname: '',
    hashTag: '',
    isDeleted: 0
  }]);
  // const [is, setIs] = useState(false);

  useEffect(() => {
    if (query != null)
    {
      axios.get('http://localhost:8090/board/list', {
        params: {
          c: count,
          q: query,
        }
      }).then(res => {
        setBoardList(res.data);
        if (res.data.length > 0)
        {
          setIs(true);
        }
      })
      .catch(error => console.log(error));
    }
    else
    {
      setIs(false);
    }
  }, [query, page]);

  // 무한 스크롤
  const [items, setItems] = useState([1, 2, 3, 4]); // Initial items
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
        loadMoreItems();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);
  const loadMoreItems = () => {
    const newItems = [5, 6, 7, 8];
    setItems(prevItems => [...prevItems, ...newItems]);
  };

  const target = useRef(null);
  
  useEffect(() => {
    observer.observe(target.current);
  })
  
  const options = {
    threshold: 1.0,
  };
  
  const callback = () => {
    setCount(count + 12);
    setPage(page + 1);
    console.log('실행!');
  }
  const observer = new IntersectionObserver(callback, options);
 
  
  {/* 아래 무한스크롤로 변환해야 함*/}
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container sx={{ padding: '20px' }}>
          <Grid item xs={0} lg={2}>
          </Grid>
          <Grid item xs={12} lg={8}>
            {/* 헤드라인 */}
            <Stack direction={'row'}>
              <Avatar sx={{ width: '130px', height: '130px', margin: '20px', fontSize: '60px' }}>
                img
              </Avatar>
              <Stack sx={{ padding: '20px' }} fontWeight={'bold'}>
                <Typography variant="h4" fontWeight={'bold'}>
                  # {query}
                </Typography>
                <Stack direction={'row'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
                  <Box sx={{ cursor: 'pointer' }}>
                    게시물
                  </Box>
                  <Box sx={{ cursor: 'pointer' }}>
                    10.2k
                  </Box>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                  <button className="msg_button" ><span style={{ fontSize: '23px', fontWeight: 'bolder', }}>팔로우</span></button>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ marginTop: '20px', marginBottom: '10px' }}><Chip label="인기 게시물"></Chip></Divider>

            {/* 버튼 */}
            <Stack direction="row" justifyContent="center" alignItems='center' spacing={5}>
              <Stack direction="row" sx={{ cursor: 'pointer' }}>
                <ImageIcon sx={{ fontSize: '15px' }} />
                <Typography sx={{ fontSize: '12px' }}>사진</Typography>
              </Stack>
              <Stack direction="row" sx={{ cursor: 'pointer' }}>
                <PlayCircleIcon sx={{ fontSize: '15px' }} />
                <Typography sx={{ fontSize: '12px' }}>동영상</Typography>
              </Stack>
            </Stack>
            
            {/* 목록 */}
            <Grid container>
              {
                boardList.map((board, idx) => {
                  if (board.bid == -1 || board == null)
                  {
                    return <div key={idx}>
                      검색 결과가 없습니다!
                    </div>
                  }
                  else
                  {
                    return <Grid item xs={6} md={4} key={idx}>
                      <Paper elevation={2} className="uploadlist">
                        <Box className="uploaditem">
                          bid: {board.bid} <br />
                          nickname: {board.nickname}
                        </Box>
                      </Paper>
                    </Grid>
                  }
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}