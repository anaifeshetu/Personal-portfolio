import { Code2, Rocket, Brain, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Engineer",
    description:
      "Building modern, responsive, and user-friendly web experiences with React and modern frontend technologies.",
  },
  {
    icon: Rocket,
    title: "Backend Learning",
    description:
      "Currently expanding my backend development skills to build complete and reliable applications.",
  },
  {
    icon: Brain,
    title: "AI Engineering Goal",
    description:
      "My long-term goal is to become an AI Engineer and create intelligent solutions for real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Always learning, practicing, and improving my skills through projects and real-world challenges.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="animate-fade-in">

            <span className="text-primary text-sm font-medium tracking-[0.25em] uppercase">
              About Me
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building my skills,
              <br />

              <span className="font-serif font-normal text-white">
                creating my future.
              </span>
            </h2>

            <div className="mt-7 space-y-4">

              <p className="text-base md:text-lg text-muted-foreground leading-8">
                I'm a passionate{" "}
                <span className="text-white font-semibold">
                  Frontend Engineer
                </span>{" "}
                who enjoys building modern, responsive, and user-friendly
                digital experiences.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-8">
                I have developed my skills through{" "}
                <span className="text-white font-medium">
                  real-world projects
                </span>{" "}
                and continuous learning. I'm also currently learning{" "}
                <span className="text-primary font-semibold">
                  Backend Development
                </span>{" "}
                to become a more complete software engineer.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-8">
                My ultimate goal is to become an{" "}
                <span className="text-primary font-semibold">
                  AI Engineer
                </span>{" "}
                and use artificial intelligence and machine learning to
                build meaningful solutions for real-world problems.
              </p>

            </div>

            {/* Vision */}
            <div className="glass rounded-2xl p-6 mt-7 border border-white/10">

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    My Vision
                  </h3>

                  <p className="text-sm text-muted-foreground leading-6">
                    Keep learning, keep building, and keep growing toward
                    becoming an AI Engineer.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="grid sm:grid-cols-2 gap-5">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    glass
                    rounded-2xl
                    p-6
                    min-h-[230px]
                    border
                    border-white/10
                    hover:border-primary/30
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    animate-fade-in
                  "
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-6">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}