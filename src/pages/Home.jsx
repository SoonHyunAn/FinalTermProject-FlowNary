import React from "react";

import { Stack } from "@mui/material";

import Board from "../components/Home/Board";
import RecommendList from "../components/Home/RecommendList";
import SnsBar from '../components/Important/SnsBar';
import Aside from "../components/Important/Aside";

export default function Home() {

    return (
        <>
            <SnsBar />
            <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
                <Stack direction="column" spacing={2} sx={{ flex: 0.3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <Aside />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 1.1 }}>
                    <Stack alignItems="center" sx={{ flexGrow: 1 }}>
                        <Board />
                    </Stack>
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 0.4 }}>
                    <RecommendList />
                </Stack>
            </Stack>
        </>
    );
}