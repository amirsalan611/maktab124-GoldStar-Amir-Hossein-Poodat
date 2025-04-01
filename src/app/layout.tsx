import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Playfair_Display } from "next/font/google";

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
    <html lang="fa">
      <body className={playfair.className}>
        <div className="flex flex-col justify-between min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default layout;
