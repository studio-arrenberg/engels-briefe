import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ChangeLog from "../components/change-log";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Engelsbriefe</title>
      </Head>

      <ChangeLog />
    </Layout>
  );
}
