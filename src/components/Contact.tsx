export default function Contact() {
    return (
        <section className="bg-[#121212] pt-16 pb-28 md:pt-20 md:pb-32 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="group relative z-10 inline-block text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter w-fit transition-all duration-300 ease-out hover:text-[#ea580c] hover:tracking-[0.01em]">
                    Open to Opportunities
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                </h2>
                <div className="mb-16 flex flex-col items-center">
                    <p className="text-gray-400 text-sm mb-4">
                        Seeking full-time roles in
                    </p>
                    <div className="flex flex-col space-y-2 text-neutral-200 text-lg md:text-xl font-medium leading-relaxed text-center">
                        <span>Software Engineering</span>
                        <span>AI / ML Engineering</span>
                        <span>Data Engineering</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 w-full mt-4">
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
                        className="group relative text-white text-xl font-medium transition-colors duration-200 ease-out hover:text-[#ea580c] inline-flex items-center gap-1"
                    >
                        Email ↗
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1-d8How6kJ5diN74FvIRH8DAchLq7vl-N/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative text-white text-xl font-medium transition-colors duration-200 ease-out hover:text-[#ea580c] inline-flex items-center gap-1"
                    >
                        Resume ↗
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ea580c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                    </a>
                </div>
            </div>
        </section>
    );
}
