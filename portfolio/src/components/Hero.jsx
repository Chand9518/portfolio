import { motion } from "framer-motion"
import profile from "../assets/profile.png"

export default function Hero(){

return(

<section className="h-screen flex items-center">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
<motion.div
initial={{opacity:0,x:100}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
>

<img
src={profile}
className="w-80 rounded-full shadow-2xl mx-auto"
/>

</motion.div>

<motion.div
initial={{opacity:0,x:-100}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
>

<h1 className="text-5xl font-bold leading-tight">

Hi 👋  
I'm <span className="text-cyan-400">Chandan Mishra</span>

</h1>

<h2 className="text-2xl mt-4 text-gray-300">
AEM Developer
</h2>

<p className="mt-4 text-gray-400 max-w-md">

I build scalable digital experiences using Adobe Experience Manager, Java, OSGi, Sling Model, MySQL, React, GraphQL, and modern technologies.

</p>

<button className="mt-6 px-6 py-3 bg-cyan-500 rounded-lg hover:scale-105 transition">

Hire Me

</button>

</motion.div>



</div>

</section>

)

}