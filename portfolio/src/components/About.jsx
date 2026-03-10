import { motion } from "framer-motion"

export default function About(){

return(

<section id="about" className="py-32">

<div className="max-w-5xl mx-auto">

<motion.div
initial={{opacity:0,y:100}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-lg"
>

<h2 className="text-3xl font-bold mb-6 text-cyan-400">
About Me
</h2>

<p className="text-gray-300 leading-relaxed">

I am an experienced AEM Developer with expertise in building
custom AEM components, integrating third-party APIs using GraphQL,
and developing scalable digital platforms.

I have worked on **AEM Cloud migration, headless CMS architecture,
Algolia search integration, and React integration with AEM.**

</p>

</motion.div>

</div>

</section>

)

}