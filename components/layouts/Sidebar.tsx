import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/reduxHooks";
import { SideUl, Sideli } from "./Sidebar.style";

const SideBar = () => {
  const Items = useAppSelector((state) => state.portFolio.items);
  const router = useRouter();
  return (
    <SideUl>
      {Items &&
        Items.map((portFolio) => {
          return (
            <Sideli
              key={portFolio.id}
              onClick={() => router.push(`/${portFolio.href}`)}
            >
              <h5>{portFolio.name}</h5>
            </Sideli>
          );
        })}
    </SideUl>
  );
};

export default SideBar;
