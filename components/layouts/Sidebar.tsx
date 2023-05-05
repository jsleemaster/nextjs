import { useAppSelector } from "@/hooks/reduxHooks";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

import { SideUl, Sideli } from "./Sidebar.style";

const SideBar = () => {
  const Items = useAppSelector((state) => state.portFolio.filterItems);
  const router = useRouter();

  if (!Items) {
    return (
      <>
        {[1, 2, 3].map((index) => (
          <Skeleton
            key={index}
            variant="rounded"
            width={"100%"}
            height={"100%"}
            animation="wave"
          />
        ))}
      </>
    );
  }
  if (Items.length === 0) {
    return (
      <SideUl>
        <Sideli>
          <Typography> 데이터가 없습니다.</Typography>
        </Sideli>
      </SideUl>
    );
  }

  return (
    <SideUl>
      {Items.map((portFolio) => {
        return (
          <Sideli
            key={portFolio.id}
            onClick={() => router.push(`/${portFolio.href}`)}
          >
            <Typography>{portFolio.name}</Typography>
          </Sideli>
        );
      })}
    </SideUl>
  );
};

export default SideBar;
