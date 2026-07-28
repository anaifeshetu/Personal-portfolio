import { Code2, Rocket, Brain, Users } from "lucide-react";


const approaches = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building clean and modern user interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
  },

  {
    icon: Users,
    title: "Industry Experience",
    description:
      "Working as a Software Engineering Intern at Hahu Technologies, gaining experience through real-world development workflows.",
  },

  {
    icon: Rocket,
    title: "Expanding Skills",
    description:
      "Learning backend development, APIs, databases, and full-stack technologies to become a stronger developer.",
  },

  {
    icon: Brain,
    title: "Future with AI",
    description:
      "Exploring AI technologies and learning how to integrate intelligent solutions into modern applications.",
  },
];



export default function Approach() {


return (

<section
id="approach"
className="py-24 relative"
>


<div className="container mx-auto px-6">



{/* Heading */}

<div className="
max-w-3xl
mb-16
animate-fade-in
">


<p className="
text-primary
uppercase
tracking-[3px]
text-sm
font-medium
">

My Approach

</p>




<h2 className="
mt-4
text-4xl
md:text-5xl
font-bold
text-white
">

How I Build &
<span className="text-primary">
 Grow
</span>

</h2>




<p className="
mt-6
text-lg
text-muted-foreground
leading-8
">

I focus on continuous learning, practical experience,
and building modern digital experiences with clean
and scalable solutions.

</p>


</div>





{/* Cards */}


<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
">


{
approaches.map((item,index)=>{


const Icon = item.icon;


return (

<div

key={index}

className="
group
glass
rounded-3xl
p-7
border
border-white/10
hover:border-primary/40
transition-all
duration-300
hover:-translate-y-2
animate-fade-in
"

style={{
animationDelay:`${index * 150}ms`
}}

>


{/* Icon */}

<div className="
w-14
h-14
rounded-2xl
bg-primary/10
flex
items-center
justify-center
mb-6
group-hover:scale-110
transition-transform
">

<Icon
className="
w-7
h-7
text-primary
"
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

{item.title}

</h3>




<p className="
text-muted-foreground
leading-7
text-sm
">

{item.description}

</p>



</div>


)


})

}


</div>



</div>


</section>

)

}