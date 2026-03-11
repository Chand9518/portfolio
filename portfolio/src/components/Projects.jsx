import { useState } from "react";
import "../assets/css/projects.css";

export default function Projects() {

  const [flipped, setFlipped] = useState(null);

  const projects = [
    {
      title: "DXP - Sobeys",
      desc: [
        "Integrated GraphQL APIs for seamless data retrieval.",
        "Implemented Algolia Search integration.",
        "Developed unit tests for reliability."
      ],
      link: "https://www.sobeys.com/"
    },
    {
      title: "Hitachi Vantara - COE",
      desc: [
        "Migrated AEM 6.5 to AEM Cloud Service.",
        "Integrated SSO authentication.",
        "Developed AEM components, models, and services."
      ],
      link: "https://coe.hitachivantara.com/"
    },
    {
      title: "Redtag",
      desc: [
        "Developed AEM backend APIs using Solr & JCR.",
        "Built GraphQL APIs using Content Fragments.",
        "Enhanced legacy components and AEM Cloud compatibility."
      ],
      link: "https://www.redtag.ca/"
    }
  ];

  return (

    <section id="projects" className="py-32 bg-slate-950">

      <h2 className="text-3xl text-center font-bold text-cyan-400 mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="flip-card cursor-pointer"
            onClick={() =>
              setFlipped(flipped === index ? null : index)
            }
          >

            <div className={`flip-inner ${flipped === index ? "flipped" : ""}`}>

              <div className="flip-front flex items-center justify-center">

                <h3 className="text-xl font-semibold text-cyan-300 text-center">
                  {project.title}
                </h3>

              </div>

              <div className="flip-back flex flex-col justify-between">

                <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2 mt-3">
                  {project.desc.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Visit Website
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}