// 기본
import React, { useEffect, useState } from "react";
import {
  Box, Button, Card, TextField, Modal, InputAdornment, FormControlLabel,
  FormGroup, Typography, Stack, InputLabel, MenuItem, FormControl, Select, Avatar,
  Input,
  IconButton,
  Grid
} from "@mui/material";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { FindImage, UploadImage } from "../../api/image.js";

// 아이콘
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// css 연결
import './setting.css';
import { MaterialUISwitch, AntSwitch } from './SettingSwitchStyles.jsx';
import { GetWithExpiry } from "../../api/LocalStorage.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { bool } from "prop-types";

// alert 창
import Swal from "sweetalert2";

export default function SettingDetail() {
  const navigate = useNavigate();

  // localStorage를 이용해서 user 받아오기
  const uid = parseInt(GetWithExpiry("uid"));
  const email = GetWithExpiry("email");
  const [user, setUser] = useState({});

  const [uname, setUname] = useState('');
  const [nickname, setNickname] = useState('');
  const [statusMessage, setStat] = useState('');
  const [profile, setProfile] = useState(null);
  const [image, setImage] = useState(null);
  const [birth, setBirth] = useState(new Date());
  const [tel, setTel] = useState(null);
  const [snsDomain, setSnsDomain] = useState(null);

  const [pwd1, setPwd1] = useState(null);
  const [pwd2, setPwd2] = useState(null);

  const [preview, setPreview] = useState(null);


  const [change, setChange] = useState(0);
  const [myimage, setMyimage] = useState(null);

  // 성별
  const [gender, setGender] = useState('');
  // 성별 이벤트
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  useEffect(() => {
    if (uid == null) {
      //alert('로그인이 필요합니다.');
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    if (uid != null) {
      axios.get('http://localhost:8090/user/getUser', {
        params: {
          uid: uid,
        }
      }).then(res => {
        setUser(res.data);
        setUname(res.data.uname);
        setNickname(res.data.nickname);
        setStat(res.data.statusMessage);
        if (res.data.profile != null) {
          setProfile(res.data.profile);
          setMyimage(FindImage(res.data.profile));
        }
        setBirth(res.data.birth);
        setTel(res.data.tel);
        setSnsDomain(res.data.snsDomain);
      }).catch(error => console.log(error));
    }
  }, [])


  // 비밀번호 숨기기/보이기
  const [showPassword, setShowPassword] = useState(false);
  // 비밀번호 숨기기/보이기 토글
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  // const handlePasswordChange = () => {
  //     // 변경 확인 버튼 클릭 시 실행될 로직
  //     console.log('비밀번호 변경 확인');
  // };

  const handleUname = (e) => {
    setUname(e.target.value);
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleSnsDomain = (e) => {
    setSnsDomain(e.target.value);
  };

  const handlePwd1 = (e) => {
    setPwd1(e.target.value);
  };

  const handlePwd2 = (e) => {
    setPwd2(e.target.value);
  };



  const handleTel = (e) => {
    setTel(e.target.value);
  };
  const handleBirthChange = (e) => {
    setBirth(e.target.value);
    console.log(birth);
  };

  const handleStat = (e) => {
    setStat(e.target.value);
  };

  const submitProfile = async () => {
    if (change !== 1) {
      axios.post('http://localhost:8090/user/update', {
        uname: uname,
        nickname: nickname,
        profile: null,
        statusMessage: statusMessage,
        snsDomain: snsDomain,
        uid: uid,
        gender: gender,
        birth: birth,
        tel: tel,
      }).catch(error => console.log(error));
    } else {
      console.log(image);
      const url = UploadImage(image);
      const url2 = url.then((e) => {

      });
      console.log(url);
      axios.post('http://localhost:8090/user/update', {
        uname: uname,
        nickname: nickname,
        profile: url,
        statusMessage: statusMessage,
        snsDomain: snsDomain,
        uid: uid,
        gender: gender,
        birth: birth,
        tel: tel,
      }).catch(error => console.log(error));
    }
    console.log(user);
    navigate('/setting');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (event.target.files.length === 0) {
      return;
    }
    else {
      setImage(file);
      setChange(1);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  };

  const chectPwd = async e => {
    e.preventDefault();

    // 비밀번호 확인 - 일치여부
    if (pwd1 !== pwd2) {
      Swal.fire({
        title: "비밀번호가 일치하지 않습니다.",
        text: "다시 입력해주세요",
        icon: "warning"
      });
      return;
    }

  }


  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };


  const handleImageEdit = () => {
    // "사진수정" 버튼 클릭 시 input[type='file'] 트리거
    document.getElementById('hidden-input').click();
  };


  return (
    <>
      <Box sx={{
        display: 'flex', justifyContent: 'center',
        width:'80%',
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
                alt="H"
                src="/img/profile/profile1.jpg"
                sx={{
                  width: 80, height: 80, ml: 3, mr: 2
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
                }}>{email.split("@")[0]}</Typography>
              <Button
                variant='contained'
                style={{
                  marginRight: '2.5em',
                  backgroundColor: 'rgb(54, 11, 92)',

                }}>사진수정</Button>
            </Box>

            <br />

            {/* 프로필 편집 폼 */}
            <TextField
              fullWidth
              label="이메일"
              variant="standard"
              value={email}
              disabled
              sx={{ mt: 2, width: '100%' }}
            />
            <br />
            {/* 소개 영역 */}
            <TextField
              fullWidth
              label="나로 말할거 같으면!"
              variant="outlined"
              value={statusMessage}
              onChange={handleStat}
              sx={{ width: '100%' }}
            />

            {/* 성별 선택 영역 */}
            <Box sx={{ alignSelf: 'flex-start', mt: 2, mb: 2, width: '100%' }}>
              <FormControl fullWidth>
                <InputLabel>성별</InputLabel>
                <Select
                  value={gender === 0 ? 'woman' : 'man'}
                  label="성별"
                  onChange={handleChange}
                >
                  <MenuItem value={"man"}>남자</MenuItem>
                  <MenuItem value={"woman"}>여자</MenuItem>
                  <MenuItem value={"none"}>설정 안함</MenuItem>
                </Select>
              </FormControl>
            </Box>


            {/* 기타 폼 요소 */}
            {/* 이름 입력 */}
            <TextField
              fullWidth
              label="이름"
              variant="standard"
              value={uname}
              onChange={handleUname}
              sx={{ mt: 2, width: '100%' }}
            />

            {/* 닉네임 입력 */}
            <TextField
              fullWidth
              label="닉네임"
              variant="standard"
              value={nickname}
              onChange={handleNickname}
              sx={{ mt: 2, width: '100%' }}
            />

            {/* 도메인 입력 */}
            <TextField
              fullWidth
              label="도메인 주소"
              variant="standard"
              value={snsDomain}
              onChange={handleSnsDomain}
              sx={{ mt: 2, width: '100%' }}
            />


            {/* 전화번호 입력 */}
            <TextField
              fullWidth
              label="전화번호"
              variant="standard"
              value={tel}
              onChange={handleTel}
              sx={{ mt: 2, width: '100%' }}
            />


            {/* 비밀번호 입력 */}
            <TextField
              fullWidth
              label="비밀번호"
              variant="standard"
              type={showPassword ? 'text' : 'password'}
              sx={{ mt: 2, width: '100%' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      onMouseDown={(event) => event.preventDefault()}
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              onChange={handlePwd1}
            />

            {/* 비밀번호 확인 */}
            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Grid item width={'90%'}>
                <TextField
                  fullWidth
                  label="비밀번호 확인"
                  variant="standard"
                  type={showPassword ? 'text' : 'password'}
                  sx={{ mt: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          onMouseDown={(event) => event.preventDefault()}
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  onChange={handlePwd2}
                />
              </Grid>
              <Grid item width={'10%'}>
                <Button onClick={chectPwd} variant="contained" sx={{ backgroundColor: 'rgb(54, 11, 92)' }} style={{margin: '20px 0px 0px 5px'}} >확인</Button>
              </Grid>
            </Grid>
            <br /><br />

            {/* 생일 변경 */}
            <TextField
              id="birth"
              label="생년월일"
              type="date"
              value={birth}
              onChange={handleBirthChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              style={{ marginBottom: '20px' }}
            />

            {/* 하단 버튼 영역 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex' }}>
                <Button
                  variant="contained"
                  onClick={submitProfile}
                  style={{ margin: '1em', width: '20%', backgroundColor: 'rgb(54, 11, 92)' }}>
                  수정
                </Button>

                <Button
                  variant="contained"
                  onClick={submitProfile}
                  style={{ margin: '1em', width: '20%', backgroundColor: '#bbbbbb' }}>
                  수정취소
                </Button>
              </div>

              <Button
                variant="contained"
                onClick={submitProfile}
                style={{ margin: '1em', width: '15%', backgroundColor: 'red' }}>
                비활성화
              </Button>
            </div>

          </Box>

        </Card>
      </Box >
    </>
  );

}