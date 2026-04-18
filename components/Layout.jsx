import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import ClickSpark from "../components/ClickSpark";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <ClickSpark sparkColor="#f13024" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        {/* metadata */}
        <Head>
          <title>Keshav S | Portfolio</title>
          <meta
            name="keywords"
            content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
          />
          <meta name="theme-color" content="#f13024" />
        </Head>

        <TopLeftImg />
        <Nav />
        <Header />

        {/* main content */}
        {children}
      </ClickSpark>
    </main>
  );
};

export default Layout;
