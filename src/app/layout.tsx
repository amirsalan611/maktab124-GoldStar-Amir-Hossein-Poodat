import "./globals.css";
import Layout from "@/components/layout/layout";
import ProviderWrapper from "@/components/Provider/Provider";
import { Playfair_Display } from "next/font/google";
import { ToastContainer } from "react-toastify";

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
    <html lang="fa" dir="rtl">
      <body className={playfair.className}>
        <ToastContainer />
        <ProviderWrapper>
          <Layout>{children}</Layout>
        </ProviderWrapper>
      </body>
    </html>
  );
};

export default layout;
