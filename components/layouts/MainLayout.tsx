import Link from "next/link";

const MainLayout = () => {
  return (
    <main className="main">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dateCheck">날짜</Link>
        </li>
        <li>
          <Link href="/anyQuestion" prefetch>
            무엇이든 물어보세요
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default MainLayout;
