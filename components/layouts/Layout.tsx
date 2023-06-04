"use client";

import Grid from "@mui/material/Grid";

import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <Grid sx={{ width: "100%", height: "100vh" }}>
      <Header />
      <main style={{ padding: "1.6rem" }}>{children}</main>
    </Grid>
  );
};

export default MainLayout;
