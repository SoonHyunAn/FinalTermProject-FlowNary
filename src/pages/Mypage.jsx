import React, { useState } from "react";
import SnsBar from '../components/SnsBar';
import Aside from "../components/Aside";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';

import { Box, Button, ButtonGroup, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";

import FmdBadIcon from '@mui/icons-material/FmdBad';
import GroupsIcon from '@mui/icons-material/Groups';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import ProfileMenu from '../components/ProfileMenu';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Mypage() {
    const [data, setData] = useState([{ x: '2024-01-01', y: '1' }, { x: '2024-01-02', y: '2' }, { x: '2024-01-03', y: '3' }]);
    const tableCSS = {
        paddingRight: '20px',
        paddingLeft: '20px',
        marginRight: '5px',
        marginLeft: '5px',
        border: '2px solid rgb(76, 0, 153)',
        borderRadius: '15px'
    }
    const bookmarkCSS = {
        paddingRight: '20px',
        paddingLeft: '20px',
        marginRight: '5px',
        marginLeft: '5px',
        borderTop: '2px solid rgb(70, 70, 70)',
        borderBottom: '2px solid rgb(70, 70, 70)',
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: '제목 1'
            },
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            }
        }
    };

    let labels = [];
    if (data.length > 0) {
        labels = data.map((d) => d.x);
    }

    const datas = {
        labels,
        datasets: [
            {
                label: '레이블1',
                data: data.map(d => d.y),
                borderrColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }
        ]
    };

    return (
        <>
            <SnsBar />
            <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
                {/* 첫 번째 영역 */}
                <Stack direction="column" spacing={2} sx={{ flex: 0.4, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>

                    {/* 영역 1의 컨텐츠 */}
                    <Aside/>
                </Stack>

                {/* 두 번째 영역 */}
                <Stack direction="column" spacing={2} sx={{ flex: 1.4 }}>

                    <Stack alignItems="center" just sx={{ flexGrow: 1 }}>

                        <Grid container>
                            <Grid item xs={0} lg={2}>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <Stack>
                                    <Box sx={bookmarkCSS}>
                                        <TableContainer>
                                            <Toolbar>
                                                <Typography variant="h6">
                                                    책갈피
                                                </Typography>
                                            </Toolbar>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>업로더</TableCell>
                                                        <TableCell>제목</TableCell>
                                                        <TableCell>날짜</TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>
                                                            <ProfileMenu />
                                                        </TableCell>
                                                        <TableCell>제목 1</TableCell>
                                                        <TableCell>OOOO-OO-OO</TableCell>
                                                        <TableCell><DeleteIcon /></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>
                                                            <ProfileMenu />
                                                        </TableCell>
                                                        <TableCell>제목 2</TableCell>
                                                        <TableCell>OOOO-OO-OO</TableCell>
                                                        <TableCell><DeleteIcon /></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>
                                                            <ProfileMenu />
                                                        </TableCell>
                                                        <TableCell>제목 3</TableCell>
                                                        <TableCell>OOOO-OO-OO</TableCell>
                                                        <TableCell><DeleteIcon /></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                    <Stack sx={{ marginTop: '10px' }} direction={'row'} justifyContent={'center'}>
                                        <ButtonGroup variant="outlined" size="small">
                                            <Button sx={{ width: 'auto' }}>1</Button>
                                            <Button sx={{ width: 'auto' }}>2</Button>
                                            <Button sx={{ width: 'auto' }}>3</Button>
                                        </ButtonGroup>
                                    </Stack>
                                </Stack>
                                <Stack sx={{ marginTop: '10px' }}>
                                    {data.length > 0 && <Line options={options} data={datas} />}
                                </Stack>
                                <Stack direction="row" justifyContent={'center'} spacing={3}>
                                    <Button variant="outlined" startIcon={<FmdBadIcon />}>조회수 통계</Button>
                                    <Button variant="outlined" startIcon={<MarkChatReadIcon />}>게시물 통계</Button>
                                    <Button variant="outlined" startIcon={<GroupsIcon />}>팔로워 통계</Button>
                                </Stack>
                                <Grid container sx={{ marginTop: '10px' }}>
                                    <Grid item xs={12} lg={6}>
                                        <Box sx={tableCSS}>
                                            <TableContainer >
                                                <Table aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>날짜</TableCell>
                                                            <TableCell>조회수 총합</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {
                                                            data.map((d) => (
                                                                <TableRow>
                                                                    <TableCell>{d.x}</TableCell>
                                                                    <TableCell>{d.y}</TableCell>
                                                                </TableRow>
                                                            ))
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <Box sx={tableCSS}>
                                            <TableContainer>
                                                <Table aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>날짜</TableCell>
                                                            <TableCell>게시물 총합</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {
                                                            data.map((d) => (
                                                                <TableRow>
                                                                    <TableCell>{d.x}</TableCell>
                                                                    <TableCell>{d.y}</TableCell>
                                                                </TableRow>
                                                            ))
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={0} lg={2}>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>

            </Stack>

        </>
    )
}