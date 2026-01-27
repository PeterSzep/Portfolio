const Project = ({ name, description, technologies, link }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all bg-white/5">
      <h3 className="text-xl font-bold mb-2 text-white text-left">{name}</h3>
      <p className="text-gray-400 mb-4 text-left">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 text-left">
        <a
          href={link}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          target="_blank"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default Project;
