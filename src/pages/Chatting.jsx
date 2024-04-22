import React from "react";
import { Stack } from "@mui/material";

import SnsBar from '../components/Important/SnsBar';
import Aside from "../components/Important/Aside";
import Chat from "../components/Chat/Chat";

export default function Chatting() {

    return (
        <div style={{ position: 'absolute', height: '100%', width: '100%', minWidth: '500px', minHeight: '400px' }}>
            <SnsBar />
            <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
                <Stack direction="column" spacing={2} sx={{ flex: 0.3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <Aside />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 1.5, position: 'relative' }}>
                    <Chat />
                </Stack>
            </Stack>
        </div>
    )
}