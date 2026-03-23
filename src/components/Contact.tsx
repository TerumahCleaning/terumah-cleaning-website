import { ChevronDown, MapPin, Mail, Smartphone, Map } from "lucide-react";

import { motion } from "motion/react";

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-16">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold mb-10">Request a Professional Cleaning Proposal</h2>
                        <form className="grid sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase text-slate-500">Full Name</label>
                                <input className="bg-white border-slate-200 p-4 rounded focus:ring-primary focus:border-primary outline-none transition-all" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase text-slate-500">Company Name</label>
                                <input className="bg-white border-slate-200 p-4 rounded focus:ring-primary focus:border-primary outline-none transition-all" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase text-slate-500">Email Address</label>
                                <input className="bg-white border-slate-200 p-4 rounded focus:ring-primary focus:border-primary outline-none transition-all" type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase text-slate-500">Phone Number</label>
                                <input className="bg-white border-slate-200 p-4 rounded focus:ring-primary focus:border-primary outline-none transition-all" type="tel" />
                            </div>
                            <div className="flex flex-col gap-2 sm:col-span-2">
                                <label className="text-xs font-bold uppercase text-slate-500">Office Size (m²)</label>
                                <div className="relative">
                                    <select className="w-full bg-white border border-slate-200 p-4 rounded appearance-none focus:ring-primary focus:border-primary outline-none transition-all">
                                        <option>Less than 100 m²</option>
                                        <option>100 - 500 m²</option>
                                        <option>500 - 1,000 m²</option>
                                        <option>Custom size</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 sm:col-span-2">
                                <label className="text-xs font-bold uppercase text-slate-500">Message</label>
                                <textarea className="bg-white border-slate-200 p-4 rounded focus:ring-primary focus:border-primary outline-none transition-all" rows={4}></textarea>
                            </div>
                            <div className="sm:col-span-2">
                                <motion.a
                                    href="https://api.whatsapp.com/send/?phone=31641639783"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center w-full bg-primary text-white py-4 font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                    whileHover={{ scale: 1.02, backgroundColor: "var(--color-primary-dark, #b5952f)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Submit Request
                                </motion.a>
                            </div>
                        </form>
                    </div>
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Contact Details</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/5 rounded flex items-center justify-center text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold">Location</p>
                                        <p className="text-slate-500">Leiden, The Netherlands</p>
                                        <div className="mt-4 w-full h-32 rounded bg-slate-100 overflow-hidden flex items-center justify-center text-slate-400">
                                            <Map size={32} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/5 rounded flex items-center justify-center text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold">Email</p>
                                        <a href="mailto:terumahcleaningservices@gmail.com" className="text-slate-500 hover:text-primary transition-colors">terumahcleaningservices@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/5 rounded flex items-center justify-center text-primary">
                                        <Smartphone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold">Phone</p>
                                        <a href="tel:+31641639783" className="text-slate-500 hover:text-primary transition-colors">+31 6 41639783</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
