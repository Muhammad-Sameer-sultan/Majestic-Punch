import About from "@/components/About";
import Hero from "@/components/Hero";
import Porfolio from "@/components/Porfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Subcribe from "@/components/Subcribe";

export default function Home() {
  return (
  <>
  <Hero />
  <About />
  <Services showbg={true} />
  <Pricing />
<Porfolio />
<Subcribe />


  </>
  )
}
