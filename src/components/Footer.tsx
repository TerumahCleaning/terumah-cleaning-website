import { IMAGES } from "../constants/images";

export default function Footer() {
    return (
        <footer className="bg-white py-12 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="flex justify-center mb-8">
                    <img
                        src={IMAGES.footerLogo}
                        alt="Terumah Logo Small"
                        className="h-28 w-auto"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <p className="text-slate-400 text-sm tracking-widest uppercase mb-4">© 2024 Terumah Cleaning Services. All rights reserved.</p>
                <div className="flex justify-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-primary transition-colors">Netherlands (NL)</a>
                </div>
            </div>
        </footer>
    );
}
