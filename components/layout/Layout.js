import React from "react";
import Navbar from "./Navbar";
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const Layout = (props) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Navbar />
        <main>{props.children}</main>
      </StyledEngineProvider>
    </>
  );
};

export default Layout;
