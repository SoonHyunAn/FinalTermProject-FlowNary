import React from "react";
import SnsBar from '../components/SnsBar';
import Aside from "../components/Aside";
import '../css/mypage.css'

import { Avatar, Box, Button, Chip, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import SubjectIcon from '@mui/icons-material/Subject';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';

export default function Profile() {

    // style 속성을 지정하는 값
    const uploadlist = { // padding으로만 가득찬 정사각형 요소 생성
        position: 'relative', width: '100%', paddingBottom: '100%', margin: '2px'
    };
    const uploaditem = { // padding으로 가득찬 요소에 내용을 넣기 위한 태그의 style 속성
        position: 'absolute', width: '100%', height: '100%', top: '0', bottom: '0',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    };

    return (
        <>
            <SnsBar />
            <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
                <Stack direction="column" spacing={2} sx={{ flex: 0.3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <Aside />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 1.5 }}>
                    <Box sx={{ width: '100%' }}>
                        {/* 전체 화면을 그리드로 분할 */}
                        <Grid container sx={{ padding: '20px' }}>
                            {/* 
                    Grid 태그 설명
                    가로길이를 12등분하여 1일 경우 가로의 1/12만큼 차지하는 식으로 작동
                    xs -> 작은 화면일 때 적용되는 방식
                    lg -> 큰 화면일 때 적용되는 방식

                    ex) xs={12} 면 부모 요소(부모 요소가 없으면 창 전체)의 가로를 전부 차지 
                */}
                            <Grid item xs={0} lg={2}> {/* 화면 크기가 크면 좌측에 빈 공간 2/12만큼 생성 */}
                            </Grid>
                            <Grid item xs={12} lg={8}> {/* 내용 들어가는 공간 */}

                                {/* 상단 정보 넣는 Stack 태그 */}
                                <Stack direction={'row'}> {/* 방향을 row로 지정하면 가로 방향으로 배치됨 */}
                                    {/* Avatar 태그 : 유튜브 프사처럼 동그란 이미지 넣을 수 있는 것 */}
                                    <Avatar sx={{ width: '150px', height: '150px', margin: '20px', fontSize: '60px' }}>
                                        R
                                    </Avatar>
                                    {/* 프사 옆 정보와 팔로우 버튼 만드는 Stack 공간 */}
                                    <Stack sx={{ padding: '20px' }} fontWeight={'bold'}>
                                        <Typography variant="h4" fontWeight={'bold'}>
                                            O O O
                                        </Typography>
                                        <Stack direction={'row'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
                                            <Box sx={{ cursor: 'pointer' }}>
                                                게시물 수
                                            </Box>
                                            <Box sx={{ cursor: 'pointer' }}>
                                                팔로워 수
                                            </Box>
                                            <Box sx={{ cursor: 'pointer' }}>
                                                팔로잉 수
                                            </Box>
                                        </Stack>
                                        <Stack direction={'row'} spacing={2}>
                                            <button variant="outlined" color="secondary" className='msg_button' sx={{ width: '80px' }}>팔로우</button>
                                            <button variant="outlined" color="secondary" className='msg_button' sx={{ width: '140px' }}>메시지 보내기</button>
                                        </Stack>
                                    </Stack>
                                </Stack>

                                {/* 소개문 넣는 Stack */}
                                <Stack sx={{ paddingLeft: '30px', paddingRight: '30px' }}>
                                    소개문
                                </Stack>

                                {/* Divider : 가로선 만드는 요소 */}
                                <Divider sx={{ marginTop: '20px', marginBottom: '10px' }}><Chip label="활동"></Chip></Divider>

                                {/* 게시물과 태그 넣는 거 생성 */}
                                <Stack direction="row" justifyContent="center" alignItems='center' spacing={5}>
                                    <Stack direction="row" sx={{ cursor: 'pointer' }}>
                                        <SubjectIcon sx={{ fontSize: '15px' }} /> {/* 아이콘은 fontsize로 크기 지정 */}
                                        <Typography sx={{ fontSize: '12px' }}>게시물</Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{ cursor: 'pointer' }}>
                                        <AssignmentReturnedIcon sx={{ fontSize: '15px' }} />
                                        <Typography sx={{ fontSize: '12px' }}>태그</Typography>
                                    </Stack>
                                </Stack>

                                {/* 게시물 표시하는 Grid */}
                                <Grid container>
                                    <Grid item xs={4}> {/* 1/3 만큼 가로를 차지하고 3개가 넘어가면 다음 줄에 생성 */}
                                        <Paper elevation={3} sx={uploadlist}> {/* 스타일 속성은 위에 존재 */}
                                            <Box sx={uploaditem}>
                                                1
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Paper elevation={3} sx={uploadlist}>
                                            <Box sx={uploaditem}>
                                                2
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Paper elevation={3} sx={uploadlist}>
                                            <Box sx={uploaditem}>
                                                3
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Paper elevation={3} sx={uploadlist}>
                                            <Box sx={uploaditem}>
                                                4
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Paper elevation={3} sx={uploadlist}>
                                            <Box sx={uploaditem}>
                                                5
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Paper elevation={3} sx={uploadlist}>
                                            <Box sx={uploaditem}>
                                                6
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Paper elevation={3} sx={uploadlist}>
                                            <Box sx={uploaditem}>
                                                7
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Paper elevation={3} sx={uploadlist}>
                                            <Box sx={uploaditem}>
                                                8
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Paper elevation={3} sx={uploadlist}>
                                            <Box sx={uploaditem}>
                                                9
                                            </Box>
                                        </Paper>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={0} lg={2}>

                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}