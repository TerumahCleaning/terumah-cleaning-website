import { useEffect } from "react";
import { 
  CheckCircle2, 
  Briefcase, 
  FileText, 
  Landmark, 
  ArrowRight,
  ShieldCheck,
  LineChart,
  Lightbulb,
  Globe2,
  Building2,
  Phone
} from "lucide-react";
import { motion } from "motion/react";

export default function Consulting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=31641639783";

  return (
    <div className="pt-24 min-h-screen bg-[#F5F5F5] font-display text-[#1F2937]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-[#F5F5F5] py-24 border-b border-gray-200">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#B3261E]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl lg:text-7xl font-black text-[#1F2937] mb-6 uppercase tracking-tight leading-[1.05]">
                    Start Your Cleaning <br />
                    <span className="text-[#B3261E]">Business in the</span> <br />
                    Netherlands
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium max-w-lg">
                    Guidance to open your KVK, understand taxes, and start working legally as a self-employed cleaner.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="#contact"
                        className="bg-[#B3261E] text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-[#911f18] transition-all shadow-xl shadow-[#B3261E]/20 text-center flex items-center justify-center gap-2 group"
                    >
                        Start Your Business <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                        href="#services"
                        className="bg-white text-[#1F2937] border border-gray-200 px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-gray-50 transition-all text-center shadow-sm"
                    >
                        See Consulting Options
                    </a>
                </div>
            </motion.div>

            {/* Right side abstract illustration */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
            >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                    {/* Decorative abstract elements */}
                    <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 rotate-3 transition-transform hover:rotate-6 duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] to-gray-800 rounded-3xl -rotate-3 p-10 shadow-2xl flex flex-col justify-between overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/10">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">ZZP Setup</h3>
                            <p className="text-gray-400">Step-by-step guidance</p>
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                <FileText size={24} className="text-[#B3261E]" />
                                <div>
                                    <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                                    <div className="h-2 w-16 bg-white/10 rounded"></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                <ShieldCheck size={24} className="text-emerald-400" />
                                <div>
                                    <div className="h-2 w-32 bg-white/20 rounded mb-2"></div>
                                    <div className="h-2 w-20 bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Your Path to Independence</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">Starting a cleaning business in the Netherlands can feel confusing if you don’t know the system. We guide you step-by-step.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <motion.div whileHover={{ y: -5 }} className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-200">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#B3261E] mb-6 shadow-sm">
                        <LineChart size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Simple Process</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">Clear instructions on how to register and begin working legally without the stress.</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-200">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#B3261E] mb-6 shadow-sm">
                        <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Legal & Structured</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">Understand everything about taxes and KVK to maintain your business 100% compliant.</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-200">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#B3261E] mb-6 shadow-sm">
                        <Lightbulb size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#1F2937]">From Start to Clients</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">Not just registration—gain practical advice on entering the market and securing clients.</p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-[#1F2937]">Consulting Services</h2>
                <div className="w-24 h-1.5 bg-[#B3261E] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                {/* 1 Hour Consultation */}
                <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-[calc(100%-2rem)]"
                >
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1F2937] mb-8 border border-gray-100">
                        <FileText size={32} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-[#1F2937] uppercase tracking-tight">1 Hour Consultation</h3>
                    <p className="text-gray-500 mb-8 text-lg">A simple session to help you understand how to start.</p>
                    <div className="space-y-4 mb-12 flex-grow">
                        {[
                            "Explanation of the KVK registration process",
                            "What ZZP (self-employed) means in the Netherlands",
                            "How taxes and VAT (BTW) work",
                            "What documents and information you need before registering",
                            "How to work legally as a cleaner",
                            "Basic guidance on how to find clients"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <CheckCircle2 size={24} className="text-[#1F2937] shrink-0" />
                                <span className="text-gray-600 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="pt-8 border-t border-gray-100 mt-auto">
                        <p className="font-bold text-[#1F2937] mb-6 text-lg">Duration: 1 hour</p>
                        <a 
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center w-full bg-[#1F2937] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            Book Consultation
                        </a>
                    </div>
                </motion.div>

                {/* Full Setup Package */}
                <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl p-10 lg:p-14 shadow-2xl shadow-gray-200 border-2 border-[#B3261E] flex flex-col h-full relative z-10 scale-100 lg:scale-[1.03]"
                >
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#B3261E] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-[#B3261E]/30">
                        Most Popular
                    </div>
                    <div className="w-16 h-16 bg-[#B3261E]/10 rounded-2xl flex items-center justify-center text-[#B3261E] mb-8">
                        <Landmark size={32} />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black mb-4 text-[#1F2937] uppercase tracking-tight">Full Setup Package</h3>
                    <p className="text-gray-500 mb-8 text-lg">Complete guidance to help you set up your cleaning business step-by-step.</p>
                    <div className="space-y-5 mb-12 flex-grow">
                        {[
                            "Preparation for KVK registration",
                            "Guidance through the business registration process",
                            "Explanation of tax obligations with the Belastingdienst",
                            "Help understanding invoices and bookkeeping basics",
                            "Example invoice templates",
                            "Guidance on how to structure your cleaning business",
                            "Tips on getting your first clients"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <CheckCircle2 size={24} className="text-[#B3261E] shrink-0" />
                                <span className="text-gray-700 font-medium text-[1.05rem]">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="pt-8 border-t border-gray-100 mt-auto">
                        <a 
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center w-full bg-[#B3261E] text-white py-5 rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-[#B3261E]/30 hover:bg-[#911f18] transition-colors"
                        >
                            Start Full Setup
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter text-[#1F2937]">Who This Is For</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">This consulting is ideal for those looking to formalize their work and build a stable future as an entrepreneur.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-6 bg-[#F5F5F5] p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#B3261E] shadow-sm shrink-0 border border-gray-100">
                        <Briefcase size={28} />
                    </div>
                    <span className="font-bold text-lg text-[#1F2937]">Cleaners who want to become self-employed (ZZP)</span>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-6 bg-[#F5F5F5] p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#B3261E] shadow-sm shrink-0 border border-gray-100">
                        <Building2 size={28} />
                    </div>
                    <span className="font-bold text-lg text-[#1F2937]">People who want to open a KVK in the Netherlands</span>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-6 bg-[#F5F5F5] p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#B3261E] shadow-sm shrink-0 border border-gray-100">
                        <Globe2 size={28} />
                    </div>
                    <span className="font-bold text-lg text-[#1F2937]">Immigrants who want help understanding the Dutch business system</span>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-6 bg-[#F5F5F5] p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#B3261E] shadow-sm shrink-0 border border-gray-100">
                        <ShieldCheck size={28} />
                    </div>
                    <span className="font-bold text-lg text-[#1F2937]">Anyone who wants to start a cleaning business legally</span>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Call To Action */}
      <section id="contact" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#1F2937] rounded-3xl p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#B3261E_0%,transparent_50%)] opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,#B3261E_0%,transparent_50%)] opacity-20"></div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter">Start Your Business Today</h2>
                    <p className="text-gray-300 mb-12 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        If you want to open your KVK and start your cleaning business in the Netherlands, we can guide you step by step.
                    </p>
                    <motion.a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#B3261E] text-white px-10 py-5 rounded-xl text-lg font-bold uppercase tracking-widest shadow-xl shadow-[#B3261E]/40"
                        whileHover={{ scale: 1.05, backgroundColor: "#911f18" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Phone size={24} /> Contact Us
                    </motion.a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
