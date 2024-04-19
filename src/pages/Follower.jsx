import { Avatar, Button, Container, FormControl, Input, InputAdornment, Stack } from "@mui/material";
import React from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import SnsBar from '../components/SnsBar';
import Aside from "../components/Aside";

export default function Follower() {
    // const [followers, setFollowers] = useState(1);

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
                    <Stack sx={{ padding: '20px' }} justifyContent="center">
                        <Container sx={{ width: '500px', border: '1px solid black', borderRadius: '20px', minHeight: '300px' }}>
                            <Stack>
                                <FormControl variant="standard">
                                    <Input sx={{ height: '50px', fontSize: '25px' }} placeholder="팔로우한 유저 찾기" startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle sx={{ fontSize: '35px' }}></AccountCircle>
                                        </InputAdornment>
                                    } endAdornment={
                                        <InputAdornment>
                                            <Button>
                                                <SearchIcon sx={{ fontSize: '35px' }}></SearchIcon>
                                            </Button>
                                        </InputAdornment>
                                    } />
                                </FormControl>
                            </Stack>
                            <Stack sx={{ marginTop: '10px' }}>
                                <Stack direction='row' alignItems='center'>
                                    <Avatar sx={{ marginRight: '10px' }}>
                                        R
                                    </Avatar>
                                    O
                                </Stack>
                            </Stack>
                        </Container>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}