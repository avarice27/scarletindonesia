import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/scarlet/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scarlet Indonesia | Brand Activation Agency Jakarta" },
      { name: "description", content: "Scarlet — We bring brands to life. Brand activation agency Jakarta since 2015. Product launch, events, KOL, booth & merchandise." },
      { property: "og:title", content: "Scarlet Indonesia — We Bring Brands to Life" },
      { property: "og:description", content: "Premium brand activations since 2015. 1600+ projects, 79+ partners across Indonesia." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
