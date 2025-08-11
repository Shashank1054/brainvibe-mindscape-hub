import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const heroImage = "/lovable-uploads/705a51b1-ceeb-43fc-accc-5925b9731da8.png";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.1);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" aria-label="Brainvibe hero" className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="QEEG device used for advanced brain analysis"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transform: `translateY(${offset}px)`, filter: "blur(1px)" }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative container px-6 md:px-8">
        <div className="max-w-3xl text-left text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
            Brainvibe — Advanced Brain Analysis
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/90">
            See the brain. Understand the mind.
          </p>
          <p className="mt-2 text-base md:text-lg text-primary-foreground/80">
            Advanced brain mapping and analysis for a healthier future.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#about" aria-label="Learn more about Brainvibe">Learn More</a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href="#contact" aria-label="Contact Brainvibe">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
