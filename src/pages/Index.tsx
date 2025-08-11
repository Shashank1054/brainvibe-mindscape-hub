import BrandHeader from "@/components/BrandHeader";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Brainvibe',
    url: 'https://brainvibe.example.com/',
    sameAs: ['https://twitter.com/', 'https://www.linkedin.com/'],
    description: 'Advanced QEEG brain analysis made friendly and clear.'
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <BrandHeader />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
