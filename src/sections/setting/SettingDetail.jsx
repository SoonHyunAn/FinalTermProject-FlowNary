// 기본
import React, { useEffect, useState } from "react";
import {
  Box, Button, Card, TextField, InputAdornment,
  Typography, InputLabel, MenuItem, FormControl, Select, Avatar,
  IconButton,
  Grid
} from "@mui/material";
// import { Cloudinary } from "@cloudinary/url-gen/index";
import { FindImage, UploadImage } from "../../api/image.js";

// 아이콘
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// css 연결
import './setting.css';
import { GetWithExpiry } from "../../api/LocalStorage.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AdvancedImage } from "@cloudinary/react";
// import { bool } from "prop-types";

// alert 창
import Swal from "sweetalert2";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip arrow {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}));

export default function SettingDetail() {
  const navigate = useNavigate();


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

  // localStorage를 이용해서 user 받아오기
  const uid = parseInt(GetWithExpiry("uid"));
  const email = GetWithExpiry("email");
  const [user, setUser] = useState({});

  const [uname, setUname] = useState('');
  const [nickname, setNickname] = useState('');
  const [statusMessage, setStat] = useState('');
  const [profile, setProfile] = useState('');
  const [image, setImage] = useState('');
  const [birth, setBirth] = useState(new Date());
  const [tel, setTel] = useState('');
  const [snsDomain, setSnsDomain] = useState('');

  const [pwd1, setPwd1] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [checkingPwd, setCheckingPwd] = useState(0);
  const [checkingNickName, setCheckingNickname] = useState(0);
  const [checkingTel, setCheckingTel] = useState(0);

  const [status, setStatus] = useState('0');
  const [preview, setPreview] = useState('');


  const [change, setChange] = useState(0);
  const [myimage, setMyimage] = useState('');

  // 성별
  const [gender, setGender] = useState('');

  useEffect(() => {
    if (uid == null) {
      //alert('로그인이 필요합니다.');
      navigate('/login');
    }
  }, []);

  // 핸드폰 번호 입력 시 자동으로 '-' 추가
  const handleTelChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '');
    let formattedTel = '';

    if (input.length > 2) {
      formattedTel += input.substring(0, 3) + '-';
      if (input.length > 6) {
        formattedTel += input.substring(3, 7) + '-';
        formattedTel += input.substring(7, 11);
      } else {
        formattedTel += input.substring(3, input.length);
      }
    } else {
      formattedTel = input;
    }

    setTel(formattedTel);
  };

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
  // 설정 변경
  const handleStat = (e) => { setStat(e.target.value); };
  const handleGender = (event) => { setGender(event.target.value === 'man' ? 0 : (event.target.value === 'woman' ? 1 : 2)); };

  const handleUname = (e) => { setUname(e.target.value); };
  const handleNickname = (e) => { setNickname(e.target.value); };
  const handleSnsDomain = (e) => { setSnsDomain(e.target.value); };
  const handleTel = (e) => { setTel(e.target.value); };

  const handlePwd1 = (e) => { setPwd1(e.target.value); };
  const handlePwd2 = (e) => { setPwd2(e.target.value); };

  const handleBirthChange = (e) => { setBirth(e.target.value); };


  const submitProfile = async () => {
    if (checkingNickName === 0) {
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
    if (checkingPwd === 0) {
      Swal.fire({
        title: "비밀번호 확인을 해주세요",
        icon: "warning"
      });
      return;
    }
    if (change !== 1) {
      axios.post('http://localhost:8090/user/update', {
        pwd: pwd1,
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
        pwd: pwd1,
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
    navigate('/setting');
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
    // 비밀번호 확인 - 일치여부, 형식
    if (pwd1 < 6) { // 파이어베이스 비밀번호 길이 제한
      Swal.fire({
        text: "비밀번호는 6자리 이상이어야 합니다.",
        icon: "warning"
      });
      return;
    }

    if (!/[0-9]/.test(pwd1) || !/[!@#$%^&*?]/.test(pwd1)) { // 정규식으로 비밀번호 확인
      Swal.fire({
        width: '50%',
        title: '유효성 검사 경고',
        html: `비밀번호는 숫자와 특수문자(!@#$%^&amp;*?)를 포함해야합니다.`,
        icon: 'warning'
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: "비밀번호가 일치합니다.",
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
    setCheckingPwd(1);
  }

  const checkNickname = () => {
    axios.get('http://localhost:8090/user/nickname',
      {
        params: {
          email: email
        }
      })
      .then(response => {
        const userList = response.data; // 응답 데이터 전체를 가져옵니다.
        if (!userList) {
          console.error('User list is undefined or null');
          return;
        }

        const nicknames = userList.map(user => user.nickname);
        if (nicknames.includes(nickname)) {
          Swal.fire({
            text: "닉네임이 중복됩니다.",
            icon: "warning"
          });
          return;
        }
        Swal.fire({
          icon: "success",
          text: "닉네임 사용 가능합니다!",
        });
        setCheckingNickname(1);
        return;
      }).catch(error => {
        console.error('Error fetching nicknames:', error);
      });
  }
  const checkTel = () => {
    axios.get('http://localhost:8090/user/tel', {
      params: {
        email: email
      }
    })
      .then(response => {
        const userList = response.data; // 응답 데이터 전체를 가져옵니다.
        if (!userList) {
          console.error('User list is undefined or null');
          return;
        }

        const tels = userList.map(user => user.tel);
        if (tels.includes(tel)) {
          Swal.fire({
            text: "전화번호가 중복됩니다.",
            icon: "warning"
          });
          return;
        }
        Swal.fire({
          icon: "success",
          text: "전화번호 사용 가능합니다!",
        });
        setCheckingTel(1);
        return;
      }).catch(error => {
        console.error('Error fetching tels:', error);
      });
  }


  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };


  const goBack = () => {
    navigate('/');
  }

  const deactiveAccount = () => {
    setStatus(status === 0 ? 1 : 0)
  }

  const handleImageEdit = () => {
    // "사진수정" 버튼 클릭 시 input[type='file'] 트리거
    document.getElementById('hidden-input').click();
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
                alt="H"
                src="/img/profile/profile1.jpg"
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
                  value={gender === 0 ? 'man' : (gender === 1 ? 'woman' : 'none')}
                  label="성별"
                  onChange={handleGender}
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
              required
              fullWidth
              label="이름"
              variant="standard"
              value={uname || ''}
              onChange={handleUname}
              sx={{ mt: 2, width: '100%' }}
            />

            {/* 닉네임 입력 */}
            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Grid item xs={8} md={10} lg={10.8}>
                <LightTooltip 
                title="별명을 입력하세요." arrow placement="bottom" >
                  <TextField
                    required
                    fullWidth
                    label="닉네임"
                    variant="standard"
                    value={nickname || ''}
                    onChange={handleNickname}
                    sx={{ mt: 2, width: '100%' }}
                  />
                </LightTooltip>
              </Grid>
              <Grid item xs={4} md={2} lg={1.2}>
                <Button onClick={checkNickname} variant="contained" sx={{ backgroundColor: 'rgb(54, 11, 92)', width:'10%' }} style={{ margin: '20px 0px 0px 5px' }} >확인</Button>
              </Grid>
            </Grid>


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
            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Grid item xs={8} md={10} lg={10.8}>
                <LightTooltip title="' - ' 없이 숫자만 입력하세요." placement='bottom' >
                  <TextField
                    required
                    fullWidth
                    label="전화번호"
                    variant="standard"
                    value={tel || ''}
                    onChange={handleTelChange}
                    sx={{ mt: 2, width: '100%' }}
                  />
                </LightTooltip>
              </Grid>
              <Grid item xs={4} md={2} lg={1.2}>
                <Button onClick={checkTel} variant="contained" sx={{ backgroundColor: 'rgb(54, 11, 92)' }} style={{ margin: '20px 0px 0px 5px' }} >확인</Button>
              </Grid>
            </Grid>



            {/* 비밀번호 입력 */}
            <LightTooltip title="숫자와 글자, 특수문자 포함 6자리 이상" arrow placement="bottom" >
              <TextField
                fullWidth
                label="비밀번호 입력"
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
            </LightTooltip>

            {/* 비밀번호 확인 */}
            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Grid item xs={8} md={10} lg={10.8}>
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
              <Grid item xs={4} md={2} lg={1.2}>
                <Button onClick={chectPwd} variant="contained" sx={{ backgroundColor: 'rgb(54, 11, 92)' }} style={{ margin: '20px 0px 0px 5px' }} >확인</Button>
              </Grid>
            </Grid>
            <br /><br />

            {/* 생일 변경 */}
            <LightTooltip title="생년월일을 직접 입력하실 수 있습니다." placement='bottom'>
              <TextField
                id="birth"
                label="생년월일"
                type="date"
                value={birth || ''}
                onChange={handleBirthChange}
                InputLabelProps={{ shrink: true }}
                fullWidth
                style={{ marginBottom: '20px' }}
              />
            </LightTooltip>

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

              {status == 0 ? 
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
                </Grid>}
            </Grid>

          </Box>

        </Card>
      </Box >
    </>
  );

}