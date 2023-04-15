import Grid from "@mui/material/Grid";

import SideBar from "./Sidebar";
import Header from "./Header";

const MainLayout = () => {
  return (
    <Grid>
      <Header />
      <SideBar />
      <main className="main"></main>
    </Grid>
  );
};

export default MainLayout;
