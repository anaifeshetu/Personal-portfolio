import { Trophy, Code2, Award, BookOpen } from "lucide-react";


const achievements = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern and responsive web applications using React, JavaScript, TypeScript, Tailwind CSS, and Next.js.",
    color: "from-blue-500/20 to-cyan-500/20",
  },

  {
    icon: Award,
    title: "Udacity Certificate",
    description:
      "Completed a professional Udacity program focused on modern web development concepts and practical frontend skills.",
    color: "from-green-500/20 to-emerald-500/20",
  },

  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Continuously improving my skills by learning modern frontend technologies, UI design principles, and software engineering practices.",
    color: "from-purple-500/20 to-pink-500/20",
  },

  {
    icon: Trophy,
    title: "Frontend Projects",
    description:
      "Created multiple real-world projects including portfolios, booking systems, dashboards, and interactive web applications.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
];


export default function Achievements() {

return (

<section
id="achievements"
className="relative py-28 overflow-hidden bg-background"
>


{/* Background Glow */}

<div className="absolute inset-0">

<div className="
absolute
top-20
left-20
w-72
h-72
bg-primary/10
blur-[120px]
rounded-full
"/>


<div className="
absolute
bottom-20
right-20
w-80
h-80
bg-primary/5
blur-[120px]
rounded-full
"/>

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
mb-20
animate-fade-in
">


<span className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
glass
text-primary
text-sm
mb-6
">

<Trophy className="w-4 h-4"/>

Achievements

</span>




<h2 className="
text-4xl
md:text-5xl
font-bold
text-white
">

My Growth as a
<span className="text-primary">
 Frontend Engineer
</span>

</h2>




<p className="
mt-6
text-lg
text-muted-foreground
leading-8
">

A journey of learning, building projects,
and developing modern frontend skills through
real-world experience.

</p>


</div>





{/* Cards */}

<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
">


{
achievements.map((item,index)=>(


<div
key={index}

className="
group
relative
glass
rounded-3xl
p-8
overflow-hidden
hover:-translate-y-3
transition-all
duration-500
animate-fade-in
"

style={{
animationDelay:`${index * 150}ms`
}}

>


{/* Gradient Hover */}

<div
className={`
absolute
inset-0
opacity-0
group-hover:opacity-100
transition-all
duration-500
bg-gradient-to-br
${item.color}
`}
/>



<div className="
relative
z-10
">


{/* Icon */}

<div className="
w-16
h-16
rounded-2xl
bg-primary/10
flex
items-center
justify-center
mb-6
group-hover:scale-110
transition-transform
">

<item.icon
className="
w-8
h-8
text-primary
"
/>

</div>




<h3 className="
text-2xl
font-bold
text-white
mb-4
group-hover:text-primary
transition-colors
">

{item.title}

</h3>




<p className="
text-muted-foreground
leading-7
">

{item.description}

</p>


</div>



{/* Border */}

<div className="
absolute
inset-0
rounded-3xl
border
border-primary/10
group-hover:border-primary/30
transition-all
"/>


</div>


))


}


</div>





{/* Stats */}

<div className="
grid
grid-cols-2
md:grid-cols-4
gap-8
mt-20
">


{
[
{
number:"8+",
label:"Projects Built"
},
{
number:"1",
label:"Udacity Certificate"
},
{
number:"8+",
label:"Technologies"
},
{
number:"100%",
label:"Passion for Coding"
}

].map((stat,index)=>(


<div
key={index}

className="
glass
rounded-2xl
py-8
text-center
animate-fade-in
"

style={{
animationDelay:`${index * 150}ms`
}}

>


<h3 className="
text-4xl
font-bold
text-primary
">

{stat.number}

</h3>


<p className="
mt-2
text-muted-foreground
">

{stat.label}

</p>


</div>


))


}


</div>



</div>


</section>

)

}