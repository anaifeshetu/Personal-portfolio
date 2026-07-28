import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anaifeshetu21@gmail.com",
    href: "mailto:anaifeshetu21@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 917 920 270",
    href: "tel:+251917920270",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jimma, Oromia, Ethiopia",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-primary uppercase tracking-[0.25em] text-xs font-medium">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight text-white">
            Let's Build
            <span className="italic text-primary"> Something Great.</span>
          </h2>

          <p className="mt-5 text-base text-muted-foreground leading-7">
            Whether you have a project, internship opportunity, or simply want
            to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-5 animate-fade-in">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 glass p-5 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>

                    <h3 className="mt-1 text-base font-medium text-white">
                      {item.value}
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl border border-white/10 p-7 animate-fade-in animation-delay-300">
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-normal text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-normal text-white">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-normal text-white">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
              >
                Send Message

                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}