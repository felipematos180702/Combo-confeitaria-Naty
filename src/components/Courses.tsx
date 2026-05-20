import { motion } from 'motion/react';
import { useState } from 'react';
import ImageModal from './ImageModal';

const CourseBlock = ({ 
  tag, 
  title, 
  quote, 
  description, 
  impact, 
  img, 
  galleryImages = [],
  reverse = false,
  textColorClass = "",
  videoUrl = "",
  onImageClick
}: { 
  tag: string, 
  title: string, 
  quote: string, 
  description: string, 
  impact: string, 
  img: string, 
  galleryImages?: string[],
  reverse?: boolean,
  textColorClass?: string,
  videoUrl?: string,
  onImageClick: (src: string) => void
}) => {
  return (
    <div className="py-20 border-b border-navy/10 last:border-0">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-16`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              className="md:hidden w-12 h-12 rounded-full overflow-hidden border-2 border-navy/10 shadow-md flex-shrink-0 cursor-zoom-in"
              onClick={() => onImageClick(`${img}=w1600`)}
            >
               <img 
                 src={`${img}=w400`} 
                 alt={title} 
                 className="w-full h-full object-cover" 
                 referrerPolicy="no-referrer"
               />
            </motion.div>
            <div className="flex flex-col gap-2">
              <span className={`inline-block w-fit px-4 py-1.5 rounded-full text-white text-[10px] font-bold tracking-widest uppercase ${reverse ? 'bg-vermillion' : 'bg-navy'}`}>
                {tag}
              </span>
              <h3 className="font-serif text-2xl md:text-5xl text-navy font-bold leading-tight">
                {title}
              </h3>
            </div>
          </div>

          {/* Mobile Video Position */}
          {videoUrl && (
            <div className="md:hidden mb-8 aspect-video rounded-2xl overflow-hidden shadow-xl border border-navy/5">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${title} Video`}
              />
            </div>
          )}
          
          <p className={`italic text-lg md:text-2xl leading-relaxed mb-8 font-medium ${textColorClass || (reverse ? 'text-vermillion' : 'text-indigo')}`}>
            "{quote}"
          </p>
          <div className={`space-y-6 leading-relaxed text-base md:text-lg ${textColorClass || 'text-text-body'}`}>
            <p className="opacity-90">{description}</p>
            <p className={`font-bold text-lg md:text-xl ${textColorClass || 'text-navy'}`}>{impact}</p>
          </div>
        </motion.div>
  
        <div className="hidden md:flex flex-col gap-8 flex-shrink-0 w-full md:w-[450px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cursor-zoom-in"
            onClick={() => onImageClick(`${img}=w1600`)}
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src={`${img}=w1200`} 
                alt={title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 antialiased" 
                style={{ imageRendering: 'auto' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Desktop Video Position */}
          {videoUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-navy"
            >
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${title} Video`}
              />
            </motion.div>
          )}
        </div>
      </div>
  
      {galleryImages.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-navy/40 mb-8 border-b border-navy/5 pb-4">
            Algumas delícias que você vai aprender
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {galleryImages.map((id, i) => {
              const fullSrc = `https://lh3.googleusercontent.com/d/${id}=w1600`;
              return (
                <motion.div 
                  key={id + i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden border border-navy/5 shadow-md bg-white group cursor-pointer"
                  onClick={() => onImageClick(fullSrc)}
                >
                  <img 
                    src={`https://lh3.googleusercontent.com/d/${id}=w800`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 antialiased"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function Courses() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const course1Images = [
    "13ggap4-kukp16g6F5vRciGy2QQV50GrC",
    "1aMnMaw3IXbqRCJrJ5JyF9jHnTrVzkJyi",
    "1OzWjBwc4gCnWrirQsp6irVh07ANnJ9LL",
    "1Nqs6XbAUdLWSdf5pGG555B_EyqWB9fND",
    "1Au7Q36sNrWscmpm_MLpVyxXI4oZuJpwU",
    "12j7KMipzLqsz_7aSawV2t7hJJfGxTTD8",
    "1gy1IHZt63DbOCRZba2-pOe7G1K6aYABI",
    "1xqUuvECHncnwjHD4y6XuZuDLPn0m5UIY",
    "1ll5TxwIjAlCpxsNn4oCO3GTqCprEG3rk",
    "1pgBlPeDw4VufLmj3af4Ge6FIWdnuOuZA",
    "1zLR5-qrkz9Ms6JKoM5B6g6mplQOE1K8V",
    "1pkQFOMJCsCRxX3UAJd5mSuhzl8DBbT_B",
    "1pU2CUzmxckTjeNkdeg1YRNMP-noV6teK",
    "1g4HOq05GBQKQty0iw0nSjZRP-FttGUnH",
    "1xXZ--Z6dd6MASfXTNUWqHwrsGn1ETRS-",
    "1nFDf9keR6gaiXkldyG5wyURb8fI4tp_T",
    "17LtsfBTRtvTnVn0VtAXXtj3qosDB6Kxb",
    "1QVd9UdAcCVAb5y3DFqV75W-tkL74DjsK",
    "11OhWJxFoBplsfpvjxeUCICmmSkU5CBIz",
    "1-LHYGZta8H2b11vqRNX4n4FdG2NenB7G",
    "1r5t8ZPJDwGReMjAUa1jTuFBbYQ41Ro6I",
    "1CEZtJ1i1oo7OFxVi3E8ASAky_9wz0Q4l",
    "1xctf9pLnoEGv_iD6rP6lr0npRPwOj-xp",
    "1cv9EvfHYxX7ynA-flTa_YUAO1VopSkoi"
  ];

  const course2Images = [
    "1BdBGJYRCRuBIwROZR5sqy8U5BSVltzly",
    "1HwqCBR2YsfedYlYPjEUw8MAANwM0bfX6",
    "17nscLVGLLo06K-K0oDqoL2MLOJlb_0VZ",
    "1VcH99ltslGgTbvEC_qYnE-xSNf0QCHpu",
    "1nMiRnSX48D8O4G7rFVVADTw6_K7uUWmQ",
    "1xsQ77b5g8GiD1sLwEHwUm0NYoFW8pThi",
    "1-kGDbgNujXFiz0URvhBDHeHNOU6UUTJ6",
    "19EFAQ0tZl5kIMXXI0a0Ifv6hBvcHjkDE",
    "1e1LuAyPR3rY2BrHfAq_FkwsYD-a6Y_lZ",
    "1fpLeGez-ASw6WkmhK1kgTsX9-dI_y5Oc",
    "1FERoiXUt6tuXZ_Rx0RHwkpYxdL0g8LaZ",
    "105n6WjSI2XHGfKK4W87Ly_2eZ4UrScn4",
    "1iZoQ-IZVy5Aaae9ljmmNVP0Zkdn5BpSz",
    "1bQYONpyi2VTVpO0wuvUHWTPD8Jt9B2-E",
    "18SYF_SzJp-WDAonpgqfQLsmp7WHN7RQY",
    "1uufirr0p0MyD5tTRfGXYevrmutffuCeR",
    "10G6d4dq8cXDXqZK14J-Deq8a9py3b_mp",
    "1Eb2jk6tmmgZoj7Nsd2imqQDyG0ODBoJp"
  ];

  return (
    <section className="bg-eggshell py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <CourseBlock 
          tag="CURSO 1"
          title="Doces de Vitrine"
          quote="Muitas confeiteiras tem o sonho de viver da confeitaria, mas começam da forma errada, o sucesso vai muito além das receitas."
          description="No Doces de vitrine você entende que para crescer na confeitaria é preciso saber os pilares mais importantes, e não estamos falando apenas dos doces, é preciso aprender sobre vendas, divulgação, precificação, delivery e gestão financeira."
          impact="É o passo a passo que usei para construir a Doces da Naty do zero, e que você terá acesso para aplicar na sua confeitaria."
          img="https://lh3.googleusercontent.com/d/1l_rhqqODOwd-g20pEssaN5gotjgV9Gb3"
          videoUrl="https://www.youtube.com/embed/KJgXOVXSB1k"
          galleryImages={course1Images}
          textColorClass="text-vermillion"
          onImageClick={setSelectedImage}
        />
        <CourseBlock 
          reverse
          tag="CURSO 2"
          title="Bolos do Zero"
          quote="Bolo foi o meu maior vilão na confeitaria, e de tanto errar por não saber fazer os processos, eu criei o bolos do zero com o passo a passo para fazer seu bolo ficar perfeito."
          description="Para fazer bolos com segurança você precisa da massa certa, o recheio no ponto, a montagem padronizada, a decoração impecável e o sabor irresistível."
          impact="Além disso, eu te ensino como vender bolos diariamente através das fatias, que são o ponta pé para o cliente conhecer o sabor do seu bolo, é o que eu chamo de degustação paga."
          img="https://lh3.googleusercontent.com/d/1huvEoCSyKrR27YlYsgNydO7ppSlIL4Xb"
          videoUrl="https://www.youtube.com/embed/Syj08eKKW8o"
          galleryImages={course2Images}
          textColorClass="text-vermillion"
          onImageClick={setSelectedImage}
        />
      </div>
      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage || ''} 
      />
    </section>
  );
}
