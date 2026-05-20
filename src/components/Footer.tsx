import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-eggshell border-t border-navy/10 py-12 md:py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-[24px] md:text-3xl text-vermillion font-black"
        >
          Doces da Naty
        </motion.div>
        
        <div className="flex justify-center text-navy">
          <a 
            href="https://www.instagram.com/docesdanaty___/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.instagram.com/docesdanaty___/', '_blank', 'noopener,noreferrer');
            }}
            className="hover:text-vermillion transition-all hover:scale-110 flex items-center gap-2 md:gap-3 group bg-white/50 backdrop-blur-sm px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-navy/5 shadow-sm"
          >
            <Instagram className="w-3.5 h-3.5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-base md:text-lg tracking-tight">@docesdanaty___</span>
          </a>
        </div>

        <p className="text-sm text-navy opacity-70">
          © {new Date().getFullYear()} Doces da Naty · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
