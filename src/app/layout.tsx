import "./globals.css";
import Layout from "@/components/layout/layout";
import ProviderWrapper from "@/components/Provider/Provider";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import { Providers } from "./providers";

export const metadata = {
  title: "GoldStar",
  icons: {
    icon: "/goldStar.jpg",
  },
};

const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-UI-FD-Medium.woff2",
      weight: "400",
    },
  ],
  variable: "--font-vazir",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased ${vazir.className}`}>
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
