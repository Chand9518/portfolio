import { useState } from "react"

export default function Navbar(){

const [menu,setMenu]=useState(false)

return(

<nav className="fixed w-full backdrop-blur-md bg-white/10 z-50">

<div className="max-w-6xl mx-auto flex justify-between items-center p-4">

<h1 className="text-xl font-bold text-cyan-400">
Chandan Mishra
</h1>

<ul className="hidden md:flex gap-8 text-gray-300">

<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>

</ul>

<button
className="md:hidden"
onClick={()=>setMenu(!menu)}
>
☰
</button>

</div>

</nav>

)

}