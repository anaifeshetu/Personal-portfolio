import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, maintainable, and scalable code that is easy to understand and built to last.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast, responsive, and reliable applications that provide a smooth user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with others, sharing ideas, and contributing to meaningful software projects.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Continuously learning new technologies and improving my skills to become a better software engineer.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <br />
              <span className="font-serif font-normal text-white">
                one Component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Software Engineer with a strong interest in
                creating modern and meaningful digital experiences. My journey
                in software development began when I joined the Software
                Engineering department, where I discovered my passion for
                coding, problem-solving, and building technology.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Since then, I have been continuously developing my skills and
                working with modern technologies such as React, Next.js,
                TypeScript, Node.js, and databases. I enjoy turning ideas into
                clean, responsive, and user-friendly applications.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I also gained practical experience through a 2-month Software
                Engineering internship at Hahu Cloud Technology. This
                experience allowed me to work in a professional environment,
                collaborate with a team, improve my development skills, and
                gain a better understanding of real-world software development.
              </p>

              <div className="glass rounded-2xl p-6 mt-8 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "My goal is to continuously grow as a Software Engineer and
                  build digital products that are useful, reliable, and
                  enjoyable for people to use."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}