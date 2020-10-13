import Head from "next/head";
import Main_Menu from "../components/main_menu";
import Sub_Menu from "../components/sub_menu";
import { useRouter } from "next/router";

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

      <MenuTest />
      <main>
        <div className="gardient left"></div>
        {children}

        <div className="gardient right"></div>
      </main>
    </div>
  );
}

export function MenuTest() {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname.includes("[")) {
    return <Sub_Menu />;
  } else if (router.pathname.includes("/brief/")) {
    return <Sub_Menu />;
  } else {
    return <Main_Menu />;
  }
}
