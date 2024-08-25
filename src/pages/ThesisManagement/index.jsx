import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { SearchNameBox, SelectDate, SelectStatus } from '~/components/SelectFiltersThese/index.jsx';
import Button from '@mui/material/Button';
import TableThese from '~/components/TableThese/index.jsx';

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
        }}
      >
        <TableThese/>
      </Container>
    </>
  )
}