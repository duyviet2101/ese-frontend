import Box from '@mui/material/Box';
import { Container, useTheme } from '@mui/material';
import SearchToolBar from '~/components/SearchToolBar/index.jsx';

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
        <SearchToolBar/>
      </Box>
    </Container>
  )
}