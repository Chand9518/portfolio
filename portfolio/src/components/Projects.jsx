export default function Projects(){

return(

<section id="projects" className="py-32 bg-slate-950">

<h2 className="text-3xl text-center font-bold text-cyan-400 mb-16">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

<div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-xl font-semibold">
Headless AEM CMS
</h3>

<p className="text-gray-400 mt-3">
Implemented headless architecture delivering content across
web and apps.
</p>

</div>

<div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-xl font-semibold">
Algolia Search Integration
</h3>

<p className="text-gray-400 mt-3">
Fast enterprise search integration with AEM Cloud.
</p>

</div>

<div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-xl font-semibold">
React + AEM Components
</h3>

<p className="text-gray-400 mt-3">
React based frontend integrated with AEM backend.
</p>

</div>

</div>

</section>

)

}