export default function Contact() {
    return (
        <section className="bg-[#121212] py-32 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="group relative z-10 inline-block text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter w-fit transition-all duration-300 ease-out hover:text-[#ea580c] hover:tracking-[0.01em]">
                    Open to Opportunities
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                </h2>
                <p className="text-neutral-400 text-lg mb-12 max-w-xl leading-relaxed">
                    Actively seeking full-time roles in:
                    <br className="hidden md:block" />
                    <span className="text-neutral-300">
                        Software Development Engineering, Full-Stack Engineering, AI / ML Engineering, Data Engineering.
                    </span>
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
                    <a
                        href="https://www.linkedin.com/in/kinshukagarwal36"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative text-white text-xl font-medium transition-colors duration-200 ease-out hover:text-[#ea580c] inline-flex items-center gap-1"
                    >
                        LinkedIn ↗
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=kinshukagarwal36@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl font-medium transition duration-200 ease-out hover:text-[#EA580C]"
                    >
                        Gmail ↗
                    </a>
                    <a
                        href="tel:+917011013605"
                        className="group relative text-white text-xl font-medium transition-colors duration-200 ease-out hover:text-[#ea580c] inline-flex items-center gap-1"
                    >
                        +91 70110 13605 ↗
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                    </a>
                </div>
            </div>
        </section>
    );
}
