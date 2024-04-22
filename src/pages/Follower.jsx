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
                <Stack direction="column" spacing={2} sx={{ flex: 0.3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <Aside />
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 0.2 }}>
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 0.8 }}>
                    <Stack sx={{ padding: '20px' }} justifyContent="center">
                        <Container sx={{border: '1px solid black', borderRadius: '20px', minHeight: '360px'}}>
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
                                        안
                                    </Avatar>
                                    안순현
                                </Stack>
                            </Stack>
                        </Container>
                    </Stack>
                    <Stack sx={{ padding: '20px' }} justifyContent="center">
                        <Container sx={{ border: '1px solid black', borderRadius: '20px', minHeight: '360px' }}>
                            <Stack>
                                <FormControl variant="standard">
                                    <Input sx={{ height: '50px', fontSize: '25px' }} placeholder="팔로잉한 유저 찾기" startAdornment={
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
                                        안
                                    </Avatar>
                                    안순현
                                </Stack>
                            </Stack>
                        </Container>
                    </Stack>
                </Stack>
                <Stack direction="column" spacing={2} sx={{ flex: 0.5 }}>
                </Stack>
            </Stack>
        </>
    )
}