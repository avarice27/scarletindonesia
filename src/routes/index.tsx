import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/scarlet/CustomCursor";
import { Nav } from "@/components/scarlet/Nav";
import { Hero } from "@/components/scarlet/Hero";
import { Marquee } from "@/components/scarlet/Marquee";
import { Numbers } from "@/components/scarlet/Numbers";
import { Services } from "@/components/scarlet/Services";
import { ProjectsGrid } from "@/components/scarlet/ProjectsGrid";
import { ProjectDetail } from "@/components/scarlet/ProjectDetail";
import { Merchandise } from "@/components/scarlet/Merchandise";
import { Packages } from "@/components/scarlet/Packages";
import { Clients } from "@/components/scarlet/Clients";
import { CTA } from "@/components/scarlet/CTA";
import { Footer } from "@/components/scarlet/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scarlet | Brand Activation Agency Jakarta" },
      { name: "description", content: "Scarlet — premium brand activation agency. 200+ projects, 79+ brand partners. Product launch, events, KOL, booth & merchandise." },
      { property: "og:title", content: "Scarlet | Brand Activation Agency" },
      { property: "og:description", content: "Premium brand activation since 2015. 200+ projects, 79+ partners across Indonesia." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80" },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <main className="bg-background text-foreground">
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee />
      <Numbers />
      <Services />
      <ProjectsGrid />
      <ProjectDetail />
      <Merchandise />
      <Packages />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
