import { Container, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Divider from '@mui/material/Divider';
import { SelectTopics } from '~/components/SelectFiltersExperts/index.jsx';
import Autocomplete from '@mui/material/Autocomplete';
import { IoIosArrowBack } from 'react-icons/io';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function CreateThesis() {
  const navigate = useNavigate();

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
          <Typography variant="h1" fontSize={"24px"} fontWeight={600}>Tạo luận án</Typography>
        </Container>
      </Box>
      <Container
        maxWidth={"lg"}
        sx={{
          marginY: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#f1f1f1",
            borderRadius: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "space-between",
          }}
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
            />
            <TextField
              label="Email"
              size={"small"}
              variant="outlined"
              fullWidth
              sx={{
                marginTop: 2
              }}
            />
            <TextField
              label="Số điện thoại"
              size={"small"}
              variant="outlined"
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
                label="Học vị"
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
            <TextField
              label="Chức danh"
              size={"small"}
              variant="outlined"
              fullWidth
              sx={{
                marginTop: 2
              }}
            />
            <TextField
              label="Khoa"
              size={"small"}
              variant="outlined"
              fullWidth
              sx={{
                marginTop: 2
              }}
            />
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
                marginY: 2
              }}
            />
            <SelectTopics/>
            <Autocomplete
              id="tags-outlined"
              options={levels}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
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
      </Container>
    </>
  )
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