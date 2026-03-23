import { motion } from "motion/react";
import { IMAGES } from "../constants/images";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <a href="/">
                        <img
                            src={IMAGES.logo}
                            alt="Terumah Logo"
                            className="h-20 w-auto"
                            referrerPolicy="no-referrer"
                        />
                    </a>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <a href="/#services" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">Services</a>
                    <a href="/#about" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">About</a>
                    <a href="/consulting" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">Consulting</a>
                    <a href="/#contact" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">Contact</a>
                </nav>
                <motion.a
                    href="/#contact"
                    className="bg-primary text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-widest inline-block shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary-dark, #b5952f)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Request Quote
                </motion.a>
            </div>
        </header>
    );
}
