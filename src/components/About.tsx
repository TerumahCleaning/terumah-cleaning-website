import { motion } from "motion/react";
import { ShieldCheck, Calendar, CreditCard } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8 relative inline-block">
                            About Terumah
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-gold"></span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-12">
                            Terumah Cleaning Services is committed to delivering high standards of cleanliness, professionalism and reliability. We ensure your workspace remains organized, representative and aligned with your company’s image.
                        </p>

                        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                            <video
                                src="/intro_video.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                    <div className="grid gap-8">
                        {[
                            { icon: ShieldCheck, title: "Professional Standards", desc: "Maintaining elite cleanliness levels for corporate environments with meticulous attention to detail." },
                            { icon: Calendar, title: "Structured Service Schedule", desc: "Customized timelines that fit your business operations seamlessly without disruption." },
                            { icon: CreditCard, title: "Reliable & Transparent Pricing", desc: "Clear, honest, and competitive pricing models designed specifically for Dutch businesses." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 p-6 rounded-xl border border-slate-100 hover:border-primary/20 transition-colors"
                            >
                                <div className="flex-shrink-0 w-14 h-14 bg-primary/5 rounded flex items-center justify-center text-primary">
                                    <item.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-slate-500">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
