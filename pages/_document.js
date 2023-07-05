import {Html, Head, Main, NextScript} from "next/document";
//import Navbar from "../components/common/Navbar";
//import TopBar from "../components/common/TopBar";
//import Footer from "../components/common/Footer";
//import {Toaster} from "react-hot-toast";
export default function Document() {
  return (
    <Html dir="en">
      <Head>
        {/* favicon here */}
        <link rel="icon" href="/images/logo/favi.png" />

        {/* font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#f2ede7]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
