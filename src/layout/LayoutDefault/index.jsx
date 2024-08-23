import {Outlet, useLocation} from "react-router-dom";
import pushToast from "~/helpers/sonnerToast.js";
import * as React from "react";

function LayoutDefault() {
  const { state } = useLocation();

  if (state?.messageToast) {
    pushToast(state.messageToast.message, state.messageToast.type);
    state.messageToast = null;
  }

  return (
    <Outlet/>
  )
}

export default LayoutDefault;