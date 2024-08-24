import Box from "@mui/material/Box";
import {Chip, Container, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {IoIosArrowBack} from "react-icons/io";
import {MdOutlinePersonOutline} from "react-icons/md";
import {FaRegClock, FaSchool} from "react-icons/fa";
import Divider from "@mui/material/Divider";
import TableExperts from "~/components/TableExperts/index.jsx";

function SearchExperts() {
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
        >
          <Typography variant="h1" fontSize={"24px"} fontWeight={600}>Tìm kiếm chuyên gia: #112233</Typography>
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
          >
            <IoIosArrowBack/>
          </Button>
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
            marginTop: '20px',
            padding: "20px",
            backgroundColor: "#f1f1f1",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TableExperts/>
        </Box>
      </Container>
    </>
  );
}

export default SearchExperts;