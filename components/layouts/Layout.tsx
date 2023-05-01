import Grid from "@mui/material/Grid";

import Header from "./Header";
import SideBar from "./Sidebar";

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
