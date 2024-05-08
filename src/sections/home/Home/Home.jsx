// 기본
import React, { useState } from "react";
import { Stack, useMediaQuery } from "@mui/material";

// components 연결
import SnsBar from '../../common/aside&bar/SnsBar';
import Aside from "../../common/aside&bar/Aside";
import Board from "../Board";
import RecommendList from "../RecommendList";

export default function Home() {
    // useMediaQuery 훅을 사용하여 현재 화면 크기를 가져옵니다.
    const isLargeScreen = useMediaQuery('(min-width: 1280px)');

    const [openChatbot, setOpenChatbot] = useState(false); // 모달 상태 관리

    // 모달 토글 함수
    const toggleChatbot = () => {
        setOpenChatbot(!openChatbot);
    };


    return (
        <>
            <SnsBar />
            <Stack direction="row" spacing={0} sx={{ height: "100vh"}}>
                {/* 작은 화면에서는 0.4, 큰 화면에서는 0.2의 너비를 가지도록 설정 */}
                <Stack direction="column" spacing={2} sx={{ flex: isLargeScreen ? '0.3' : '0.3'}}>
                    <Aside sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'  }} />
                </Stack>
                {/* 작은 화면에서는 1.5, 큰 화면에서는 1.1의 너비를 가지도록 설정 */}
                <Stack direction="column" spacing={2} sx={{ flex: isLargeScreen ? '1.1' : '1.5' }}>
                    <Stack alignItems="center" sx={{ flexGrow: 1 }}>
                        <Board />
                    </Stack>
                    <br /><br />
                </Stack>
                {/* 작은 화면에서는 0.4, 큰 화면에서는 0.6의 너비를 가지도록 설정 */}
                <Stack direction="column" spacing={2} sx={{ flex: isLargeScreen ? '0.4' : '0' }}>
                    <RecommendList />
                </Stack>
            </Stack>


        </>
    );
}