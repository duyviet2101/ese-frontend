import Box from '@mui/material/Box';
import { Container, FormControl, FormHelperText, InputLabel, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import schoolsData from '~/constants/schoolsData.js';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { memo, useEffect, useState } from 'react';
import Request from '~/utils/request.js';
import pushToast from '~/helpers/sonnerToast.js';
import { useNavigate, useParams } from 'react-router-dom';
import { omit, pick } from 'lodash';
import moment from 'moment';

const degrees = [
  {
    title: "Thạc sĩ",
    value: "ThS",
  },
  {
    title: "Tiến sĩ",
    value: "TS",
  },
  {
    title: "Cử nhân",
    value: "CN",
  }
]

export default (function UpdateForm({
  thesis = null
}) {
  const {id} = useParams();
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [gender, setGender] = useState("");
  const [degree, setDegree] = useState("");

  const majorData = schoolsData.find(item => item.name === school)?.departments || [];

  const handleChangeSchool = (e) =>{
    setSchool(e.target.value);
  }

  const handleChangeMajor = (e) =>{
    setMajor(e.target.value);
  }

  const handleChangeGender = (e) =>{
    setGender(e.target.value);
  }

  const handleChangeDegree = (e) =>{
    setDegree(e.target.value);
  }

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: undefined,
    criteriaMode: "firstError"
  })

  const onSubmit = async (data) => {
    data.keywords = data?.keywords?.split(",")?.map(item => item.trim()) || [];

    if (data?.candidate?.gender === "Nam") {
      data.candidate.gender = 1;
    } else if (data?.candidate?.gender === "Nữ") {
      data.candidate.gender = 0;
    }

    if (data?.defense_date && moment(data.defense_date).format('DD/MM/YYYY') !== "Invalid date") {
      data.defense_date = moment(data.defense_date).format('DD/MM/YYYY');
    }

    const res = await Request.patch(`/theses/${id}`, data);
    if (res?.status === 'error') {
      pushToast(res?.message, "error");
    } else {
      pushToast("Cập nhật thành công", "success");
    }
  }

  const onError = (errors, e) => {
    pushToast("Có lỗi xảy ra, vui lòng kiểm tra lại!", "error");
  }

  useEffect(() => {
    if (thesis) {
      reset(pick(thesis, [
        "title",
        "defense_date",
        "committees.roles_structure.chair",
        "committees.roles_structure.secretary",
        "committees.roles_structure.reviewer",
      ]));
      if (thesis?.candidate?.school) {
        setSchool(thesis?.candidate?.school);
      }
      if (thesis?.candidate?.major) {
        setMajor(thesis?.candidate?.major);
      }
      if (thesis?.candidate?.gender === 1 || thesis?.candidate?.gender === 0) {
        setGender(thesis?.candidate?.gender === 1 ? "Nam" : "Nữ");
      }
      if (thesis?.degree) {
        setDegree(thesis?.degree);
      }
    }
  }, [thesis]);

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: "#f1f1f1",
        borderRadius: "10px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-between",
      }}
      component={"form"}
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
    >
      <Typography
        variant={"h6"}
        flexBasis={"100%"}
      >
        Người bảo vệ
      </Typography>
      <Box
        flexBasis={"45%"}
      >
        <TextField
          label="Họ và tên"
          variant="outlined"
          size={"small"}
          fullWidth
          sx={{
            marginTop: 2
          }}
          InputProps={{
            ...register("candidate.name", {
              required: "Họ và tên không được để trống"
            })
          }}
          defaultValue={thesis?.candidate?.name}
          error={!!errors?.candidate?.name}
          helperText={errors?.candidate?.name?.message}
        />
        <TextField
          label="Email"
          size={"small"}
          variant="outlined"
          fullWidth
          defaultValue={thesis?.candidate?.email}
          sx={{
            marginTop: 2
          }}
          InputProps={{
            ...register("candidate.email", {
              required: "Email không được để trống",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email không hợp lệ"
              }
            })
          }}
          error={!!errors?.candidate?.email}
          helperText={errors?.candidate?.email?.message}
        />
        <TextField
          label="Số điện thoại"
          size={"small"}
          variant="outlined"
          fullWidth
          defaultValue={thesis?.candidate?.phone}
          sx={{
            marginTop: 2
          }}
          InputProps={{
            ...register("candidate.phone", {
              required: "Số điện thoại không được để trống",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Số điện thoại không hợp lệ"
              }
            })
          }}
          error={!!errors?.candidate?.phone}
          helperText={errors?.candidate?.phone?.message}
        />
        <Controller
          name={"candidate.birth"}
          control={control}
          rules={{
            required: "Ngày sinh không được để trống"
          }}
          defaultValue={thesis?.candidate?.birth}
          render={({
                     field: { onChange, value },
                     fieldState: { error }
                   }) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Ngày sinh"
                  slotProps={{
                    textField: {
                      size: "small",
                      error: !!error,
                      helperText: error?.message
                    }
                  }}
                  sx={{
                    marginTop: 2,
                    width: "100%"
                  }}
                  format={"DD/MM/YYYY"}
                  defaultValue={dayjs(value)}
                  onChange={(date) => onChange(dayjs(date).format('DD/MM/YYYY'))}
                />
              </LocalizationProvider>
            )
          }}
        />
      </Box>
      <Box
        flexBasis={"45%"}
      >
        <FormControl
          size={"small"}
          sx={{
            marginTop: 2,
            width: "100%",
          }}
          defaultValue={thesis?.candidate?.gender === 1 ? "Nam" : "Nữ"}
          error = {!!errors?.candidate?.gender}
        >
          <InputLabel id={"gender"}>Giới tính</InputLabel>
          <Select
            value={gender}
            labelId={"gender"}
            label={"Giới tính"}
            // onChange={handleChangeGender}
            inputProps={{
              ...register("candidate.gender", {
                required: "Giới tính không được để trống",
                value: gender,
                onChange: handleChangeGender,
              }),
            }}
          >
            <MenuItem value={''} disabled>
              <em>Giới tính</em>
            </MenuItem>
            {["Nam", "Nữ", "Khác"].map((item, index) => (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
          </Select>
          {!!errors?.candidate?.gender && <FormHelperText>{errors?.candidate?.gender?.message}</FormHelperText>}
        </FormControl>
        <FormControl
          size={"small"}
          sx={{
            marginTop: 2,
            width: "100%",
          }}
          error={!!errors?.candidate?.school}
        >
          <InputLabel id={"school"}>Trường/viện/khoa</InputLabel>
          <Select
            value={school}
            labelId={"school"}
            label={"Trường/viện/khoa"}
            // onChange={handleChangeSchool}
            inputProps={{
              ...register("candidate.school", {
                required: "Trường/Viện/Khoa không được để trống",
                value: school,
                onChange: handleChangeSchool,
              })
            }}
          >
            <MenuItem value={''} disabled>
              <em>Trường/viện/khoa</em>
            </MenuItem>
            {schoolsData.map((item, index) => (
              <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
            ))}
          </Select>
          {!!errors?.candidate?.school && <FormHelperText>{errors?.candidate?.school?.message}</FormHelperText>}
        </FormControl>
        <FormControl
          size={"small"}
          sx={{
            marginTop: 2,
            width: "100%",
          }}
          error={!!errors?.candidate?.major}
        >
          <InputLabel id={"major"}>Ngành</InputLabel>
          <Select
            value={major}
            labelId={"major"}
            label={"Ngành"}
            // onChange={handleChangeMajor}
            inputProps={{
              ...register("candidate.major", {
                required: "Ngành không được để trống",
                value: major,
                onChange: handleChangeMajor,
              })
            }}
          >
            <MenuItem value={''} disabled>
              <em>Ngành</em>
            </MenuItem>
            {majorData.map((item, index) => (
              <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
            ))}
          </Select>
          {!!errors?.candidate?.major && <FormHelperText>{errors?.candidate?.major?.message}</FormHelperText>}
        </FormControl>
      </Box>
      <Divider
        flexItem
        sx={{
          width: "100%",
          marginTop: 2
        }}
      />
      <Typography
        variant={"h6"}
        flexBasis={"100%"}
        sx={{
          marginTop: 2
        }}
      >
        Thông tin luận án
      </Typography>
      <Box
        flexBasis={"45%"}
      >
        <TextField
          label="Tên luận án"
          size={"small"}
          variant="outlined"
          fullWidth
          sx={{
            marginTop: 2
          }}
          InputProps={{
            ...register("title", {
              required: "Tên luận án không được để trống"
            })
          }}
          error={!!errors?.title}
          helperText={errors?.title?.message}
        />
        <FormControl
          size={"small"}
          sx={{
            marginTop: 2,
            width: "100%",
          }}
          error={!!errors?.degree}
        >
          <InputLabel id={"degree"}>Cấp độ</InputLabel>
          <Select
            labelId={"degree"}
            label={"Cấp độ"}
            value={degree}
            onChange={handleChangeDegree}
            inputProps={register("degree", {
                required: "Cấp độ không được để trống"
              }
            )}
          >
            <MenuItem value={''} disabled>
              <em>Cấp độ</em>
            </MenuItem>
            {degrees.map((item, index) => (
              <MenuItem key={index} value={item.value}>{item.title}</MenuItem>
            ))}
          </Select>
          {!!errors?.degree && <FormHelperText>{errors?.degree?.message}</FormHelperText>}
        </FormControl>
        <TextField
          label="Từ khoá"
          placeholder={"Nhập các từ khoá, ngăn cách bằng dấu phẩy"}
          size={"small"}
          variant="outlined"
          defaultValue={thesis?.keywords?.join(", ")}
          fullWidth
          sx={{
            marginTop: 2
          }}
          InputProps={{
            ...register("keywords", {
              required: "Từ khoá không được để trống",
            })
          }}
          error={!!errors?.keywords}
          helperText={errors?.keywords?.message}
        />
        <Controller
          name={"defense_date"}
          control={control}
          defaultValue={thesis?.defense_date}
          rules={{
            required: "Ngày bảo vệ không được để trống"
          }}
          render={({
                     field: { onChange, value },
                     fieldState: { error }
                   }) => {

            // let converted = null;
            //
            // try {
            //   converted = dayjs(value).format('DD/MM/YYYY')
            // } catch (e) {
            //   converted = value;
            //   console.log(e)
            // }

            return (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Ngày bảo vệ"
                  slotProps={{
                    textField: {
                      size: "small",
                      error: !!error,
                      helperText: error?.message
                    }
                  }}
                  defaultValue={dayjs(value)}
                  sx={{
                    marginTop: 2,
                    width: "100%"
                  }}
                  format={"DD/MM/YYYY"}
                  onChange={(date) => onChange(dayjs(date).format('DD/MM/YYYY'))}
                />
              </LocalizationProvider>
            )
          }}
        />
      </Box>
      <Box
        flexBasis={"45%"}
      >
        <Typography variant={"body1"} sx={{marginTop: 2}}>Cơ cấu hội đồng:</Typography>
        <TextField
          label="Chủ tịch"
          size={"small"}
          type={"number"}
          defaultValue={thesis?.committees?.roles_structure?.chair || 1}
          variant="outlined"
          fullWidth
          sx={{
            marginTop: 2
          }}
          InputProps={{
            ...register("committees.roles_structure.chair", {
              required: "Số lượng chủ tịch không được để trống",
              pattern: {
                value: /^[0-9]+$/,
                message: "Số lượng chủ tịch không hợp lệ"
              }
            })
          }}
          error={!!errors?.committees?.roles_structure?.chair}
          helperText={errors?.committees?.roles_structure?.chair?.message}
        />
        <TextField
          label="Thư ký"
          size={"small"}
          type={"number"}
          defaultValue={thesis?.committees?.roles_structure?.secretary || 1}
          variant="outlined"
          fullWidth
          sx={{
            marginTop: 2
          }}
          InputProps={{
            ...register("committees.roles_structure.secretary", {
              required: "Số lượng thư ký không được để trống",
              pattern: {
                value: /^[0-9]+$/,
                message: "Số lượng thư ký không hợp lệ"
              }
            })
          }}
          error={!!errors?.committees?.roles_structure?.secretary}
          helperText={errors?.committees?.roles_structure?.secretary?.message}
        />
        <TextField
          label="Phản biện"
          size={"small"}
          type={"number"}
          defaultValue={thesis?.committees?.roles_structure?.reviewer || 2}
          variant="outlined"
          fullWidth
          sx={{
            marginTop: 2
          }}
          InputProps={{
            ...register("committees.roles_structure.reviewer", {
              required: "Số lượng phản biện không được để trống",
              pattern: {
                value: /^[0-9]+$/,
                message: "Số lượng phản biện không hợp lệ"
              }
            })
          }}
          error={!!errors?.committees?.roles_structure?.reviewer}
          helperText={errors?.committees?.roles_structure?.reviewer?.message}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          backgroundColor: "#007bff",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#0056b3"
          },
        }}
        type={"submit"}
      >
        Cập nhật luận án
      </Button>
    </Box>
  );
})