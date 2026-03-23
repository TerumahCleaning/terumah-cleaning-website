import { motion } from "motion/react";
import { IMAGES } from "../constants/images";

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-[#1F2937]">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                src="/bg_video.mp4"
            />
            
            {/* Terumah logo watermark softly blended */}
            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 mix-blend-screen pointer-events-none scale-[2] lg:scale-[1.5] blur-[2px]">
               <img src={IMAGES.logo} alt="Watermark" className="w-full max-w-4xl opacity-50 grayscale" />
            </div>

            {/* Dark gradient overlay (transparent top -> dark bottom/left) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-0"></div>

            <div className="max-w-7xl mx-auto px-6 py-32 lg:py-48 relative z-10 w-full flex items-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl pt-10"
                >
                    <motion.h1 
                        variants={item}
                        className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[1.05] text-white mb-6 tracking-tighter drop-shadow-lg"
                    >
                        Premium Cleaning <br />
                        for Homes & Businesses
                    </motion.h1>
                    
                    <motion.h2 
                        variants={item}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#B3261E] mb-8 drop-shadow-md"
                    >
                        Reliable. Professional. Precise.
                    </motion.h2>

                    <motion.p 
                        variants={item}
                        className="text-xl lg:text-2xl text-gray-200 font-medium mb-16 max-w-2xl leading-[1.7] drop-shadow-md"
                    >
                        High-standard cleaning services for modern homes and businesses across the Netherlands.
                    </motion.p>
                    
                    <motion.div variants={item}>
                        <motion.a
                            href="/#contact"
                            className="inline-flex items-center justify-center bg-[#B3261E] text-white px-12 py-6 rounded-xl text-lg font-bold uppercase tracking-widest shadow-2xl shadow-[#B3261E]/40"
                            whileHover={{ scale: 1.05, backgroundColor: "#911f18" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get a Free Quote
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
