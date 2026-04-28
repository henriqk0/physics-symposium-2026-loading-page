import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Location } from "../components/Location";
import { SponsorsSection } from "../components/SponsorsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Location />
      <SponsorsSection />
    </>
  );
}
