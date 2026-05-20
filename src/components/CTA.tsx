import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="cta" className="px-6 pt-10 pb-12 md:py-24 bg-eggshell overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto rounded-[3rem] bg-navy py-16 md:py-24 px-8 md:px-16 text-center relative shadow-3xl overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo opacity-50 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-vermillion opacity-30 rounded-full" />
        
        <div className="relative z-10 space-y-8">
          <h2 className="font-serif text-[19px] md:text-6xl text-eggshell font-bold leading-tight text-justify md:text-center mb-[56px] md:mb-0">
            A porta está aberta, entre com os dois pés desta vez.
          </h2>
          <p className="text-white/80 text-[14px] md:text-xl max-w-2xl mx-auto font-medium px-4 mt-[9px] md:mt-0 mb-[38px] md:mb-0 text-center">
            Preço especial de lançamento. Torne-se uma confeiteira diferenciada na sua cidade a partir de hoje.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-4 mt-[6px] md:mt-0"
          >
            <a 
              href="https://pay.hotmart.com/H103943890J?checkoutMode=10&hotfeature=51&_hi=eyJzaWQiOiIxN2RjMWU2NzdkOWM0NWVjOWJiZjg2Y2U2M2M0NDc3MiIsImNpZCI6IjE3NzkyMDM5NzQ0NzEyNzE1NDE4Mzg4NjAzOTA3MCIsImJpZCI6IjE3NzkyMDM5NzQ0NzEyNzE1NDE4Mzg4NjAzOTA3MCJ9.1779203974646&bid=1779203975986" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#41cc5d] text-white font-bold text-center text-[14px] md:text-xl pl-[42px] pr-[47px] pt-[8px] pb-[9px] md:px-12 md:py-5 rounded-full shadow-2xl hover:bg-[#38b351] transition-all inline-block"
            >
              <span className="hidden md:inline text-xl">🔥</span> Quero meu combo agora!
            </a>
          </motion.div>
          
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-white/60 text-[10px] md:text-sm font-medium uppercase tracking-widest">
            <span className="flex items-center gap-2"><span className="text-vermillion md:text-white/60 text-xs md:text-sm">✓</span> <span className="text-[11px] md:text-sm">Suporte Premium</span></span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
