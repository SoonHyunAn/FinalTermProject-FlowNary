import React from "react";
import 'chartjs-adapter-date-fns';
import '../css/Search_Profile_Mypage.css'

// eslint-disable-next-line
import Chart from 'chart.js/auto';

import { Stack } from "@mui/material";


import SnsBar from '../components/Important/SnsBar';
import Aside from "../components/Important/Aside";
import IndexButton from "../components/UserInterface/IndexButton";



export default function Mypage() {

    return (
        <>
            <SnsBar />
            <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
                <Stack direction="column" spacing={2} sx={{ flex: 0.3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <Aside />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 1.5 }}>
                    <Stack alignItems="center" just sx={{ flexGrow: 1 }}>
                        <IndexButton/>
                    </Stack>
                </Stack>

            </Stack>

        </>
    )
}