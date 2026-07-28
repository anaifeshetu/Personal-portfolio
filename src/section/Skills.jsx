import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";


const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    description:
      "Building semantic, accessible, and SEO-friendly web structures.",
    color: "text-orange-500",
  },

  {
    name: "CSS3",
    icon: FaCss3Alt,
    description:
      "Creating modern layouts, animations, and responsive designs.",
    color: "text-blue-500",
  },

  {
    name: "JavaScript",
    icon: FaJs,
    description:
      "Developing interactive and dynamic web applications.",
    color: "text-yellow-400",
  },

  {
    name: "TypeScript",
    icon: SiTypescript,
    description:
      "Writing scalable and maintainable applications with strong typing.",
    color: "text-blue-400",
  },

  {
    name: "React.js",
    icon: FaReact,
    description:
      "Building reusable components and modern frontend applications.",
    color: "text-cyan-400",
  },

  {
    name: "Next.js",
    icon: SiNextdotjs,
    description:
      "Creating high-performance applications with modern rendering.",
    color: "text-white",
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "Designing clean and scalable user interfaces efficiently.",
    color: "text-sky-400",
  },

  {
    name: "Vite",
    icon: SiVite,
    description:
      "Using fast modern tooling for frontend development.",
    color: "text-purple-400",
  },
];


export default function Skills() {


return (

<section
id="skills"
className="relative py-24 overflow-hidden"
>


{/* Background Glow */}

<div className="
absolute
top-20
left-10
w-72
h-72
bg-primary/10
rounded-full
blur-[120px]
">
</div>


<div className="
absolute
bottom-20
right-10
w-80
h-80
bg-primary/5
rounded-full
blur-[120px]
">
</div>




<div className="
container
mx-auto
px-6
relative
z-10
">



{/* Heading */}


<div className="
text-center
max-w-3xl
mx-auto
mb-16
animate-fade-in
">


<span className="
inline-flex
px-4
py-2
rounded-full
glass
text-primary
text-sm
">

My Skills

</span>




<h2 className="
mt-5
text-4xl
md:text-5xl
font-bold
text-white
">

Technologies I
<span className="text-primary">
 Use
</span>

</h2>




<p className="
mt-5
text-lg
text-muted-foreground
leading-8
">

A collection of modern frontend technologies
I use to build fast, scalable, and beautiful
web experiences.

</p>


</div>





{/* Skills Cards */}


<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
">


{
skills.map((skill,index)=>{


const Icon = skill.icon;


return (

<div
key={index}

className="
group
relative
glass
rounded-3xl
p-7
overflow-hidden
hover:-translate-y-2
transition-all
duration-500
animate-fade-in
"
style={{
animationDelay:`${index * 150}ms`
}}
>


{/* Hover Glow */}

<div className="
absolute
inset-0
bg-primary/10
opacity-0
group-hover:opacity-100
transition
duration-500
">
</div>



<div className="
relative
z-10
">


{/* Icon */}

<div className="
w-14
h-14
rounded-2xl
bg-primary/10
flex
items-center
justify-center
mb-5
group-hover:scale-110
transition-transform
">

<Icon
className={`
w-8
h-8
${skill.color}
`}
/>

</div>




<h3 className="
text-xl
font-semibold
text-white
mb-3
group-hover:text-primary
transition-colors
">

{skill.name}

</h3>




<p className="
text-sm
text-muted-foreground
leading-7
">

{skill.description}

</p>



</div>



{/* Border */}

<div className="
absolute
inset-0
rounded-3xl
border
border-white/10
group-hover:border-primary/30
transition
">
</div>



</div>


)


})

}


</div>



</div>


</section>

)

}