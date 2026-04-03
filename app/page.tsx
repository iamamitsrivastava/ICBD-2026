import Hero from "@/components/sections/Hero";
import Header from "@/components/sections/Header";
import { Objectives, AboutConference } from "@/components/sections/About";
import Themes from "@/components/sections/Themes";
import Timeline from "@/components/sections/Timeline";
import Speakers from "@/components/sections/Speakers";
import { Highlights, Guidelines } from "@/components/sections/Content";
import Footer from "../components/sections/Footer";
import { Venue } from "@/components/sections/Venue";


export default function Home() {
  return (
    <main className="main-container">
      <Header />
      <Hero />
      <AboutConference />
      <Objectives />
      <Themes />
      <Timeline />
      <Speakers />
      <Highlights />
      <Guidelines />

      <Venue />

      <Footer />
    </main>
  );
}
