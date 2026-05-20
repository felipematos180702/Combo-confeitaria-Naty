import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from './ImageModal';

const testimonialImages = [
  "https://lh3.googleusercontent.com/d/1DizZNCuRB83GO_4D1C5asch8799BNB9_",
  "https://lh3.googleusercontent.com/d/1_Xp-jIS43BcwvPxIRXFPm3-ZGdnDMjGe",
  "https://lh3.googleusercontent.com/d/1sPg3QrdH0mWVAWfEX5Y20-8dpgMG-k30",
  "https://lh3.googleusercontent.com/d/1L6JCm4dnIoX7KoUZCUMRSz4NuFNIDegk",
  "https://lh3.googleusercontent.com/d/1l-Zu0IOb27HNo7dk52CZcjTLpuSkkgfH",
  "https://lh3.googleusercontent.com/d/1cLEFUTMitJSAP7WyiwEb8Y-vv0SZMgp0",
  "https://lh3.googleusercontent.com/d/1d6y1I9uUp0T3mh2klCXJGklX2W-6IF7m",
  "https://lh3.googleusercontent.com/d/1IYSRnyh8jZK4mIBBA6MRs0MoL_xfUpfe",
  "https://lh3.googleusercontent.com/d/1uIKNnKEKQVPW7qUwgEYoVTngUzfl7jZG"
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-navy/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[23px] md:text-5xl text-vermillion font-bold text-center mb-10 md:mb-16"
        >
          O que nossas alunas dizem
        </motion.h2>

        <div className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
          {testimonialImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedImage(img)}
              className="break-inside-avoid bg-white rounded-lg md:rounded-2xl overflow-hidden shadow-lg border border-navy/10 hover:shadow-xl transition-all cursor-zoom-in"
            >
              <img
                src={img}
                alt={`Depoimento ${i + 1}`}
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-navy/60 font-medium italic"
        >
          Resultados reais de quem já transformou sua confeitaria
        </motion.p>
      </div>
      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage || ''} 
      />
    </section>
  );
}
