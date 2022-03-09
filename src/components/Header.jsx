import React, { useContext } from "react";
import Flexbox from "./shared/Flexbox.tsx";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoBlack from "./../assets/LogoBlack.png"
import Spacer from "./shared/Spacer.tsx";
import LogoutIcon from '@mui/icons-material/Logout';
import './style.scss';
import { UserContext } from "../context/UserContext";
import { userInitialState } from "../common/helpers/initialStates";

const Header = () => {

  const { userDetails, setUserDetails } = useContext(UserContext)
  const logout = () => {
    setUserDetails(userInitialState)
    sessionStorage.removeItem("user")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{boxShadow: 0}} color="transparent" position="static">
        <Toolbar style={{ justifyContent: 'space-between'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src={LogoBlack}
              alt="logo-black-ioasys"
              loading="lazy"
              width="104.4"
              height="36"
            />
            <Spacer vertical="16.6"/>
            <p style={{fontFamily: 'Heebo', fontSize: '28px', fontWeight: '300', color: '#000'}}>
              Books
            </p>
          </IconButton>
          <Flexbox >
            <Typography className="hidden-mobile" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bem vindo(a), <b>{userDetails.name}</b>!
            </Typography>
            <Button color="inherit" onClick={logout}>
              <LogoutIcon />
            </Button>
          </Flexbox>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;