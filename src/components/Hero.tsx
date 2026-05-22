import { motion } from 'motion/react';
import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const mosaicImages = [
    "13ggap4-kukp16g6F5vRciGy2QQV50GrC",
    "1aMnMaw3IXbqRCJrJ5JyF9jHnTrVzkJyi",
    "1OzWjBwc4gCnWrirQsp6irVh07ANnJ9LL",
    "1Nqs6XbAUdLWSdf5pGG555B_EyqWB9fND",
    "1Au7Q36sNrWscmpm_MLpVyxXI4oZuJpwU",
    "12j7KMipzLqsz_7aSawV2t7hJJfGxTTD8",
    "1gy1IHZt63DbOCRZba2-pOe7G1K6aYABI",
    "1xqUuvECHncnwjHD4y6XuZuDLPn0m5UIY",
    "1zLR5-qrkz9Ms6JKoM5B6g6mplQOE1K8V",
    "1pkQFOMJCsCRxX3UAJd5mSuhzl8DBbT_B",
    "1BdBGJYRCRuBIwROZR5sqy8U5BSVltzly",
    "1HwqCBR2YsfedYlYPjEUw8MAANwM0bfX6",
    "17nscLVGLLo06K-K0oDqoL2MLOJlb_0VZ",
    "1VcH99ltslGgTbvEC_qYnE-xSNf0QCHpu",
    "1xsQ77b5g8GiD1sLwEHwUm0NYoFW8pThi",
    "1fpLeGez-ASw6WkmhK1kgTsX9-dI_y5Oc"
  ];

  // Create a larger array for full coverage
  const allImages = [...mosaicImages, ...mosaicImages, ...mosaicImages];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-8 md:py-20 overflow-hidden">
      {/* Background Mosaic and Overlay */}
      <div className="absolute inset-0 -z-10 bg-eggshell overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-full w-full opacity-40">
          {allImages.slice(0, 24).map((id, index) => {
            const imgSrc = index === 0 
              ? "https://lh3.googleusercontent.com/d/1r5t8ZPJDwGReMjAUa1jTuFBbYQ41Ro6I" 
              : index === 1 
              ? "https://lh3.googleusercontent.com/d/19EFAQ0tZl5kIMXXI0a0Ifv6hBvcHjkDE" 
              : `https://lh3.googleusercontent.com/d/${id}`;
            
            return (
              <div 
                key={index} 
                className="aspect-square w-full h-full border border-black cursor-pointer hover:opacity-100 transition-opacity"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <img 
                  src={imgSrc} 
                  alt="" 
                  className="w-full h-full object-cover grayscale-[30%]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488477181946-6428a0291777";
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 bg-black/30" />
        {/* Soft transition to the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-eggshell to-transparent pointer-events-none" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-1.5 md:gap-2 mb-4 md:mb-8"
      >
        <span className="hidden md:inline text-xl leading-normal">👑</span>
        <span className="font-bold text-[14px] md:text-sm tracking-[0.2em] text-white/90 uppercase drop-shadow-sm flex flex-col md:flex-row items-center">
          <span>COMBO EXCLUSIVO</span>
          <span className="hidden md:inline mx-2">—</span>
          <span>ACESSO VITALÍCIO</span>
        </span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-serif text-[26px] md:text-[53px] leading-[29.3px] md:leading-tight text-vermillion max-w-5xl mt-[82px] md:mt-0 mb-[40px] md:mb-8 tracking-tight font-bold pl-[18px] md:px-2 pr-[2px] md:pr-2 pt-0 pb-0 mr-[-12px] md:mr-0 ml-[-22px] md:ml-0 drop-shadow-lg md:drop-shadow-2xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.4),0_0_10px_rgba(255,255,255,0.15)] md:[text-shadow:_3px_4px_8px_rgb(0_0_0_/_80%)]"
      >
        Esses foram os meus dois cursos mais vendidos nos últimos anos e agora você pode garantir o combo com acesso vitalício.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-[13px] md:text-xl text-text-dark font-medium max-w-2xl leading-relaxed mt-[36px] md:mt-0 mb-6 md:mb-12 ml-[-11px] md:ml-0 mr-[-12px] md:mr-0 shadow-md bg-eggshell p-4 md:p-6 rounded-2xl px-5 md:px-10"
      >
        Centenas de confeiteiras aprenderam o meu método e começaram a faturar com doces de vitrine e bolos festivos todos os dias.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full md:w-auto mt-[16px] md:mt-0"
      >
        <a 
          href="https://pay.hotmart.com/H103943890J?checkoutMode=10&hotfeature=51&_hi=eyJzaWQiOiIxN2RjMWU2NzdkOWM0NWVjOWJiZjg2Y2U2M2M0NDc3MiIsImNpZCI6IjE3NzkyMDM5NzQ0NzEyNzE1NDE4Mzg4NjAzOTA3MCIsImJpZCI6IjE3NzkyMDM5NzQ0NzEyNzE1NDE4Mzg4NjAzOTA3MCJ9.1779203974646&bid=1779203975986" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto bg-[#41cc5d] text-white font-bold text-[13px] md:text-lg px-6 md:px-12 py-3 md:py-5 rounded-full shadow-2xl shadow-[#41cc5d]/40 hover:bg-white hover:text-[#41cc5d] border-2 border-transparent hover:border-white transition-all duration-300 inline-block"
        >
          <span className="hidden md:inline text-lg">🔥</span> Quero garantir meu combo agora!
        </a>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-[7px] md:mt-8 text-[12px] md:text-sm text-white/90 font-medium flex items-center gap-1 relative z-10"
      >
        <span className="hidden md:inline text-vermillion text-sm">⚡</span> Vagas limitadas — preço promocional por tempo limitado
      </motion.p>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-navy/50 z-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage || ''} 
      />
    </section>
  );
}
