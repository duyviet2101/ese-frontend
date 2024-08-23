import {Outlet, useLocation} from "react-router-dom";
import pushToast from "~/helpers/sonnerToast.js";
import * as React from "react";
import Header from "~/components/Header/index.jsx";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material";

function LayoutDefault() {
  const { state } = useLocation();
  const theme = useTheme();

  if (state?.messageToast) {
    pushToast(state.messageToast.message, state.messageToast.type);
    state.messageToast = null;
  }

  return (
    <>
      <Header/>
      <Box
        sx={{
          marginTop: theme.app.header.height,
        }}
      >
        <Outlet/>
      </Box>
    </>
  )
}

export default LayoutDefault;