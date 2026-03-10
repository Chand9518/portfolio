export default function Projects(){

return(

<section id="projects" className="py-32 bg-slate-950">

<h2 className="text-3xl text-center font-bold text-cyan-400 mb-16">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

<div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-xl font-semibold">
DXP - Sobeys
</h3>

<p className="text-gray-400 mt-3">
 Integrated multiple third-party APIs using GraphQL to enable seamless data retrieval and improved application performance.
</p>
<p className="text-gray-400 mt-3">
 Implemented Algolia Search integration to deliver fast, relevant, and scalable search experiences across the application.
</p>
<p className="text-gray-400 mt-3">
 Developed and executed comprehensive Unit Test cases to ensure code quality, reliability, and regression-free deployments.
</p>

</div>

<div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-xl font-semibold">
Hitachi Vantara - COE
</h3>

<p className="text-gray-400 mt-3">
 Led the successful migration of AEM 6.5 to AEM as a Cloud Service, ensuring seamless transition and system integrity
</p>
<p className="text-gray-400 mt-3">
 Integrated Single Sign-On (SSO) authentication with AEM as a Cloud Service, enhancing security and user experience. 
</p>
<p className="text-gray-400 mt-3">
 Engineered and maintained AEM custom components, functionalities, including models, servlets, services, and configurations for dynamic content 
management.
</p>

</div>

<div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-xl font-semibold">
Redtag
</h3>

<p className="text-gray-400 mt-3">
 Developed scalable AEM backend APIs for the RedTag mobile app, delivering travel deals (flights, vacations, hotels, cars) via Solr and JCR.
</p>
<p className="text-gray-400 mt-3">
  Built headless GraphQL APIs using AEM Content Fragments for seamless content delivery.
</p>
<p className="text-gray-400 mt-3">
 Deprecated legacy packages (e.g., Apache Cocoon) and implemented compliant alternatives to ensure AEM Cloud Service compatibility
</p>
<p className="text-gray-400 mt-3">
  Developed new AEM components and enhanced legacy components to support evolving UI/UX requirements.
</p>
</div>

</div>

</section>

)

}
