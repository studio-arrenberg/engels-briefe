import Head from "next/head";
import Main_Menu from "../components/main_menu";
import Sub_Menu from "../components/sub_menu";
import Start_Menu from "../components/start_menu";
import { useRouter } from "next/router";
import { AnimateSharedLayout } from "framer-motion"

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Engelsbriefe" />
        <meta name="og:title" content="Engelsbriefe" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>

      <Menu/>

      <main>
        <div className="gardient left"></div>
        {children}
        <div className="gardient right"></div>
      </main>
    </div>
  );
}

export function Menu() {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname.includes("[")) {
    return <Sub_Menu />;
    // return <Main_Menu />;
  } else if (router.pathname.includes("/brief/")) {
    return <Sub_Menu />;
    // return <Main_Menu />;
  } else if (router.pathname == '/') {
    // return <Start_Menu />;
    return (<></>)
  } else {
    return <Main_Menu />;
  }
}
