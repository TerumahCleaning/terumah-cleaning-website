export default function CleaningPlans() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">Structured Cleaning Plans</h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {[
                        { label: "Daily Precision", title: "Three Times per Week", desc: "Perfect for high-traffic corporate offices." },
                        { label: "Standard Care", title: "Weekly", desc: "Ideal for boutique studios and smaller teams." },
                        { label: "Periodic Intensive", title: "Bi-Monthly Deep Cleaning", desc: "Ensuring long-term hygiene and aesthetics." }
                    ].map((plan, i) => (
                        <div key={i} className="flex-1 text-center group flex flex-col items-center">
                            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{plan.label}</div>
                            <h4 className="text-xl font-bold mb-2">{plan.title}</h4>
                            <p className="text-slate-500 text-sm">{plan.desc}</p>
                            {i < 2 && <div className="hidden md:block w-px h-16 bg-accent-gold/30 mt-8"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
