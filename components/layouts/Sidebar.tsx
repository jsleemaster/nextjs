import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/reduxHooks";
import { SideUl, Sideli } from "./Sidebar.style";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const SideBar = () => {
  const Items = useAppSelector((state) => state.portFolio.items);
  const router = useRouter();
  return (
    <SideUl>
      {Items ? (
        Items.map((portFolio) => {
          return (
            <Sideli
              key={portFolio.id}
              onClick={() => router.push(`/${portFolio.href}`)}
            >
              <Typography>{portFolio.name}</Typography>
            </Sideli>
          );
        })
      ) : (
        <>
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"100%"}
            animation="wave"
          />
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"100%"}
            animation="wave"
          />
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"100%"}
            animation="wave"
          />
        </>
      )}
    </SideUl>
  );
};

export default SideBar;
