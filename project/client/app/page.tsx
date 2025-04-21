import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
}