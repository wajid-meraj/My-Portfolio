export default function ProjectCard({ title, tech, link }) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 p-6 rounded-xl hover:scale-[1.02] transition-all duration-500 hover:border-blue-700 overflow-hidden">
      
      {/* Flickering Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-900/5 to-red-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
      
      {/* Skull Icon */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Title with Blood Effect */}
      <h3 className="font-semibold text-xl text-white mb-3 relative">
        <span className="relative z-10">
          {title}
        </span>
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-transparent transition-all duration-700"></span>
      </h3>
      
      {/* Tech Stack */}
      <p className="text-gray-400 text-sm mt-2 font-mono bg-gray-900/50 p-3 rounded-lg border border-gray-800">
        {tech}
      </p>
      
      {/* Horror Button */}
      <a 
        href={link} 
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-blue-900 to-black text-blue-100 hover:text-white px-4 py-2 rounded-lg border border-blue-900 hover:border-blue-700 transition-all duration-300 group/btn"
      >
        <span>Enter Project</span>
        <svg 
          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
      
      {/* Horror Glow on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
    </div>
  );
}