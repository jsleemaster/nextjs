import Grid from "@mui/material/Grid";

import SideBar from "./Sidebar";
import Header from "./Header";

const MainLayout = () => {
  return (
    <Grid sx={{ width: "100%", height: "100vh" }}>
      <Header />
      <SideBar />
      <main className="main"></main>
    </Grid>
  );
};

export default MainLayout;
