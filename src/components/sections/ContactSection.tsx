import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. We’ll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container px-6 md:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s talk</h2>
          <p className="mt-3 text-muted-foreground">Tell us a little about yourself and how we can help.</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required placeholder="How can we help?" rows={5} />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading}>
              {loading ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
        <div className="rounded-xl overflow-hidden border h-[300px] md:h-full">
          <iframe
            title="Brainvibe office location"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.99337198624!2d-123.1207!3d49.2827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE2JzU3LjciTiAxMjPCsDA3JzE0LjUiVw!5e0!3m2!1sen!2s!4v1710000000000"></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
