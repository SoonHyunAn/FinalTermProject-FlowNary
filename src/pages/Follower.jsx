import { Avatar, Button, Container, FormControl, Input, InputAdornment, Stack } from "@mui/material";
import React from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import SnsBar from '../components/SnsBar';

export default function Follower() {
    // const [followers, setFollowers] = useState(1);

    return (
        <>
            <SnsBar />
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
        </>
    )
}