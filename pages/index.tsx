import Head from "next/head";
import MainLayout from "components/layouts/MainLayout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>JsLeeMaster</title>
      </Head>
      <MainLayout></MainLayout>
    </div>
  );
}
