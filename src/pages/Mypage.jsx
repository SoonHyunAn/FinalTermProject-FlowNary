import React, { useState } from "react";
import SnsBar from '../components/SnsBar';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { Box, Button, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import 'chartjs-adapter-date-fns';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import GroupsIcon from '@mui/icons-material/Groups';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';

export default function Mypage() {
    const [data, setData] = useState([{x: '2024-01-01', y: '1'}, {x: '2024-01-02', y: '2'}, {x: '2024-01-03', y: '3'}]);
    const tableCSS = {
        paddingRight: '20px',
        paddingLeft: '20px', 
        marginRight: '5px', 
        marginLeft: '5px', 
        border:'2px solid rgb(76, 0, 153)', 
        borderRadius: '15px'
    }

    const options  = {
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
        <Grid container>
            <Grid item xs={0} lg={2}>
            </Grid>
            <Grid item xs={12} lg={8}>
                <Stack>
                    {data.length > 0 && <Line options={options} data={datas} />}
                </Stack>
            </Grid>
            <Grid item xs={0} lg={2}>
            </Grid>
            <Grid item xs={0} lg={2}>
            </Grid>
            <Grid item xs={12} lg={8}>
                <Stack direction="row" justifyContent={'center'} spacing={3}>
                    <Button variant="outlined" startIcon={<FmdBadIcon />}>조회수 통계</Button>
                    <Button variant="outlined" startIcon={<MarkChatReadIcon />}>게시물 통계</Button>
                    <Button variant="outlined" startIcon={<GroupsIcon />}>팔로워 통계</Button>
                </Stack>
                <Grid container sx={{marginTop: '10px'}}>
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
    )
}