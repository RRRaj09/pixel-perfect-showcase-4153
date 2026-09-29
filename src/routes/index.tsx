import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import {
  Intro,
  Solutions,
  Capabilities,
  Process,
  WhyRavector,
  About,
  FinalCta,
} from "@/components/site/Sections";

const title = "RAVECTOR — Engineering What's Next";
const description =
  "RAVECTOR builds modern technology solutions across Cloud, Data, AI and Software Engineering — turning complex challenges into scalable digital products and platforms.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Solutions />
        <Capabilities />
        <Process />
        <WhyRavector />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
