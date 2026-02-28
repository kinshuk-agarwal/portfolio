"use client";

import { motion, Variants } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            company: "Genpact",
            role: "Data Engineering Intern",
            period: "Jul 2025 – Dec 2025",
            location: "Bengaluru",
            summary: "Engineered enterprise-scale AI and data systems.",
            bullets: [
                "Built an Auto-ETL orchestration platform processing 10,000+ records across multi-stage pipelines.",
                "Designed PDF & OCR-based ingestion workflows for structured data extraction.",
                "Implemented Model Context Protocol (MCP) for structured LLM tool invocation.",
                "Developed a RAG Fusion semantic retrieval engine using FAISS.",
                "Contributed to scalable backend microservices and AI-driven workflow automation."
            ],
            techStack: ["Python", "FastAPI", "SQLAlchemy", "FAISS", "AsyncIO", "MCP"]
        },
        {
            company: "Indian Red Cross Society",
            role: "Data Analytics Intern",
            period: "May 2024 – Jul 2024",
            location: "Jaipur",
            summary: "Improved regional analytics through structured data automation.",
            bullets: [
                "Analyzed and structured 5,000+ operational records using SQL and advanced Excel functions.",
                "Enabled KPI tracking, compliance reporting, and performance benchmarking across regional programs.",
                "Built automated reporting dashboards and structured KPI monitoring systems.",
                "Reduced manual reporting effort and improved strategic decision-making visibility across departments."
            ],
            techStack: ["SQL", "Excel Automation", "KPI Systems", "Dashboarding"]
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
        <section className="bg-[#121212] py-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="group relative z-10 inline-block text-4xl md:text-5xl font-bold text-white mb-20 tracking-tighter w-fit transition-all duration-300 ease-out hover:text-[#ea580c] hover:tracking-[0.01em]">
                    Experience
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                </h2>

                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="p-8 md:p-10 relative overflow-hidden flex flex-col transition-all duration-300 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)] group/card"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="absolute top-0 right-0 p-8 text-neutral-500 text-sm hidden md:block">
                                {exp.period} | {exp.location}
                            </div>

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
                                <div className="lg:col-span-1">
                                    <h3 className="group/heading text-2xl font-semibold text-white relative w-fit transition-all duration-300 ease-out hover:text-[#ea580c] hover:tracking-[0.01em]">
                                        {exp.company}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover/heading:w-full opacity-0 group-hover/heading:opacity-100" />
                                    </h3>
                                    <p className="text-blue-400 mt-2 font-normal">{exp.role}</p>
                                    <p className="text-neutral-500 text-sm mt-3 md:hidden">
                                        {exp.period} | {exp.location}
                                    </p>
                                </div>

                                <div className="lg:col-span-3">
                                    <p className="text-neutral-300 text-lg mb-6">{exp.summary}</p>
                                    <ul className="space-y-3 text-neutral-400">
                                        {exp.bullets.map((bullet, j) => (
                                            <li key={j} className="flex flex-row items-start gap-3">
                                                <span className="text-blue-500 mt-1.5 opacity-50">▹</span>
                                                <span className="leading-relaxed">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-8">
                                        {exp.techStack.map((tech, j) => (
                                            <span
                                                key={j}
                                                className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-neutral-300 hover:bg-white/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
