import bg from "../assets/bg.png";
import anna from "../assets/anna.jpg";
import AnimatedBorderButton from "../Component/AnimatedBorderButton";

import {
  ChevronDown,
  Github,
  Linkedin,
  XIcon,
  Sparkles,
} from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Vercel",
  "TailwindCSS",
  "Prisma",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">

      {/* ============================= */}
      {/* BACKGROUND IMAGE */}
      {/* ============================= */}

      <div className="hero-background absolute inset-0">
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ============================= */}
      {/* HERO OVERLAY */}
      {/* ============================= */}

      <div className="hero-overlay absolute inset-0" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-[50px] items-center">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* Small Heading */}
            <div className="animate-fade-in">
              <span className="inline-flex px-4 py-2 truncate text-sm text-primary">
                <h1 className="animate-pulse">
                  Software Engineer * React Specialist
                </h1>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">

              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">
                  digital
                </span>
                <br />
                experiences with
                <br />
                <span className="hero-title font-serif italic font-normal">
                  Precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Anaif Eshetu - a software engineer specializing
                in React, Next.js, and TypeScript. I build scalable,
                performant web applications that users love.
              </p>
            </div>

            {/* CTA */}
            <div>
              <a href="#contact" className="inline-block">
                <AnimatedBorderButton />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative animate-fade-in animation-delay-300 flex flex-col items-start">

            <div className="relative max-w-md ml-auto">

              {/* Image Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-gradient-to-br
                  from-primary/30
                  via-transparent
                  to-primary/10
                  blur-2xl
                  animate-pulse
                "
              />

              {/* Profile Image */}
              <div className="-scale-x-100 relative glass rounded-3xl p-3 glow-border flex flex-col items-end">
                <img
                  src={anna}
                  className="w-full aspect-[2.5/4] object-cover rounded-2xl"
                  alt="Anaif Eshetu"
                />
              </div>

              {/* Available Badge */}
              <div className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-4 py-3 shadow-lg animate-float">
                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                  <span className="text-sm font-medium">
                    Available for Work
                  </span>

                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 glass-strong rounded-xl px-4 py-3 shadow-lg animate-float animation-delay-500">

                <div className="flex items-center gap-3">

                  <div className="p-2 rounded-full bg-primary/10">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>

                  <div>

                    <div className="text-xl font-bold text-primary leading-none">
                      1+
                    </div>

                    <div className="text-xs text-muted-foreground mt-1">
                      Years Exp.
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-12 flex items-center gap-4 animate-fade-in animation-delay-400">

          <span className="text-sm text-muted-foreground">
            Follow me:
          </span>

          {[
            {
              icon: Github,
              href: "https://github.com/anaifeshetu",
            },
            {
              icon: Linkedin,
              href: "#",
            },
            {
              icon: XIcon,
              href: "#",
            },
          ].map((social, idx) => {

            const Icon = social.icon;

            return (
              <a
                key={idx}
                href={social.href}
                target={social.href !== "#" ? "_blank" : "_self"}
                rel={
                  social.href !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  p-2
                  rounded-full
                  glass
                  hover:bg-primary/10
                  hover:text-primary
                  transition-all
                  duration-300
                "
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* SKILLS */}
        <div className="mt-20 animate-fade-in animation-delay-600">

          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I Work With
          </p>

          <div className="relative overflow-hidden">

            <div className="flex animate-marquee">

              {[...skills, ...skills].map((skill, idx) => (

                <div
                  key={idx}
                  className="flex-shrink-0 px-8 py-4"
                >

                  <span
                    className="
                      text-xl
                      font-semibold
                      text-muted-foreground/50
                      hover:text-muted-foreground
                      transition-colors
                    "
                  >
                    {skill}
                  </span>

                </div>

              ))}

            </div>
          </div>
        </div>

        {/* SCROLL */}
        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            animate-fade-in
            animation-delay-800
          "
        >

          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >

            <span className="text-xs uppercase tracking-wider">
              Scroll
            </span>

            <ChevronDown className="w-6 h-6 animate-bounce" />

          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;