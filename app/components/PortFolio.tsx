"use client";

import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

import { useAppSelector } from "app/hooks/reduxHooks";

import { PortFolioBox, PortFolioContent } from "./PortFolio.style";

const PortFolio = () => {
  const Items = useAppSelector((state) => state.portFolio.filterItems);
  const router = useRouter();

  if (!Items) {
    return (
      <PortFolioBox>
        <PortFolioContent>
          {[1, 2, 3, 4, 5].map((index) => (
            <Skeleton
              key={index}
              variant="rounded"
              width={"100%"}
              height={"100%"}
              animation="wave"
            />
          ))}
        </PortFolioContent>
      </PortFolioBox>
    );
  }
  if (Items.length === 0) {
    return (
      <PortFolioBox>
        <PortFolioContent>
          <Typography> 데이터가 없습니다.</Typography>
        </PortFolioContent>
      </PortFolioBox>
    );
  }

  return (
    <PortFolioBox>
      {Items.map((portFolio) => {
        return (
          <PortFolioContent
            key={portFolio.id}
            onClick={() => router.push(`/${portFolio.href}`)}
          >
            <Typography>{portFolio.name}</Typography>
          </PortFolioContent>
        );
      })}
    </PortFolioBox>
  );
};

export default PortFolio;
