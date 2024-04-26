// 기본
import React, { useState } from "react";
import { Card, Stack, Button, Grid, Modal, Typography, Box } from "@mui/material";

// 아코디언
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

// 이모티콘
import InputEmoji from 'react-input-emoji'

// 아이콘
import CreateIcon from '@mui/icons-material/Create';

// css 연결
import './posting.css';
import { AntSwitch } from './postingStyle.jsx';

export default function Posting() {
    // 창열고 닫기
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // 아코디언
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    // 이미지 파일 불러오기
    const [images, setImages] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);

    // 파일이 선택되었을 때 호출되는 함수
    // 파일이 선택되었을 때 호출되는 함수
    const handleFileChange = (event) => {
        // 이미지가 5개를 초과하지 않도록 확인
        if (event.target.files.length + images.length > 5) {
            alert('최대 5개의 이미지만 업로드할 수 있습니다.');
            return;
        }
        const selectedFiles = Array.from(event.target.files);
        setImages(images.concat(selectedFiles)); // 기존 이미지 배열에 추가
        const newPreviewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
        setPreviewUrls(previewUrls.concat(newPreviewUrls)); // 미리보기 URL 배열에 추가
    };

    // 이미지 삭제 핸들러
    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index)); // 이미지 배열에서 삭제
        setPreviewUrls(previewUrls.filter((_, i) => i !== index)); // 미리보기 URL 배열에서 삭제
    };

    // 댓글 입력창 구현 - 이모티콘
    const [text, setText] = useState('');
    function handleOnEnter(text) { console.log('enter', text) }


    return (
        <>
            {/* 기존의 버튼 및 아이콘 */}
            <button className='asideStyle' onClick={handleOpen}>
                <Grid container>
                    <Grid item xs={12} lg={6} sx={{ display: { xs: 'flex', lg: 'flex' }, pl: 3 }}>
                        <CreateIcon className='iconStyle' />
                    </Grid>
                    <Grid item xs={0} lg={6} sx={{ display: { xs: 'none', lg: 'flex' }, pr: 3, justifyContent: 'flex-end' }}>
                        글쓰기
                    </Grid>
                </Grid>
            </button>

            {/* 글쓰기 모달 */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Box className='modalStyle'>
                    {/* 모달의 상단에 있는 헤더 부분 */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                        <Button color="primary" onClick={handleClose}>창 닫기</Button>
                        <Typography variant="h6" component="h2" fontWeight="bold">새 게시물 만들기</Typography>
                        <Button color="primary">작성</Button>
                    </Stack>

                    {/* 구분선 */}
                    <hr style={{ opacity: '0.5' }} />

                    {/* 이미지 업로드 및 미리보기 */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button variant="outlined" component="label">
                                이미지 추가하기
                                <input
                                    type="file"
                                    multiple
                                    hidden
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </Grid>

                        {/* 이미지 미리보기 */}
                        {previewUrls.map((url, index) => (
                            <Grid item key={index} xs={4} sm={2}>
                                <Card>
                                    <img src={url} alt={`Preview ${index}`} style={{ width: '15.5vh', height: '15vh', objectFit: 'cover' }} />
                                    <Button style={{ justifyContent: 'center' }}
                                        onClick={() => handleRemoveImage(index)}>제거</Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* 게시글 작성 부분 */}
                    <Grid item xs={12} sm={6}>
                        <InputEmoji
                            value={text}
                            onChange={setText}
                            cleanOnEnter
                            onEnter={handleOnEnter}
                            placeholder="문구를 입력하세요..."
                            shouldReturn
                            fontSize={15}
                            language='kr'
                        />
                    </Grid>

                    {/* 위치 */}
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>위치 추가</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                카카오 맵 API 지도 생성
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* 게시물 공개 비공개 */}
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
                </Box>
            </Modal >
        </>
    );
}
