import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;