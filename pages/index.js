import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Staff from "../components/Staff";
import Quality from "../components/Quality";
import Menu from "../components/Menu";
import BottomText from "../components/BottomText";
import Footer from "../components/Footer";
import Copyright from "../components/Copyrigth";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Hero />
      <About />
      <Staff />
      <Quality />
      <Menu />
      <BottomText />
      <Footer />
      <Copyright />
    </>
  );
}
