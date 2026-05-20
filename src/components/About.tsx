import { motion } from 'motion/react';
import { useState } from 'react';
import ImageModal from './ImageModal';

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageUrl = "https://lh3.googleusercontent.com/d/1og0ql-Ys1PLBAK7IqOM957dc3aXplck2";

  return (
    <section className="bg-cream-light py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative"
        >
          <div 
            className="w-64 md:w-80 rounded-3xl border-2 border-navy overflow-hidden relative z-10 shadow-2xl p-2 bg-white cursor-zoom-in"
            onClick={() => setSelectedImage(imageUrl)}
          >
            <img 
              src={imageUrl} 
              alt="Naty - Confeiteira" 
              className="w-full h-auto rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute -top-4 -right-4 w-8 h-8 md:w-16 md:h-16 bg-vermillion rounded-full flex items-center justify-center text-white text-base md:text-3xl shadow-lg z-20 overflow-hidden">
            👩‍🍳
          </div>
          <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-dashed border-navy/30 rounded-3xl -z-10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-vermillion font-bold">Quem é a Naty?</h2>
          
          <div className="space-y-4 text-text-body leading-relaxed text-base md:text-lg">
            <p>
              Eu sou <strong className="text-navy">Natascha Maximo</strong>, mais conhecida como Naty, fundadora da <strong>Doces da Naty</strong> e confeiteira desde 2018.
            </p>
            <p>
              Larguei a CLT em 2017, após 9 anos como supervisora de cobrança, para entrar na confeitaria — sem nenhuma experiência com doces, mas com muita determinação.
            </p>
            <p className="border-l-4 border-vermillion pl-4 md:pl-6 italic text-navy font-medium py-2 bg-vermillion/5 rounded-r-lg">
              "Meu propósito: ajudar pessoas a terem reconhecimento e conquistarem sua liberdade financeira na confeitaria."
            </p>
          </div>
        </motion.div>
      </div>
      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage || ''} 
      />
    </section>
  );
}
