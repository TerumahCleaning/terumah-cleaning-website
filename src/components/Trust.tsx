export default function Trust() {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                <svg className="h-full w-full fill-white" viewBox="0 0 100 100">
                    <path d="M0 100 Q 50 0 100 100"></path>
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Trusted by Corporate Clients</h2>
                    <p className="text-xl text-white/80 mb-10">Professional cleaning services for offices up to 1,000 m² across the Randstad region.</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            "Transparent agreements",
                            "Clear scope of services",
                            "VAT Registered (NL)",
                            "Fully documented proposals"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="text-accent-gold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-verified"><path d="M4 21.05A8.15 8.15 0 0 1 12 13a8.15 8.15 0 0 1 8 8.05" /><path d="m10 16 1.5 1.5L16 13" /><path d="M12 3a4 4 0 0 1 4 4c0 2.2-2.3 3.5-4 5.5-1.7-2-4-3.3-4-5.5a4 4 0 0 1 4-4Z" /></svg>
                                </div>
                                <span className="font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20">
                    <div className="text-5xl font-black mb-2">100%</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-6">Corporate Compliance</div>
                    <p className="text-white/70 italic leading-relaxed">
                        "Our commitment is to your business identity. A clean office isn't just about hygiene; it's about the standard you set for your clients and employees."
                    </p>
                </div>
            </div>
        </section>
    );
}
