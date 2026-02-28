"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Property Rental Management System",
            category: "Full-Stack Web Application",
            description: "JWT-secured rental workflow platform with dashboards, audit logging, and role-based access control.",
            github: "https://github.com/kinshuk-agarwal/Property-Rental-Management-System",
            techStack: ["JWT", "REST APIs", "Role-Based Access", "Audit Logging"]
        },
        {
            title: "SmartDocs AI",
            category: "AI / ML · Backend Systems",
            description: "Enterprise knowledge assistant enabling scalable RAG-based Q&A across 10,000+ documents with vector retrieval and clustering.",
            github: "https://github.com/kinshuk-agarwal/smartDocs",
            techStack: ["LangChain", "FAISS", "RAG", "Docker"]
        },
        {
            title: "Heart Disease Classification",
            category: "Machine Learning",
            description: "Predictive ML system using Logistic Regression and Random Forest, achieving 89% classification accuracy.",
            github: "https://github.com/kinshuk-agarwal/Heart-Disease-Classification",
            techStack: ["Scikit-Learn", "Random Forest", "GridSearchCV"]
        },
        {
            title: "Employee Screening Analyzer",
            category: "AI Automation Platform",
            description: "Automated resume and GitHub intelligence system improving shortlisting efficiency by 35%.",
            inDevelopment: true,
            techStack: ["NLP", "Resume Parsing", "GitHub API", "Scoring Systems"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-[#121212] py-24 px-6 md:px-16 lg:px-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="group relative z-10 inline-block text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter w-fit transition-all duration-300 ease-out hover:text-[#ea580c] hover:tracking-[0.01em]">
                    Selected Works
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                </h2>
                <p className="text-neutral-400 text-lg mb-16 max-w-2xl">
                    Systems I’ve designed, engineered, and deployed — from backend infrastructure to AI-powered applications.
                </p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-8 group/card transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[340px] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl hover:border-white/20"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.06)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 w-full flex-grow">
                                <p className="text-neutral-400 text-xs tracking-widest uppercase mb-4 opacity-60">
                                    {project.category}
                                </p>
                                <div className="mb-4">
                                    {project.inDevelopment && (
                                        <span className="block text-xs uppercase tracking-wide text-[#ea580c] opacity-80 mb-2">
                                            In Development
                                        </span>
                                    )}
                                    <h3 className="group/heading inline-flex text-3xl font-bold text-white relative transition-all duration-300 ease-out hover:text-[#ea580c] hover:tracking-[0.01em]">
                                        {project.title}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover/heading:w-full opacity-0 group-hover/heading:opacity-100" />
                                    </h3>
                                </div>
                                <p className="text-neutral-400 text-base max-w-sm mb-6">
                                    {project.description}
                                </p>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link relative inline-flex items-center text-sm text-white hover:text-[#ea580c] transition-colors duration-200 ease-out mb-8 z-20 w-fit"
                                    >
                                        View Code ↗
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover/link:w-full opacity-0 group-hover/link:opacity-100" />
                                    </a>
                                )}
                            </div>

                            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-neutral-300 hover:bg-white/10 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
