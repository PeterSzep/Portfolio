import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const frontedSkills = ["React", "JavaScript", "TailWindCSS", "HTML", "CSS"];
  const backendSkills = [
    "Python",
    "Java",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
  ];
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
            <p className="text-gray-300 leading-relaxed text-lg mb-6 text-left md:text-justify hyphens-auto">
              Computer Science student based in Slovakia, currently studying at
              the{" "}
              <span className="text-blue-400 font-medium">
                Technical University of Košice
              </span>
              . Passionate about technology, problem-solving, and continuous
              learning. I enjoy exploring how software can shape and improve
              everyday life.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mb-6 text-left md:text-justify hyphens-auto">
              My focus is on writing clean and efficient code, improving my
              programming skills, and mastering modern tools and frameworks. I
              enjoy taking on challenges that allow me to grow as a developer —
              whether through personal projects, coursework, or collaboration
              with others.
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
                    <li>
                      Enhanced website functionality and front-end user
                      experience (UX) to streamline the customer journey.
                    </li>
                    <li>
                      Collaborated on improving product data structure and user
                      experience to support business goals.
                    </li>
                    <li>
                      Maintained and updated the product catalog using CSV-based
                      imports, ensuring data accuracy for products, pricing, and
                      images.
                    </li>
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
                    <li>
                      Executed the installation and configuration of Windows and
                      Linux environments, ensuring optimal system setup and
                      security.
                    </li>
                    <li>
                      Successfully delivered programming projects and resolved
                      technical issues, applying core software development
                      principles, including C# and object-oriented programming,
                      contributing to team objectives.
                    </li>
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
