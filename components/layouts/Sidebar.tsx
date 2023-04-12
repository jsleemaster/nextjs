import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dateCheck">날짜</Link>
        </li>
        <li>
          <Link href="/anyQuestion">무엇이든 물어보세요</Link>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
