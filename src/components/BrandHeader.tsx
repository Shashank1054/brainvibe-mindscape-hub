import { Button } from "@/components/ui/button";

const BrandHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/40">
      <nav className="container px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="inline-flex items-center gap-2 font-extrabold tracking-tight">
          <span className="relative">
            <span className="absolute inset-0 rounded-full blur-md opacity-30 bg-primary" aria-hidden />
            <span className="inline-block h-3 w-3 rounded-full bg-primary" />
          </span>
          <span className="text-lg">Brainvibe</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default BrandHeader;
