import { Avatar, Button, Link, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export default function ProfileMenu() {
    const [Ael, setAel] = useState(null);
    const open = Boolean(Ael);
    const handleClick = (event) => {
        setAel(event.currentTarget);
    }
    const handleClose = () => {
        setAel(null);
    }

    return (
        <div>
            <Stack direction='row' alignItems='center'>
                <Avatar sx={{marginRight: '10px'}} onClick={handleClick}>
                    R
                </Avatar>
                <Stack onClick={handleClick}>
                    <Typography>
                        O O O
                    </Typography>
                </Stack>
            </Stack>
            <Menu anchorEl={Ael}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button'
            }}>
                <MenuItem onClick={handleClose}>프로필보기</MenuItem>
                <MenuItem onClick={handleClose}>팔로우하기</MenuItem>
                <MenuItem onClick={handleClose}>차단하기</MenuItem>
            </Menu>
        </div>
    )
}