import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-10">
      <div className="container px-6 md:px-8 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-1">
          <a href="#hero" className="font-extrabold tracking-tight">Brainvibe</a>
          <p className="mt-2 text-sm text-muted-foreground">See the brain. Understand the mind.</p>
        </div>
        <nav className="flex gap-6 text-sm md:justify-center">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#blog" className="hover:text-primary">Blog</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <div className="flex md:justify-end gap-4 text-muted-foreground">
          <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin /></a>
          <a href="#" aria-label="GitHub" className="hover:text-primary"><Github /></a>
        </div>
      </div>
      <div className="border-t">
        <div className="container px-6 md:px-8 py-6 text-xs text-muted-foreground">© {year} Brainvibe. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
