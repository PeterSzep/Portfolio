import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const frontedSkills = ["React", "JavaScript", "TailWindCSS", "HTML"];
  const backendSkills = ["Python", "Java", "MySQL", "AWS"];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-white/5 mb-8">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontedSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-4 text-left">
                <li>
                  <strong>Computer Science</strong> - Technical University of
                  Košice
                  <span className="text-sm text-gray-400 ml-6">
                    (2024 - Present)
                  </span>
                </li>
                <li>
                  <strong>Computer Science</strong> - Secondary School of
                  Electrical Engineering in Košice
                  <p className="text-sm text-gray-400 ml-6">(2020 - 2024)</p>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5">
              <h3 className="text-xl font-bold mb-4">👩🏻‍💻 Work Experience</h3>
              <div className="space-y-6 text-gray-300 text-left">
                <div>
                  <h4 className="font-semibold text-blue-400">
                    Online Store Administrator
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">
                    BIBIONE s.r.o (Feb 2025 - May 2025)
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Improved website functionality and user experience.</li>
                    <li>Managed the product catalog and digital assets.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400">
                    Student Intern
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Syntax Systems (May 2023 - Jun 2023)
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Installed and configured Linux and Windows OS.</li>
                    <li>Performed basic system administration in terminal.</li>
                    <li>Completed assigned programming projects.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
