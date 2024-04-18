import React from "react";
import { Stack } from "@mui/material";
import Board from "../components/Board";
import RecommendList from "../components/RecommendList";
import SnsBar from '../components/SnsBar';
import Aside from "../components/Aside";

export default function Home() {

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

                    <Stack alignItems="center" just sx={{ flexGrow: 1 }}>
                        <Board />
                    </Stack>
                </Stack>

                {/* 세 번째 영역 */}
                <Stack direction="column" spacing={2} sx={{ flex: 0.6 }}>
                    <RecommendList />
                </Stack>
            </Stack>
        </>
    );
}