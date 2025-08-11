import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Jane Doe",
      role: "Clinical Psychologist",
      quote:
        "Brainvibe helps me translate complex brain data into conversations my clients can truly understand.",
      initials: "JD",
    },
    {
      name: "Michael Lee",
      role: "Neuroscience Researcher",
      quote:
        "The QEEG quality and reports are outstanding. It makes collaboration across teams effortless.",
      initials: "ML",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container px-6 md:px-8">
        <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-accent to-muted">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Trusted by caring professionals</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl bg-background p-6 shadow-sm border">
                <blockquote className="text-lg">“{t.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
