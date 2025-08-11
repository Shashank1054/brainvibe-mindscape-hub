const aboutImage = "/lovable-uploads/03a1b6a0-10c4-4748-b0bd-56552ed69212.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Smart, human-centered brain insights</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Brainvibe combines advanced QEEG technology with friendly, easy-to-understand analysis. Our mission is simple: help clinicians, researchers, and individuals
            see what’s really happening in the brain—so we can make better decisions for mental well-being.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            From accurate brain mapping to clear reports and thoughtful support, we’re here to make neuroscience feel approachable and genuinely helpful.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <img
              src={aboutImage}
              alt="QEEG device being set up in a clinical environment"
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-[var(--shadow-glow)]"
            />
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl blur-2xl opacity-30 bg-primary" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
