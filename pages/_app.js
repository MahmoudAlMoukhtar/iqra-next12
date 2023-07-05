import {Toaster} from "react-hot-toast";
import {OurContextProvider} from "../context/OurContext";
import {QueryClient, QueryClientProvider} from "react-query";

import "../styles/globals.css";
import Navbar from "../components/common/Navbar";
import TopBar from "../components/common/TopBar";
import Footer from "../components/common/Footer";

function MyApp({Component, pageProps}) {
  const queryClient = new QueryClient();
  return (
    <OurContextProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <TopBar />
        <Component {...pageProps} />
        <Footer />
        <Toaster />
      </QueryClientProvider>
    </OurContextProvider>
  );
}

export default MyApp;
