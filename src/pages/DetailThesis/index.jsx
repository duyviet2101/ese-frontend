import { Chip, Container, FormControl, InputLabel, Select, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { IoIosArrowBack } from 'react-icons/io';
import Box from '@mui/material/Box';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Divider from '@mui/material/Divider';
import { FaRegClock, FaSchool } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import TableExpertsThesisDetail from '~/components/TableExpertsThesisDetail/index.jsx';
import UpdateForm from '~/pages/DetailThesis/UpdateForm.jsx';
import Request from '~/utils/request.js';
import moment from 'moment';
import { isEmpty } from 'lodash';

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

export default function DetailThesis() {
  const navigate = useNavigate();
  const [action, setAction] = useState('');
  const { id } = useParams();
  const [thesis, setThesis] = useState({});


  useEffect(() => {
    const fetchThesis = async () => {
      const res = await Request.get(`/theses/${id}`);
      setThesis(res);
    }
    fetchThesis();
  }, [id]);

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
            marginBottom: '20px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Typography variant="h2" fontSize={"24px"} fontWeight={600}>Luận án: {thesis?.title}</Typography>
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
                <MdOutlinePersonOutline/> {thesis?.candidate?.name}
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
                <FaRegClock/> {moment(thesis?.defense_date).format('DD/MM/YYYY')}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Chip
                variant="filled"
                color={COMMITTEE_STATUSES[thesis?.committees?.status]?.color}
                label={COMMITTEE_STATUSES[thesis?.committees?.status]?.name}
              />
            </Box>
          </Box>
        </Box>
        {!(isEmpty(thesis)) && <UpdateForm thesis={thesis} />}
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

            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexBasis: "50%",
                justifyContent: "flex-end"
              }}
            >
              {thesis?.committees?.status !== 'done' && <Button
                variant="contained"
                component={Link}
                to={`/thesis/${id}/search-experts?what=${thesis?.keywords?.join(',')}`}
                sx={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  minWidth: '150px',
                  '&:hover': {
                    backgroundColor: '#0056b3'
                  }
                }}
              >
                Tìm kiếm hội đồng
              </Button>}
              {/*<Button*/}
              {/*  variant="contained"*/}
              {/*  sx={{*/}
              {/*    backgroundColor: "#007bff",*/}
              {/*    color: "#fff",*/}
              {/*    minWidth: "150px",*/}
              {/*    "&:hover": {*/}
              {/*      backgroundColor: "#0056b3"*/}
              {/*    },*/}
              {/*  }}*/}
              {/*  type={"submit"}*/}
              {/*  form={"form-experts"}*/}
              {/*>*/}
              {/*  Cập nhật*/}
              {/*</Button>*/}
            </Box>
          </Box>
          <Divider
            sx={{
              width: "100%"
            }}
          />
          {!isEmpty(thesis) && <TableExpertsThesisDetail setThesis={setThesis} thesis={thesis} />}
        </Box>
      </Container>
    </>
  );
}