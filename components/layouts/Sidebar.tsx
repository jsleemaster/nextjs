import Link from "next/link";
import { useAppSelector } from "@/hooks/reduxHooks";

const SideBar = () => {
  const Items = useAppSelector((state) => state.portFolio.items);

  return (
    <>
      <ul>
        {Items &&
          Items.map((portFolio) => {
            return (
              <li key={portFolio.id}>
                <Link href={`/${portFolio.href}`}>{portFolio.name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default SideBar;
