// 기본
import React, { useEffect, useState } from "react";
import { Box, Button, Card, TextField, Typography, InputLabel, MenuItem, FormControl, Select, Avatar, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

// css 연결
import './setting.css';
import axios from "axios";

// alert 창
import Swal from "sweetalert2";

// components 연결
import dayjs from 'dayjs';
import SettingBirth from "./SettingBirth.jsx";
import SettingTel from "./SettingTel.jsx";
import SettingNickname from "./SettingNickname.jsx";
import { GetWithExpiry } from "../../api/LocalStorage.js";
import { FindImage, UploadImage } from "../../api/image.js";

export default function SettingDetail() {
  const navigate = useNavigate();

  // localStorage를 이용해서 user 받아오기
  const uid = parseInt(GetWithExpiry("uid"));
  const email = GetWithExpiry("email");

  // user 정보 초기화, 비밀번호 확인
  // eslint-disable-next-line
  const [uname, setUname] = useState('');
  const [nickname, setNickname] = useState('');
  const [statusMessage, setStat] = useState('');
  const [image, setImage] = useState('');
  const [snsDomain, setSnsDomain] = useState('');
  const [birth, setBirth] = useState('');
  const [tel, setTel] = useState('');
  const [gender, setGender] = useState('');
  // 활성화/비활성화
  // const [status, setStatus] = useState('0');
  // 이미지 업로드
  // eslint-disable-next-line
  const [profile, setProfile] = useState('');
  // eslint-disable-next-line
  const [preview, setPreview] = useState('');
  // eslint-disable-next-line
  const [change, setChange] = useState(0);
  // eslint-disable-next-line
  const [myimage, setMyimage] = useState('');

  // 설정 변경 조건 확인
  const [checkingNickname, setCheckingNickname] = useState(1);
  const [checkingTel, setCheckingTel] = useState(1);
  const [checkingBirth, setCheckingBirth] = useState(1);

  // 로그인 여부 확인
  useEffect(() => { if (uid == null) { navigate('/login'); } }, [uid, navigate]);

  // user 정보 axio로 가져와서 저장
  useEffect(() => {
    if (uid != null) {
      axios.get('http://localhost:8090/user/getUser', {
        params: {
          uid: uid,
        }
      }).then(res => {
        setProfile(res.data.profile);
        if (res.data.profile != null) {
          setMyimage(FindImage(res.data.profile));
          setChange(1);
        }
        setUname(res.data.uname); setNickname(res.data.nickname);
        setStat(res.data.statusMessage); setTel(res.data.tel);
        setBirth(res.data.birth); setSnsDomain(res.data.snsDomain); setGender(res.data.gender);
      }).catch(error => console.log(error));
    }
  }, [uid])

  // 설정창에서 값이 바뀔 때마다 저장하는 함수
  const handleUname = (e) => { setUname(e.target.value); };
  const handleNickname = (e) => { setNickname(e.target.value); };
  const handleStat = (e) => { setStat(e.target.value); };
  const handleGender = (e) => { setGender(e.target.value === 'man' ? 0 : (e.target.value === 'woman' ? 1 : 2)); };
  const handleSnsDomain = (e) => { setSnsDomain(e.target.value); };
  const handleTel = (e) => { setTel(e) };
  const handleBirthChange = (e) => {
    const formattedDate = dayjs(e).format('YYYY-MM-DD');
    setBirth(formattedDate);
  }

  const handleCheckingTel = (e) => { setCheckingTel(e) };
  const handleCheckingNickname = (e) => { setCheckingNickname(e) };
  const handleCheckingBirth = (e) => { setCheckingBirth(e) };

  // 제출
  const submitProfile = async () => {
    if (checkingBirth === 0) {
      Swal.fire({
        title: "생년월일 확인을 해주세요.",
        icon: "warning"
      });
      return;
    }

    if (uname === '') {
      Swal.fire({
        title: "이름을 입력하세요",
        icon: "warning"
      });
      return;
    }

    if (checkingNickname === 0) {
      Swal.fire({
        title: "닉네임 중복 확인을 해주세요",
        icon: "warning"
      });
      return;
    }

    if (checkingTel === 0) {
      Swal.fire({
        title: "전화번호 중복 확인을 해주세요",
        icon: "warning"
      });
      return;
    }


    console.log("이미지", image);
    const url = await UploadImage(image); // 이 줄이 비동기 작업을 기다리고 URL을 반환합니다.
    console.log("url:", url);
    if (!url) {
      await axios.post('http://localhost:8090/user/update', {
        uid: uid,
        uname: uname,
        nickname: nickname,
        profile: profile, // URL을 직접 사용하여 요청을 보냅니다.
        statusMessage: statusMessage,
        birth: birth,
        snsDomain: snsDomain,
        gender: gender,
        tel: tel,
      }).catch(error => console.log(error));
    } else {
      await axios.post('http://localhost:8090/user/update', {
        uid: uid,
        uname: uname,
        nickname: nickname,
        profile: url.public_id, // URL을 직접 사용하여 요청을 보냅니다.
        statusMessage: statusMessage,
        birth: birth,
        snsDomain: snsDomain,
        gender: gender,
        tel: tel,
      }).catch(error => console.log(error));
    }

    Swal.fire({
      icon: 'success',
      title: "설정 변경에 성공했습니다.",
      showClass: {
        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
        `
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
        `
      }
    });
    navigate(-1);
  }

  const goBack = () => { navigate('/'); }

  // const deactiveAccount = () => { setStatus(status === 0 ? 1 : 0) } // 활성화 비활성화

  const handleImageEdit = () => {
    // "사진수정" 버튼 클릭 시 input[type='file'] 트리거
    document.getElementById('hidden-input').click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setChange(1);
    if (event.target.files.length === 0) {
      return;
    }
    else {
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  };

  const handleImageDelete = () => {
    setPreview('');
    setProfile('');
    setChange(0);
  };



  return (
    <>
      <Box sx={{
        display: 'flex', justifyContent: 'center',
        width: '80%',
        border: '0px solid rgb(92, 22, 153)'
      }}>
        <Card sx={{
          mt: 5,
          boxShadow: 'none', width: '70%',
        }}>
          <Typography variant="h6"
            sx={{
              mt: 2, mb: 2,
              fontWeight: 'bold',
              color: 'rgb(92, 22, 153)',
              margin: '0px 0px 0px 15px',
            }}>프로필 편집</Typography>

          <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* 프로필 사진, 닉네임, 편집 버튼 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#4b008225',
                borderRadius: '15px',
                padding: '0.75em 0.25em',
              }}>

              <Avatar
                alt="+"
                src={preview || `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${profile}` || ''}
                sx={{
                  width: 80, height: 80, ml: 3, mr: 2, cursor: 'pointer'
                }}
                onClick={handleImageEdit}
              />
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                hidden
                id="hidden-input"
              />

              <Typography variant="h6"
                sx={{
                  flexGrow: 1, fontWeight: 'bold',
                  display: {
                    xs: 'none',
                    md: 'none',
                    lg: 'flex'
                  },
                }}>{nickname}</Typography>
              <Button
                variant='contained'
                onClick={handleImageEdit}
                style={{
                  marginRight: '2.5em',
                  backgroundColor: 'rgb(54, 11, 92)',

                }}>사진수정</Button>
              <Button
                variant='contained'
                onClick={handleImageDelete}
                style={{
                  marginRight: '2.5em',
                  backgroundColor: 'rgb(99, 11, 92)',

                }}>사진삭제</Button>
            </Box>
            <br />

            {/* 프로필 편집 폼 */}
            <TextField
              fullWidth
              label="이메일"
              variant="outlined"
              value={email || ''}
              disabled
              sx={{ mt: 2, width: '100%' }}
            />
            <br />
            {/* 소개 영역 */}
            <TextField
              fullWidth
              label="상태 메시지를 수정하세요"
              variant="outlined"
              value={statusMessage || ''}
              onChange={handleStat}
              sx={{ width: '100%' }}
            />

            {/* 성별 선택 영역 */}
            <Box sx={{ alignSelf: 'flex-start', mt: 2, mb: 2, width: '100%' }}>
              <FormControl fullWidth>
                <InputLabel>성별</InputLabel>
                <Select
                  value={(gender === 0 ? 'man' : (gender === 1 ? 'woman' : 'none')) || 'none'}
                  label="성별"
                  onChange={handleGender}
                >
                  <MenuItem value={"man"}>남자</MenuItem>
                  <MenuItem value={"woman"}>여자</MenuItem>
                  <MenuItem value={"none"}>설정 안함</MenuItem>
                </Select>
              </FormControl>
              <br /><br />

              {/* 생일 변경 */}
              <SettingBirth birth={birth} checkingBirth={checkingBirth} onBirthChange={handleBirthChange} changeCheckingBirth={handleCheckingBirth}/>

            </Box>

            {/* 이름 입력 */}
            <TextField
              required
              fullWidth
              label="이름"
              variant="standard"
              value={uname || ''}
              onChange={handleUname}
              sx={{ mt: 2, width: '100%' }}
            />

            {/* 닉네임 입력 */}
            <SettingNickname nickname={nickname} email={email} checkingNickname={checkingNickname} onNicknameChange={handleNickname} changeCheckingNickname={handleCheckingNickname} />


            {/* 도메인 입력 */}
            <TextField
              fullWidth
              label="도메인 주소"
              variant="standard"
              value={snsDomain || ''}
              onChange={handleSnsDomain}
              sx={{ mt: 2, width: '100%' }}
            />

            {/* 전화번호 입력 */}
            <SettingTel tel={tel} email={email} checkingTel={checkingTel} onTelChange={handleTel} changeCheckingTel={handleCheckingTel} />

            {/* 하단 버튼 영역 */}
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Grid item xs={8} lg={6} sx={{ display: 'flex' }}>
                <Button
                  variant="contained"
                  onClick={submitProfile}
                  style={{ margin: '1em', width: '20%', backgroundColor: 'rgb(54, 11, 92)' }}>
                  완료
                </Button>

                <Button
                  variant="contained"
                  onClick={goBack}
                  style={{ margin: '1em', width: '20%', backgroundColor: '#bbbbbb' }}>
                  취소
                </Button>
              </Grid>

              {/* {status === 0 ?
                <Grid item xs={4} lg={6} >
                  <Button
                    variant="contained"
                    onClick={deactiveAccount}
                    style={{ margin: '1em', width: '15%', backgroundColor: 'red' }}>
                    계정<br />잠그기
                  </Button>
                </Grid>
                :
                <Grid item xs={4} lg={6} >
                  <Button
                    variant="contained"
                    onClick={deactiveAccount}
                    style={{ margin: '1em', width: '15%', backgroundColor: 'Blue' }}>
                    활성화
                  </Button>
                </Grid>} */}
            </Grid>

          </Box>

        </Card >
      </Box >
    </>
  );
}