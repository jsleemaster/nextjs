import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>JsLeeMaster</title>
        <meta name="description" content="jsleemaster App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

      <footer className="footer">
        <a
          href="https://github.com/jsleemaster"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {"jsleeMaster"}
        </a>
      </footer>
    </div>
  );
}
