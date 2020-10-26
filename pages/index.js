import Head from "next/head";
import Layout from "../components/layout";
import ChangeLog from "../components/change-log";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Engelsbriefe</title>
      </Head>

      <main>
        <ChangeLog />
      </main>


          <motion.div className="sd"
            dragElastic={0.02}
            drag="x"
            dragConstraints={{ left: -200, right: 0 }}
          />
          
    </Layout>
  );
}
