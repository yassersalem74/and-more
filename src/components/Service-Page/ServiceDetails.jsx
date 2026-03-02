import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "./../../data/ServiceDetails";

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === id);

  const [activeProject, setActiveProject] = useState(null);

  // 🎯 Ref for scroll
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!service) return <div className="text-white">Not Found</div>;

  return (
    <>
  

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
        
        {/* 🌈 Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#5A3FC0] to-[#A36BD2]" />

        {/* ✨ Glow */}
        <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] bg-[#CAABE5]/30 blur-[150px]" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-[#969EDF]/30 blur-[150px]" />

        {/* 🔥 Big Watermark */}
        <h1 className="absolute text-[80px] md:text-[140px] lg:text-[200px] font-extrabold text-white/5">
          {service.title.split(" ")[0]}
        </h1>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          
          <p className="uppercase tracking-[4px] text-[#CAABE5]/80 mb-4">
            Service
          </p>

          <h1 className="text-[32px] md:text-[50px] lg:text-[64px] font-bold">
            {service.title}
          </h1>

          <div className="mx-auto mt-6 w-24 h-[3px] bg-gradient-to-r from-[#CAABE5] to-[#969EDF]" />

          <p className="mt-8 text-[16px] md:text-[20px] text-white/85">
            {service.desc}
          </p>

          {/* 🎯 SCROLL BUTTON */}
          <button
            onClick={scrollToProjects}
            className="
              mt-10 px-8 py-4
              rounded-xl
              bg-[#A36BD2]
              text-white font-semibold
              shadow-[0_10px_30px_rgba(163,107,210,0.6)]
              hover:scale-110 hover:shadow-[0_15px_40px_rgba(163,107,210,0.9)]
              active:scale-95
              transition
              cursor-pointer
            "
          >
            View Projects ↓
          </button>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        ref={projectsRef}
        className="relative py-16 lg:py-24 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A3FC0] to-[#2C3DBF]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-12">
          
              {/* ================= BACK BUTTON ================= */}
      <button
        onClick={() => navigate(-1)}
        className="
        
          px-4 py-2
          rounded-xl
          bg-white/10 backdrop-blur-lg
          border border-white/20
          text-white font-medium
          shadow-lg
          hover:bg-[#A36BD2] hover:scale-105
          transition
          cursor-pointer
        "
      >
        ← Back
      </button>
          <h2 className="text-center text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#CAABE5] mb-12">
           {service.title} Projects
          </h2>


          <div className="grid md:grid-cols-2 gap-8">
            {service.projects.map((project, i) => (
              <div
                key={i}
                onClick={() => setActiveProject(project.url)}
                className="
                  group cursor-pointer
                  rounded-2xl overflow-hidden
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  transition duration-500
                  hover:-translate-y-3
                "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-[240px] object-cover transition group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-[20px] font-semibold group-hover:text-[#CAABE5] transition">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl">
          
          <button
            onClick={() => setActiveProject(null)}
            className="
              absolute top-6 right-6
              w-10 h-10 rounded-full
              bg-white/10 text-white text-xl
              flex items-center justify-center
              hover:bg-red-500 transition
            "
          >
            ✕
          </button>

          <div className="w-[90%] h-[85%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src={activeProject}
              title="project"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}