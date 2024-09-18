import Box from "@mui/material/Box";
import { Chip, Container, Typography } from '@mui/material';
import Button from "@mui/material/Button";
import {IoIosArrowBack} from "react-icons/io";
import TableExperts from "~/components/TableExperts/index.jsx";
import { useNavigate, useParams } from 'react-router-dom';
import TableSearchExpertsByThesis from '~/components/TableSearchExpertsByThesis/index.jsx';
import { useEffect, useState } from 'react';
import Request from '~/utils/request.js';
import moment from 'moment';
import { CiCalendarDate } from 'react-icons/ci';
import Tooltip from '@mui/material/Tooltip';
import { PiStudent } from 'react-icons/pi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Divider from '@mui/material/Divider';
import { FaRegClock } from 'react-icons/fa';

function SearchExpertsByThesis() {
  const navigate = useNavigate();
  const [thesisInfo, setThesisInfo] = useState(null);
  const {id: thesisId} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await Request.get(`/theses/${thesisId}`);
      setThesisInfo(res);
    }
    fetchData();
  }, [thesisId]);

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
          <Typography variant="h1" fontSize={"24px"} fontWeight={600}>Tìm kiếm chuyên gia:</Typography>
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
            marginTop: '20px',
            padding: "20px",
            backgroundColor: "#f1f1f1",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" fontSize={"24px"} fontWeight={600}>Luận án: {thesisInfo?.title}</Typography>
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
              <MdOutlinePersonOutline/> {thesisInfo?.candidate?.name}
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
              <FaRegClock/> {moment(thesisInfo?.defense_date).format('DD/MM/YYYY')}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Chip
              variant="filled"
              color={COMMITTEE_STATUSES[thesisInfo?.committees?.status]?.color}
              label={COMMITTEE_STATUSES[thesisInfo?.committees?.status]?.name}
            />
            <Divider orientation="vertical" flexItem />
            <Chip
              variant={"filled"}
              color={"default"}
              label={"Xem chi tiết"}
              clickable={true}
              onClick={() => navigate(`/thesis/${thesisInfo?._id}`)}
            />
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
          <TableSearchExpertsByThesis
            thesisInfo={thesisInfo}
          />
        </Box>
      </Container>
    </>
  );
}

const COMMITTEE_STATUSES = {
  not_started: {
    name: 'Chưa bắt đầu',
    value: 'not_started',
    color: 'default',
  },
  waiting: {
    name: 'Đang tìm kiếm',
    value: 'waiting',
    color: 'warning',
  },
  done: {
    name: 'Đã chốt hội đồng',
    value: 'done',
    color: 'success',
  }
}

export default SearchExpertsByThesis;