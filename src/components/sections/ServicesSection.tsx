import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BarChart3, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "QEEG Brain Scans",
      desc: "High-precision mapping to support confident clinical decisions.",
      Icon: Activity,
    },
    {
      title: "Data Analysis Tools",
      desc: "Clean visuals and reports that are easy to explain and share.",
      Icon: BarChart3,
    },
    {
      title: "Training & Support",
      desc: "Friendly guidance for clinicians, researchers, and mental health experts.",
      Icon: GraduationCap,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What we do</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">Tools that blend scientific accuracy with a human touch.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, Icon }) => (
            <Card key={title} className="h-full transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-3">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
