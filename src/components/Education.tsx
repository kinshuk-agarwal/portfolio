"use client";

import { motion, Variants } from "framer-motion";

export default function Education() {
    const containerVariants: Variants = {
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
        <section className="bg-[#121212] py-24 px-6 md:px-16 lg:px-24 mb-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="group relative z-10 inline-block text-4xl md:text-5xl font-bold text-white mb-20 tracking-tighter w-fit transition-all duration-300 ease-out hover:text-[#ea580c] hover:tracking-[0.01em]">
                    Education
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                </h2>

                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="p-8 md:p-10 relative overflow-hidden flex flex-col transition-all duration-300 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)] group/card"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="absolute top-0 right-0 p-8 text-neutral-500 text-sm hidden md:block">
                            2022 – 2026 | Hyderabad
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-1">
                                <h3 className="group/heading text-2xl font-semibold text-white relative w-fit transition-all duration-300 ease-out hover:text-[#ea580c] hover:tracking-[0.01em]">
                                    BITS Pilani, Hyderabad Campus
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover/heading:w-full opacity-0 group-hover/heading:opacity-100" />
                                </h3>
                                <p className="text-neutral-500 text-sm mt-3 md:hidden">
                                    2022 – 2026 | Hyderabad
                                </p>
                            </div>

                            <div className="lg:col-span-3">
                                <p className="text-neutral-300 text-lg mb-4">B.E. Electronics & Instrumentation</p>
                                <div className="flex flex-row items-start gap-3">
                                    <span className="text-blue-500 mt-1.5 opacity-50">▹</span>
                                    <p className="text-neutral-400 mt-1">
                                        <span className="font-medium text-neutral-300 block mb-1">Relevant Coursework:</span>
                                        Differential Equations, Probability and Statistics, Computer Programming, Principles of Economics, Multivariate Calculus, Foundations of Data Structures and Algorithms, Analog and VLSI Design, Digital Design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
