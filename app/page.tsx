import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Stack } from "@/components/stack";
import { Projects } from "@/components/projects";
import { HowIWork } from "@/components/how-i-work";
import { Education } from "@/components/education";
import { Courses } from "@/components/courses";
import { Robotics } from "@/components/robotics";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <HowIWork />
        <Education />
        <Courses />
        <Robotics />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
