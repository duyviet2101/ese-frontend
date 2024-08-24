import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IoIosArrowBack } from 'react-icons/io';
import { Chip, Container, Typography, useTheme } from '@mui/material';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Divider from '@mui/material/Divider';
import { FaRegClock, FaSchool } from 'react-icons/fa';
import TableExperts from '~/components/TableExperts/index.jsx';
import {
  SearchNameBox,
  SelectAddress,
  SelectDegree,
  SelectOccupation,
  SelectTopics
} from '~/components/SelectFilters/index.jsx';

export default function HomePage() {
  const theme = useTheme();

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        height: `calc(100vh - ${theme.app.header.height})`,
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          marginTop: 40,
          padding: "20px",
          backgroundColor: "#f1f1f1",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: "wrap"
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexBasis: "100%",
              height: "40px",
              marginBottom: 1
            }}
          >
            <SearchNameBox/>
            <Button
              variant="contained"
              sx={{
                textWrap: "none",
                whiteSpace: "nowrap",
                height: "100%",
                backgroundColor: "rgb(0,128,255)",
                "&:hover": {
                  backgroundColor: "rgb(0,128,255)",
                },
              }}
            >
              Tìm kiếm
            </Button>
            <Button
              sx={{
                textWrap: "none",
                whiteSpace: "nowrap",
                height: "100%",
                paddingX: "15px"
              }}
            >
              Xoá bộ lọc
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              width: "100%"
            }}
          >
            <SelectTopics/>
            <SelectDegree/>
            <SelectAddress/>
            <SelectOccupation/>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}