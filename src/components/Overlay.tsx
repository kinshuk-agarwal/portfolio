"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Section 1: 0% to 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]); // parallax up

    // Section 2: 25% to 55%
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.55], [100, -100]); // parallax up

    // Section 3: 60% to 90%
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.85, 0.95], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.95], [100, -100]); // parallax up

    return (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">

            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center px-6"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                    Kinshuk Agarwal.
                </h1>
                <p className="text-xl md:text-3xl text-neutral-300 font-light mb-2">
                    AI & Backend Engineer.
                </p>
                <p className="text-md md:text-xl text-neutral-400 font-light max-w-2xl">
                    Final-year B.E. Electronics & Instrumentation student at BITS Pilani.
                </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-start justify-center px-10 md:px-32"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white max-w-3xl">
                    I build intelligent systems.
                </h2>
                <p className="text-lg md:text-2xl text-neutral-400 mt-4 max-w-2xl">
                    Scalable AI infrastructure, data pipelines, and backend architectures engineered for real-world impact.
                </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-end justify-center text-right px-10 md:px-32"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white max-w-2xl">
                    Bridging intelligence & engineering.
                </h2>
                <p className="text-lg md:text-2xl text-neutral-400 mt-4 max-w-xl">
                    Where large language models meet production-grade systems.
                </p>
            </motion.div>

        </div>
    );
}
