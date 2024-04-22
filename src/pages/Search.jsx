import React from "react";
import { Stack } from "@mui/material";

import SnsBar from '../components/Important/SnsBar';
import Aside from "../components/Important/Aside";
import MySearchList from "../components/UserInterface/MySearchList";
import '../css/Search_Profile_Mypage.css';

export default function Search() {

  return (
    <>
      <SnsBar />
      <Stack direction="row" spacing={0} sx={{ height: "100vh" }}>
        <Stack direction="column" spacing={2} sx={{ flex: 0.3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <Aside />s
        </Stack>
        <Stack direction="column" spacing={2} sx={{ flex: 1.5 }}>
          <MySearchList />
        </Stack>
      </Stack>
    </>
  )
}

