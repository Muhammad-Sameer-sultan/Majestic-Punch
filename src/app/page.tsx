import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Porfolio from "@/components/Porfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Subcribe from "@/components/Subcribe";

export default function Home() {
  return (
  <>
  {/* <Main /> */}
  <Hero />
  <About />
  <Services showbg={true} />
  <Pricing />
<Porfolio />
<Subcribe />


  </>
  )
}
