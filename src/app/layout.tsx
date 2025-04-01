import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
return(
  <div className="flex flex-col">
    <Header/>
      <main>{children}</main>
      <Footer/>
  </div>
)
};
