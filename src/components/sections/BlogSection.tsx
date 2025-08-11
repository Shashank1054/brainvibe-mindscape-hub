import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const posts = [
    {
      title: "What a QEEG Can Reveal",
      desc: "A friendly guide to what brain maps show—and how they can help.",
    },
    {
      title: "From Data to Insight",
      desc: "How we turn complex signals into simple, useful explanations.",
    },
    {
      title: "Supporting Mental Wellness",
      desc: "Why clinicians choose Brainvibe for clarity and confidence.",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From our blog</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Card key={p.title} className="overflow-hidden group">
              <div className="aspect-[16/9] bg-muted" aria-hidden />
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{p.desc}</p>
                <Button asChild variant="link" className="mt-2 px-0">
                  <a href="#" aria-label={`Read more: ${p.title}`}>Read More →</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
