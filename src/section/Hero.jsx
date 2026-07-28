import bg from "../assets/bg.png"
import anna from "../assets/anna.jpg"
import AnimatedBorderButton from "../Component/AnimatedBorderButton";
// import button from "../Component/Button"


import { ChevronDown, Github, Linkedin, XIcon, Sparkles } from "lucide-react";
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
"GitHub Actions",];

export const Hero = () => {

  return (
<section className="relative min-h-screen flex item-center overflow-hidden">
{/* bg */}
<div className="absolute inset-0">
  <img src={bg}
  alt="hero img" 
  className="w-full h-full object-cover " />
</div>
<div className="absolute inset-0  bg-gradient-to-b  from-background/20 via-background/80 to-background">
   {/* bg-gradient-to-b */}
</div>

{/* Green dots */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(30)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1.5 h-1.5 rounded-full opacity-60"
      style={{
        backgroundColor: "#20B2A6",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ))}
</div>
 {/* Content */}
<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
   <div className="grid lg:grid-cols-2 gap-[50px] item-center">
 {/* Left Column -Text Content */}
 <div className="space-y-8">
  <div className="animate-fade-in">
    <span className="inline-flex  px-4 py-2 truncate text-sm text-primary">
    <h1 className="w-70 h-2 animate-pulse  ">
      Software Engineer  *  React Specialist
    </h1>
    </span>
  </div>
  {/* Headline */}
  <div className="space-y-4">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
      Crafting <span className=" text-primary glow-text">
  digital
      </span>
       <br />
       experiences with
       <br/>
      <span className="font-serif italic font-normal text-white">
Precision.
      </span>
    </h1>
    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
Hi, I'm Anaif Eshetu - a software engineer specializing in
React, Next.js, and TypeScript. I build scalable, performant web
applications that users love.
    </p>
  </div>
  {/* CTAs */}
<div>
  <AnimatedBorderButton/>

</div>
</div>

 {/* Right colum - profile Image */}
 <div className="relative animate-fade-in animation-delay-300 flex flex-col items-start">
  {/* Profile Image */}
  <div className="relative max-w-md ml-auto">
   <div className="absolute inset-0
rounded-3xl bg-gradient-to-br
from-primary/30 via-transparent
to-primary/10 blur-2xl animate-pulse"/>
    <div className=" -scale-x-100 relative glass rounded-3xl p-3 glow-border  flex flex-col items-end">
      <img src= {anna} className="w-full aspect-[2.5/4] object-cover  rounded-2xl" alt=" Anaif Eshetu "/>
    </div>

    {/* Floating Badge */}
    <div className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-4 py-3 shadow-lg animation-float 4s ease-in-out infinite">
     <div className="flex items-center gap-3">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
       <span className="text-sm font-medium">
         Available for Work
       </span>
     </div>
    </div>

    {/* Starts Badge */}
    <div className="absolute -top-4 -left-4 glass-strong rounded-xl px-4 py-3 shadow-lg animate-float animation-delay-500">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-primary/10">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <div>
          <div className="text-xl font-bold text-primary leading-none">1+</div>
          <div className="text-xs text-muted-foreground mt-1">Years Exp.</div>
        </div>
      </div>
    </div>
  </div>

 </div>
</div>

<br/>

{/* Social Links */}
<div className="flex items-center gap-4 animate-fade-in animation-delay-400">
  <span className="text-sm text-muted-foreground ">
    Follow me: </span>
{[
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: XIcon, href: "#" },
].map((social, idx) => (
  <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
    <social.icon className="w-5 h-5" />
  </a>
))}
</div>
{/* skills section */}
<div className="mt-20 animate-fade-in animation-delay-600">
<p className="text-sm text-muted-foreground mb-6 text-center">Technologies I Work With</p>
<div className="relative overflow-hidden">
  <div className="flex animate-marquee">
   { [...skills, ...skills].map((skill,idx) => (
    <div key={idx} className="flex-shrink-0 px-8 py-4">
      <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors ">
        {skill}
      </span>
    </div>

   ))}
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2
animate-fade-in animation-delay-800">

<a href="#about"
className="flex flex-col items-center gap-2 text-muted-foreground">

<span className="text-xs uppercase tracking-wider">Scroll</span>
<ChevronDown className="w-6 h-6 animate-bounce" />
</a>
</div>
</div>
</section>

  
  );
};

export default Hero;