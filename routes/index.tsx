import { About } from "../components/About.tsx";
import { Events } from "../components/Events.tsx";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { Hero } from "../components/Hero.tsx";
import { Members } from "../components/Members.tsx";
import { Stat } from "../components/Stat.tsx";

export default function Home() {
  return (
    <>
      <main class="flex flex-col min-h-screen font-work">
        <Header />
        <div class="flex-grow flex-col flex items-center">
          <Hero class="bg-transparent" />
          {/* <Members class="mt-36" /> */}
          {/* <Stat class="mt-36" /> */}
          <About class="mt-10 lg:mt-36" />
          <Events />
        </div>
      </main>
      <Footer />
    </>
  );
}
