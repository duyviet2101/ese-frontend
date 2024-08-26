import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TableTheses from '~/components/TableTheses/index.jsx';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function ThesisManagement() {
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
          <Typography variant="h1" fontSize={"24px"} fontWeight={600}>Quản lý luận án</Typography>
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
        <Button
          variant="contained"
          color={"info"}
          component={Link}
          to={"/thesis/create"}
          sx={{
            width: "200px",
            alignSelf: "flex-end"
          }}
          startIcon={<MdAddCircle/>}
        >
          Tạo luận án
        </Button>
        <TableTheses/>
      </Container>
    </>
  )
}