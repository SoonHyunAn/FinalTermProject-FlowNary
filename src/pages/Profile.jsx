import React from "react";
import { Box, Grid, Stack } from "@mui/material";

import SnsBar from '../components/Important/SnsBar';
import Aside from "../components/Important/Aside";

import '../css/Search_Profile_Mypage.css';
import MyBoardList from "../components/UserInterface/MyBoardList";

export default function Profile() {
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
                            <Grid item xs={0} lg={2}> </Grid>
                            <Grid item xs={12} lg={8}> {/* 내용 들어가는 공간 */}
                                <MyBoardList />
                            </Grid>
                            <Grid item xs={0} lg={2}> </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}

{/* 
Grid 태그 설명
가로길이를 12등분하여 1일 경우 가로의 1/12만큼 차지하는 식으로 작동
xs -> 작은 화면일 때 적용되는 방식
lg -> 큰 화면일 때 적용되는 방식

ex) xs={12} 면 부모 요소(부모 요소가 없으면 창 전체)의 가로를 전부 차지 
*/}