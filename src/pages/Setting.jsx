import React from "react";
import { Stack } from "@mui/material";

import SnsBar from "../components/Important/SnsBar.jsx";
import Aside from "../components/Important/Aside.jsx";
import '../css/setting.css'; // CSS 파일 임포트
import SettingDetail from '../components/UserInterface/SettingDetail'
export default function Setting() {
    return (
        <>
            <SnsBar />
            {/* <ProfileMenu /> */}
            <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
                <Stack direction="column" spacing={2} sx={{ flex: 0.3 }}>
                    <Stack sx={{ flexGrow: 1 }}>
                        <Aside />
                    </Stack>
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 1.5, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <SettingDetail />
                </Stack>
            </Stack>
        </>
    );
}
