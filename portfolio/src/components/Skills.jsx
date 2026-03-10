import { FaReact, FaJava, FaGitAlt } from "react-icons/fa"
import {  SiGraphql, SiJavascript } from "react-icons/si"
import { BiLogoAdobe } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
export default function Skills(){

const skills=[
{icon:<BiLogoAdobe size={40}/>,name:"AEM"},
{icon:<FaJava size={40}/>,name:"Java"},
{icon:<FaReact size={40}/>,name:"React"},
{icon:<SiGraphql size={40}/>,name:"GraphQL"},
{icon:<SiJavascript size={40}/>,name:"JavaScript"},
{icon:<FaGitAlt size={40}/>,name:"Git"},
{icon:<TbBrandMysql size={40}/>,name:"MySQL"}
]

return(

<section id="skills" className="py-32 bg-slate-950">

<h2 className="text-3xl text-center font-bold mb-16 text-cyan-400">
Skills
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">

{skills.map((skill,i)=>(

<div
key={i}
className="bg-white/5 p-6 rounded-xl text-center hover:scale-110 transition duration-300"
>

<div className="flex justify-center text-cyan-400">
{skill.icon}
</div>

<p className="mt-4">{skill.name}</p>

</div>

))}

</div>

</section>

)

}