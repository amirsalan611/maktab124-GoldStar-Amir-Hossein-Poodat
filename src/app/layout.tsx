import "./globals.css";
import Layout from "@/components/layout/layout";
import ProviderWrapper from "@/components/Provider/Provider";
import { Playfair_Display } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Providers } from "./providers";

export const metadata = {
  title: "GoldStar",
  icons: {
    icon: "/goldStar.jpg",
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa" dir="rtl" className="font-sans">
      <body className={playfair.className}>
        <ToastContainer />
        <Providers>
          <ProviderWrapper>
            <Layout>{children}</Layout>
          </ProviderWrapper>
        </Providers>
      </body>
    </html>
  );
};

export default layout;
