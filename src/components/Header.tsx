import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { IMAGES } from "../constants/images";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <a href="/" onClick={closeMobileMenu}>
                        <img
                            src={IMAGES.logo}
                            alt="Terumah Logo"
                            className="h-20 w-auto"
                            referrerPolicy="no-referrer"
                        />
                    </a>
                </div>
                
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    <a href="/#services" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">Services</a>
                    <a href="/#about" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">About</a>
                    <a href="/consulting" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">Consulting</a>
                    <a href="/#contact" className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">Contact</a>
                </nav>
                <div className="hidden md:block">
                    <motion.a
                        href="/#contact"
                        className="bg-primary text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-widest inline-block shadow-lg shadow-primary/20"
                        whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary-dark, #b5952f)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Request Quote
                    </motion.a>
                </div>

                {/* Mobile Toggle Button */}
                <button 
                    className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-primary/10 bg-white absolute w-full left-0 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col px-6 py-8 space-y-6">
                            <a href="/" onClick={closeMobileMenu} className="text-xl font-semibold uppercase tracking-widest hover:text-primary transition-colors">Home</a>
                            <a href="/residential" onClick={closeMobileMenu} className="text-xl font-semibold uppercase tracking-widest hover:text-primary transition-colors">Residential</a>
                            <a href="/office" onClick={closeMobileMenu} className="text-xl font-semibold uppercase tracking-widest hover:text-primary transition-colors">Office</a>
                            <a href="/consulting" onClick={closeMobileMenu} className="text-xl font-semibold uppercase tracking-widest hover:text-primary transition-colors">Consulting</a>
                            
                            <div className="pt-6 mt-2 border-t border-gray-100">
                                <a 
                                    href="/#contact"
                                    onClick={closeMobileMenu}
                                    className="bg-primary text-white text-center px-6 py-4 rounded font-bold uppercase tracking-widest block shadow-lg shadow-primary/20 w-full"
                                >
                                    Request Quote
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
