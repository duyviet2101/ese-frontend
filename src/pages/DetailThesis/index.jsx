import { Chip, Container, FormControl, InputLabel, Select, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { IoIosArrowBack } from 'react-icons/io';
import Box from '@mui/material/Box';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Divider from '@mui/material/Divider';
import { FaRegClock, FaSchool } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Autocomplete from '@mui/material/Autocomplete';
import dayjs from 'dayjs';
import { SelectTopics } from '~/components/SelectFiltersExperts/index.jsx';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import TableExperts from '~/components/TableExperts/index.jsx';
import TableExpertsThesisDetail from '~/components/TableExpertsThesisDetail/index.jsx';

export default function DetailThesis() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [action, setAction] = useState('');

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeAction = (event) => {
    setAction(event.target.value);
  }

  return (
    <>
      <Box
        sx={{
          paddingY: '20px',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Container
          maxWidth={"lg"}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Button
            variant="text"
            sx={{
              color: 'black',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.1)',
            }}
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack/>
          </Button>
          <Typography variant="h1" fontSize={"24px"} fontWeight={600}>Thông tin luận văn</Typography>
        </Container>
      </Box>
      <Container
        maxWidth={"lg"}
        sx={{
          marginY: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Typography variant="h2" fontSize={"24px"} fontWeight={600}>Luận án: Điều tra chọn mẫu và sự vận dụng trong thống kê Việt Nam</Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1
              }}
            >
              <Typography
                variant="h3"
                fontSize={"16px"}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <MdOutlinePersonOutline/> Nguyễn Văn A
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                variant="h3"
                fontSize={"16px"}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <FaRegClock/> 12/12/2021
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                variant="h3"
                fontSize={"16px"}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <FaSchool/> NEU
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Chip
                variant="outlined"
                color="success"
                label={"Đã có danh sách hội đồng"}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#f1f1f1",
            borderRadius: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "space-between",
            marginTop: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'space-between',
              width: "100%"
            }}
          >
            <Typography
              variant={"h5"}
              flexBasis={"100%"}
            >
              Thông tin chung
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#007bff",
                color: "#fff",
                minWidth: "150px",
                "&:hover": {
                  backgroundColor: "#0056b3"
                },
              }}
            >
              Cập nhật
            </Button>
          </Box>
          <Divider
            sx={{
              width: "100%"
            }}
          />
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
              defaultValue={"Nguyễn Văn A"}
              sx={{
                marginTop: 2
              }}
            />
            <TextField
              label="Email"
              size={"small"}
              variant="outlined"
              defaultValue={"test@gmail.com"}
              fullWidth
              sx={{
                marginTop: 2
              }}
            />
            <TextField
              label="Số điện thoại"
              size={"small"}
              variant="outlined"
              defaultValue={"0123456789"}
              fullWidth
              sx={{
                marginTop: 2
              }}
            />
          </Box>
          <Box
            flexBasis={"45%"}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                defaultValue={dayjs("01/01/1990", "DD/MM/YYYY")}
                label="Ngày sinh"
                slotProps={{
                  textField: {
                    size: "small"
                  }
                }}
                sx={{
                  marginTop: 2,
                  width: "100%"
                }}
                format={"DD/MM/YYYY"}
              />
            </LocalizationProvider>
            <Autocomplete
              options={["Nam", "Nữ", "Khác"]}
              defaultValue={"Nam"}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              sx={{
                marginTop: 2
              }}
              renderInput={(params) =>
                <TextField
                  {...params}
                  label="Giới tính"
                  size={"small"}
                />
              }
            />
            <TextField
              label="Trường/Khoa/Viện"
              defaultValue={"NEU"}
              size={"small"}
              variant="outlined"
              fullWidth
              sx={{
                marginTop: 2
              }}
            />
          </Box>
          <Divider
            sx={{
              marginTop: 2,
              width: "100%"
            }}
          />
          <Typography
            variant={"h6"}
            flexBasis={"100%"}
          >
            Luận án
          </Typography>
          <Box
            flexBasis={"45%"}
          >
            <TextField
              label="Tên luận án"
              defaultValue={"Điều tra chọn mẫu và sự vận dụng trong thống kê Việt Nam"}
              size={"small"}
              variant="outlined"
              fullWidth
              sx={{
                marginY: 2
              }}
            />
            <SelectTopics defaultValues={["Học máy", "Cơ khí"]}/>
            <Autocomplete
              options={levels}
              defaultValue={levels[0]}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              isOptionEqualToValue={(option, value) => option.value === value.value}
              sx={{
                marginTop: 2
              }}
              renderInput={(params) =>
                <TextField
                  {...params}
                  label="Cấp độ"
                  size={"small"}
                />
              }
            />
          </Box>
          <Box
            flexBasis={"45%"}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày bảo vệ"
                defaultValue={dayjs("01/01/2022", "DD/MM/YYYY")}
                slotProps={{
                  textField: {
                    size: "small"
                  }
                }}
                sx={{
                  marginTop: 2,
                  width: "100%"
                }}
                format={"DD/MM/YYYY"}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#f1f1f1",
            borderRadius: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "space-between",
            marginTop: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'space-between',
              width: "100%"
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexBasis: "50%",
                justifyContent: "flex-start"
              }}
            >
              <Typography
                variant={"h5"}
              >
                Danh sách hội đồng
              </Typography>
              <FormControl
                size={"small"}
                sx={{
                  minWidth: "150px"
                }}
              >
                <InputLabel id="select-status">Trạng thái</InputLabel>
                <Select
                  labelId="select-status"
                  id="select-status-input"
                  value={status}
                  label="Trạng thái"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value={"backlog"}>Chưa tìm hội đồng</MenuItem>
                  <MenuItem value={"in-progress"}>Đang liên lạc</MenuItem>
                  <MenuItem value={"done"}>Đã có hội đồng</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexBasis: "50%",
                justifyContent: "flex-end"
              }}
            >
              <FormControl
                size={"small"}
                sx={{
                  minWidth: "150px"
                }}
              >
                <InputLabel id="select-action">Hành động</InputLabel>
                <Select
                  labelId="select-action"
                  id="select-action-input"
                  value={action}
                  label="Hành động"
                  onChange={handleChangeAction}
                >
                  <MenuItem value={""}>Không</MenuItem>
                  <MenuItem value={"delete"}>Xoá</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                component={Link}
                to={"/search-experts"}
                sx={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  minWidth: "150px",
                  "&:hover": {
                    backgroundColor: "#0056b3"
                  },
                }}
              >
                Tìm kiếm hội đồng
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  minWidth: "150px",
                  "&:hover": {
                    backgroundColor: "#0056b3"
                  },
                }}
              >
                Cập nhật
              </Button>
            </Box>
          </Box>
          <Divider
            sx={{
              width: "100%"
            }}
          />
          <TableExpertsThesisDetail/>
        </Box>
      </Container>
    </>
  );
}

const levels = [
  {
    title: "Tiến sĩ",
    value: "TS",
  },
  {
    title: "Thạc sĩ",
    value: "ThS",
  },
  {
    title: "Cử nhân",
    value: "CN",
  }
]