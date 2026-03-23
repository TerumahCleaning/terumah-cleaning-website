import { useEffect } from "react";
import { IMAGES } from "../constants/images";
import { 
    CheckCircle2, 
    ShieldCheck, 
    Sparkles, 
    Clock, 
    ArrowRight 
} from "lucide-react";
import { motion } from "motion/react";

export default function Residential() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#FAFAFA] font-display text-[#1F2937]">
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-[#1F2937] mb-8 uppercase tracking-tighter leading-[1.05]">
                Professional <br /><span className="text-[#B3261E]">Residential Cleaning</span><br /> You Can Trust
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium max-w-lg">
                Care and excellence for your home with professional cleaning designed for comfort, hygiene and peace of mind.
              </p>
              <motion.a 
                href="/#contact"
                className="inline-flex items-center gap-3 bg-[#B3261E] text-white px-10 py-5 rounded-xl text-lg font-bold uppercase tracking-widest shadow-xl shadow-[#B3261E]/30"
                whileHover={{ scale: 1.05, backgroundColor: "#911f18" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Quote <ArrowRight size={20} />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#B3261E]/5 rounded-3xl translate-x-4 translate-y-4"></div>
              <img 
                src={IMAGES.routine} 
                alt="Residential Cleaning" 
                className="w-full h-[500px] lg:h-[600px] rounded-3xl shadow-2xl object-cover relative z-10" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details & What's Included */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Description */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#B3261E]/10 text-[#B3261E] text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-full shadow-sm">
                 Our Commitment
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-[#1F2937] uppercase tracking-tighter">Care and Excellence for Your Home</h2>
              
              <div className="space-y-8 text-xl text-gray-600 font-medium leading-[1.8]">
                <p>
                  Our residential cleaning is designed to offer maximum comfort and well-being for you and your family.
                </p>
                <p>
                  We take care of every detail using high-quality products and trained professionals, ensuring a clean, fragrant, and sanitized environment.
                </p>
              </div>
            </motion.div>

            {/* What's Included Card */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-10 lg:p-14 border border-gray-100"
            >
              <h3 className="text-2xl font-black mb-8 text-[#1F2937] uppercase tracking-wider">What's Included</h3>
              <ul className="space-y-6">
                {[
                  "Complete floor and surface cleaning",
                  "Bathroom and kitchen sanitation",
                  "Dusting of furniture and decorations",
                  "Inner window cleaning",
                  "Trash removal"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5 p-5 rounded-2xl hover:bg-[#FAFAFA] transition-colors border border-transparent hover:border-gray-200 group">
                    <div className="min-w-8">
                        <CheckCircle2 size={28} className="text-[#B3261E] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xl text-[#1F2937] font-medium leading-snug pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-[#1F2937]">Why Choose Terumah Cleaning Services</h2>
            <div className="w-24 h-1.5 bg-[#B3261E] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
               whileHover={{ y: -10 }} 
               className="bg-[#FAFAFA] p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center cursor-default transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#B3261E] mb-8 shadow-sm border border-gray-100">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#1F2937] uppercase tracking-tighter">Trusted Professionals</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">Our team is trained, reliable and detail-oriented.</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }} 
               className="bg-[#FAFAFA] p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center cursor-default transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#B3261E] mb-8 shadow-sm border border-gray-100">
                <Sparkles size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#1F2937] uppercase tracking-tighter">Quality Cleaning Products</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">We use high-quality products for a clean and fresh environment.</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }} 
               className="bg-[#FAFAFA] p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center cursor-default transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#B3261E] mb-8 shadow-sm border border-gray-100">
                <Clock size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#1F2937] uppercase tracking-tighter">Reliable Service</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">We respect your time and deliver consistent results.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-[#1F2937] rounded-3xl p-12 md:p-24 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center"
          >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                src="/VIDEO RESIDENTIAL QUOTE.mp4"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1F2937]/70 z-0"></div>
            
            {/* Accent Glowing Orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B3261E] rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B3261E] rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter text-center">Request Your Free Cleaning Quote</h2>
                <div className="text-white/90 mb-12 text-xl font-medium leading-[1.8] max-w-2xl mx-auto text-center drop-shadow-md">
                    <p>Tell us about your home and cleaning needs.</p>
                    <p>We will provide a clear and personalized quote.</p>
                </div>
                
                <motion.a
                    href="/#contact"
                    className="inline-block bg-[#B3261E] text-white px-12 py-6 rounded-xl text-lg font-bold uppercase tracking-widest shadow-xl shadow-[#B3261E]/40 w-fit"
                    whileHover={{ scale: 1.05, backgroundColor: "#911f18" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Request a Quote
                </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
