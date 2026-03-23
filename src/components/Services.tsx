import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { IMAGES } from "../constants/images";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <section id="services" className="py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Our Services</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Routine Cleaning */}
                    <Link to="/residential" className="block w-full h-full focus:outline-none">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img
                                    src={IMAGES.routine}
                                    alt="Residential Cleaning"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold mb-4 text-primary">Residential Cleaning</h3>
                                <p className="text-slate-500 mb-6 italic">Excellence and care for your home.</p>
                                <ul className="grid grid-cols-2 gap-4">
                                    {["Bedrooms", "Living Rooms", "Bathrooms", "Kitchen", "Outdoor Areas", "Dust & Waste"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium">
                                            <CheckCircle2 size={18} className="text-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                                    View Details <span>→</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Deep Cleaning */}
                    <Link to="/office" className="block w-full h-full focus:outline-none">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img
                                    src={IMAGES.deep}
                                    alt="Office Cleaning"
                                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold mb-4 text-primary">Office Cleaning</h3>
                                <p className="text-slate-500 mb-6 italic">Impeccable and productive corporate environments.</p>
                                <ul className="grid grid-cols-2 gap-4">
                                    {["Workstations", "Reception", "Meeting Rooms", "Pantries", "Bathrooms", "Waste"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium">
                                            <CheckCircle2 size={18} className="text-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                                    View Details <span>→</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
