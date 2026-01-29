
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import leetcodolio from '../assets/leetcodolio.png';
import image1 from '../assets/image1.png';
import image from '../assets/image.png';

import { GitHubCalendar } from 'react-github-calendar';
const ProjectSection = () => {
    const projects = [
        {
            id: 0,
            title: "Gaming Hub",
            description: "Modern gaming landing page featuring stunning 3D visuals, smooth animations, interactive hero sections, and immersive design elements.",
            image: image1,
            tags: ["HTML5", "CSS3", "JavaScript", "3D Animation"],
            demoUrl: "https://rishabhdev0.github.io/gamingpwebsite/",
            githubUrl: "https://github.com/rishabhdev0/gamingpwebsite",
        },
        {
            id: 1,
            title: "Travio",
            description: "Travel booking platform with destination galleries, search functionality, interactive maps, and fully responsive layout for seamless browsing.",
            image: image,
            tags: ["HTML5", "CSS3", "JavaScript", "Responsive" , 'Node.js'],
            demoUrl: "#",
            githubUrl: "https://github.com/rishabhdev0/Travio",
        },{
            id: 1,
            title: "LeetCodolio",
            description: "Automatically builds a portfolio from your LeetCode stats.",
            image: leetcodolio,
            tags: ["React.js", "Chart.js", "WebScrapping", 'Node.js'],
            demoUrl: "https://leetcodolio.RishabhPandey.app",
            githubUrl: "https://github.com/rishabhdev0/LeetCodolio-Frontend",
        },
    ];
 
    return (
        <section id="projects" className="py-20 bg-neo-white border-b-3 border-black">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-display font-black mb-16 text-center uppercase">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="neo-card flex flex-col h-full hover:-translate-y-2 hover:shadow-neo-lg transition-all duration-300 bg-white"
                        >
                            <div className="h-48 border-b-3 border-black -mx-6 -mt-6 mb-6 overflow-hidden group relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 uppercase">{project.title}</h3>
                            <p className="mb-6 font-medium flex-grow text-gray-700">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold border-2 border-black px-2 py-1 bg-neo-yellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors"
                                >
                                    <Github size={18} /> Code
                                </a>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 flex items-center justify-center gap-2 bg-neo-main text-white py-2 font-bold border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${project.demoUrl === '#' ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                                >
                                    {project.videoSrc ? <Play size={18} /> : <ExternalLink size={18} />}
                                    {project.videoSrc ? 'Watch' : 'Demo'}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            <div className="flex justify-center py-10">
                      <GitHubCalendar colorScheme='light'  username="rishabhdev0" />
                    </div>
            </div>
        </section>
    ); 
};

export default ProjectSection;
