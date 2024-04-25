import { Card, Stack, TextField, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import '../css/posting.css';

// 아코디언
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


// 스위치
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

// 스위치 스타일링
const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

export default function Posting() {
    // 창열고 닫기
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    // 아코디언
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    // 이미지 파일 불러오기
    const [image, setImage] = useState(null);  // 이미지 파일 상태
    const [previewUrl, setPreviewUrl] = useState(''); // 이미지 미리보기 URL 상태

    // 파일이 선택되었을 때 호출되는 함수
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // 선택된 첫 번째 파일
        if (file && file.type.substr(0, 5) === "image") { // 파일 타입이 이미지인지 확인
            setImage(file); // 이미지 상태 업데이트
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result); // 미리보기 URL 업데이트
            };
            reader.readAsDataURL(file); // 파일을 Data URL 형태로 읽기
        } else {
            setImage(null);
            setPreviewUrl('');
        }
    };


    return (
        <div className="main-container">
            <Card className="main-card">
                <Stack direction="row">
                    <Grid container>
                        <Grid item xs={4} >
                            <Button color="primary" style={{ maxWidth: '20%', marginRight: '80%' }} onClick={handleClose}>창 닫기</Button>
                        </Grid>
                        <Grid item xs={4}
                            sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ textAlign: 'center', fontWeight: 'bold' }}>새 게시물 만들기</span>
                        </Grid>
                        <Grid item xs={4}>
                            <Button color="primary" style={{ maxWidth: '20%', marginLeft: '80%' }}>작성</Button>
                        </Grid>
                    </Grid>
                </Stack>
                <hr style={{opacity:'0.5'}}/>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ width: '100%' }} >

                    {/* 사진 업로드 */}
                    <Card sx={{ border: '1px solid black', margin: '10px', padding: '20px' }}>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"  // 이미지 파일만 선택 가능하도록 설정
                        />
                        {previewUrl && (
                            <img src={previewUrl} alt="Preview" style={{ width: '150px', marginTop: '20px' }} />
                        )}
                    </Card>

                    <Stack
                        className="posting-stack"
                        sx={{
                            flex: { sm: 1 },
                            width: { xs: '100%', sm: '50%' },
                            padding: 2,
                        }}
                    >

                        {/* 게시글 작성 */}
                        <TextField
                            id="outlined-multiline-static"
                            label="문구를 입력하세요..."
                            multiline
                            rows={7}
                            sx={{ width: '100%' }}
                        />

                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>이모티콘 선택</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>위치 추가</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography>게시글 공개 혹은 비공개 </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex' }}>
                                <Typography sx={{ marginRight: '1em' }}>비공개</Typography>
                                <AntSwitch sx={{ marginTop: '0.25em' }} defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                <Typography sx={{ marginLeft: '1em' }}>공개</Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Stack>
                </Stack>
            </Card>
        </div>
    );
}
