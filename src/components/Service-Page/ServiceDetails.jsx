import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "./../../data/ServiceDetails";

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === id);

  const [activeProject, setActiveProject] = useState(null);
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!service) return <div className="text-white">Not Found</div>;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#5A3FC0] to-[#A36BD2]" />

        {/* Glow */}
        <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] bg-[#CAABE5]/30 blur-[150px]" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-[#969EDF]/30 blur-[150px]" />

        {/* Watermark */}
        <h1 className="absolute text-[100px] lg:text-[180px] font-extrabold text-white/5">
          {service.title.split(" ")[0]}
        </h1>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <p className="uppercase tracking-[4px] text-[#CAABE5]/80 mb-4">
            Service
          </p>

          <h1 className="text-[32px] md:text-[50px] lg:text-[64px] font-bold">
            {service.title}
          </h1>

          <div className="mx-auto mt-6 w-24 h-[3px] bg-gradient-to-r from-[#CAABE5] to-[#969EDF]" />

          <p className="mt-8 text-[18px] text-white/85">{service.desc}</p>

          <button
            onClick={scrollToProjects}
            className="    mt-10 px-8 py-4
              rounded-xl
              bg-[#A36BD2]
              text-white font-semibold
              shadow-[0_10px_30px_rgba(163,107,210,0.6)]
              hover:scale-110 hover:shadow-[0_15px_40px_rgba(163,107,210,0.9)]
              active:scale-95
              transition
              cursor-pointer"
          >
            View Projects ↓
          </button>
        </div>
      </section>

      {/* ================= DETAILS SECTION ================= */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A3FC0] to-[#2C3DBF]" />

        {/* Glow */}
        <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-[#CAABE5]/20 blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-12">
          <div
            className="
                          group relative
              rounded-3xl
              p-8 lg:p-12
              bg-white/5 backdrop-blur-xl
              border border-white/10
              transition duration-500
              hover:border-[#CAABE5]r
            "
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#A36BD2]/30 to-transparent rounded-3xl" />

            <h2 className="text-[26px] lg:text-[36px] font-bold text-[#CAABE5] mb-6">
              Deep Dive Into {service.title}
            </h2>

            <p className="text-[16px] lg:text-[20px] leading-[30px] text-white/85 whitespace-pre-line">
              {service.details}
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        ref={projectsRef}
        className="relative py-16 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A3FC0] to-[#2C3DBF]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-12">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className=" mt-10 px-4 py-2
              rounded-xl
              bg-[#A36BD2]
              text-white font-semibold
              shadow-[0_10px_30px_rgba(163,107,210,0.6)]
              hover:scale-110 hover:shadow-[0_15px_40px_rgba(163,107,210,0.9)]
              active:scale-95
              transition
              cursor-pointer"
          >
            Go Back
          </button>

          <h2 className="text-center text-[32px] font-bold text-[#CAABE5] mb-12">
            {service.title} Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {service.projects.map((project, i) => (
              <div
                key={i}
                onClick={() => setActiveProject(project.url)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 hover:-translate-y-2 transition"
              >
                <img
                  src={project.image}
                  className="w-full h-[240px] object-cover group-hover:scale-110 transition"
                />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold group-hover:text-[#CAABE5]">
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full hover:bg-red-500"
          >
            ✕
          </button>

          <div className="w-[90%] h-[85%] rounded-2xl overflow-hidden">
            <iframe src={activeProject} className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
}
