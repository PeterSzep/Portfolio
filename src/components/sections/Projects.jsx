import RevealOnScroll from "./RevealOnScroll";
import Project from "../Project";

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
            <Project
              name={"MotorMinder"}
              description={
                "Android app for managing vehicle information, including expenses, mileage, and maintenance schedules. Implemented local data storage with SQLite, notification system for service reminders, and a user-friendly XML interface."
              }
              technologies={["Java", "SQLite", "XML"]}
              link={"https://github.com/PeterSzep/MotorMinder"}
            />

            <Project
            name={"Gym Companion App"}
            description={"Full-stack web application for gym goers. It maps workouts to a relational database using a Spring Boot API and a React interface. Features include real-time logging, a get-or-create exercise library, and a scrollable session deep-dive, ensuring your training data is as organized as your programming."}
            technologies={["React", "TailWindCSS", "Spring Boot", "PostgreSQL"]}
            link={"https://github.com/PeterSzep?tab=repositories"}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
