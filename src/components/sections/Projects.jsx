import RevealOnScroll from "./RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all bg-white/5">
              <h3 className="text-xl font-bold mb-2 text-white text-left">
                MotorMinder
              </h3>
              <p className="text-gray-400 mb-4 text-left">
                 Android app for managing vehicle information, including
                expenses, mileage, and maintenance schedules. Implemented local
                data storage with SQLite, notification system for service
                reminders, and a user-friendly XML interface.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Java", "SQLite", "XML"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-left">
                <a href="https://github.com/PeterSzep/MotorMinder" className="text-blue-400 hover:text-blue-300 text-sm font-medium" target="_blank">
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all bg-white/5">
              <h3 className="text-xl font-bold mb-2 text-white text-left">
                Gym Companion App
              </h3>
              <p className="text-gray-400 mb-4 text-left">
                Full-stack tracking suite for gym goers. It maps workouts to a relational database using a Spring Boot API and a React interface. Features include real-time logging, a "get-or-create" exercise library, and a scrollable session deep-dive, ensuring your training data is as organized as your programming.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TailWindCSS", "Spring Boot", "PostgreSQL"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-left">
                <a href="https://github.com/PeterSzep?tab=repositories" className="text-blue-400 hover:text-blue-300 text-sm font-medium" target="_blank">
                  View Project →
                </a>
              </div>
            </div>
          </div> 
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;