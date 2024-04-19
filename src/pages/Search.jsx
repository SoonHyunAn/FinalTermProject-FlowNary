import { Avatar, Box, Button, Chip, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageIcon from '@mui/icons-material/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RecommendList from '../components/RecommendList'
import Aside from "../components/Aside";
import SnsBar from "../components/SnsBar";


export default function Search() {

  const uploadlist = {
    position: 'relative', width: '100%', paddingBottom: '100%', margin: '2px'
  };
  const uploaditem = {
    position: 'absolute', width: '100%', height: '100%', top: '0', bottom: '0',
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  };
  const [items, setItems] = useState([1, 2, 3, 4]); // Initial items

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
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
  return (
    <>
      <SnsBar />
      <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
        {/* 첫 번째 영역 */}
        <Stack direction="column" spacing={2} sx={{ flex: 0.4, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>

          {/* 영역 1의 컨텐츠 */}
          <Aside />
        </Stack>

        {/* 두 번째 영역 */}
        <Stack direction="column" spacing={2} sx={{ flex: 1.4 }}>
          <Box sx={{ width: '100%' }}>
            <Grid container sx={{ padding: '20px' }}>
              <Grid item xs={0} lg={2}>
              </Grid>
              <Grid item xs={12} lg={8}>

                <Stack direction={'row'}>
                  <Avatar sx={{ width: '130px', height: '130px', margin: '20px', fontSize: '60px' }}>
                    img
                  </Avatar>
                  <Stack sx={{ padding: '20px' }} fontWeight={'bold'}>
                    <Typography variant="h4" fontWeight={'bold'}>
                      # text
                    </Typography>
                    <Stack direction={'row'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
                      <Box sx={{ cursor: 'pointer' }}>
                        게시물
                      </Box>
                      <Box sx={{ cursor: 'pointer' }}>
                        OO.O 만
                      </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                      <Button variant="contained" sx={{ width: '200' }}>팔로우</Button>
                    </Stack>
                  </Stack>
                </Stack>
                <Divider sx={{ marginTop: '20px', marginBottom: '10px' }}><Chip label="인기 게시물"></Chip></Divider>

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

                <Grid container>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={uploadlist}>
                      <Box sx={uploaditem}>
                        1
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={uploadlist}>
                      <Box sx={uploaditem}>
                        2
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={uploadlist}>
                      <Box sx={uploaditem}>
                        3
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={uploadlist}>
                      <Box sx={uploaditem}>
                        4
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={uploadlist}>
                      <Box sx={uploaditem}>
                        5
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={uploadlist}>
                      <Box sx={uploaditem}>
                        6
                      </Box>
                    </Paper>
                  </Grid>

                </Grid>
              </Grid>
              <Grid item xs={0} lg={2}>
                <RecommendList />

              </Grid>

            </Grid>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}

