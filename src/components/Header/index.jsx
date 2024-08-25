import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Profile from "./Menus/Profile.jsx";
import LinkMui from "@mui/material/Link";
import {Link as LinkRouter} from "react-router-dom";
import {AppBar, Container, Toolbar, useTheme} from "@mui/material";
import "./style.css";
import Logo from "~/assets/logoFIT.png";

function Header() {
  const theme = useTheme();

  return (
    <AppBar
      position={'fixed'}
      sx={{
        backgroundColor: theme.palette.headerBackground,
        boxShadow: 'none',
        padding: 0,
        backgroundImage: 'none!important',
      }}
    >
      <Toolbar disableGutters sx={{backgroundImage: 'none!important'}}>
        <Container maxWidth='lg' disableGutters sx={{backgroundColor: 'transparent'}}>
          <Box sx={{
            padding: '0 20px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
            height: theme.app.header.height,
            ".MuiButtonBase-root": {
              fontWeight: 600
            },
            transition: 'all 0.3s ease',
          }}>
            {/*>= sm*/}
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}>
              <LinkMui sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }} component={LinkRouter} to={"/"}>
                <img src={Logo} alt="logo" style={{ height: '40px', paddingLeft: '10px' }}/>
              </LinkMui>
              <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 1,
              }}>
                <Button sx={{color: 'white'}} component={LinkRouter} to="/" autoCapitalize='none'>Trang chủ</Button>
                <Button sx={{color: 'white'}} component={LinkRouter} to="/thesis" autoCapitalize='none'>Quản lý luận án</Button>
                <Button sx={{color: 'white'}} component={LinkRouter} to="/search-experts" autoCapitalize='none'>Tìm kiếm chuyên gia</Button>
              </Box>
            </Box>



            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1
            }}>
              <>
                {/*<Notifications/>*/}
                <Profile/>
              </>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header;