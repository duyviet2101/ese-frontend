import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
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
          <Typography variant={"h6"} sx={{marginBottom: 1}}>Luận án: <span style={{fontWeight: 500}}>{thesisInfo?.title}</span></Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2
            }}
          >
            <Tooltip title={"Ngày bảo vệ"} arrow>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center"
                }}
              >
                <CiCalendarDate/>
                <Typography variant={"body2"}><span style={{fontWeight: 500}}>{moment(thesisInfo?.defense_date).format("DD/MM/YYYY")}</span></Typography>
              </Box>
            </Tooltip>
            <Tooltip title={"Người bảo vệ"} arrow>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center"
                }}
              >
                <PiStudent/>
                <Typography variant={"body2"}><span style={{fontWeight: 500}}>{thesisInfo?.candidate?.name} - {thesisInfo?.candidate?.phone}</span></Typography>
              </Box>
            </Tooltip>
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

export default SearchExpertsByThesis;