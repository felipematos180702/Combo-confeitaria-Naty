import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Preciso ter experiência na confeitaria?",
    a: "Não! Os cursos foram feitos para iniciantes. A Naty ensina do zero, passo a passo, de forma simples e prática. Se ela conseguiu começar do zero, você também consegue."
  },
  {
    q: "O acesso é realmente vitalício?",
    a: "Sim! Você paga uma única vez e tem acesso para sempre."
  },
  {
    q: "Vou aprender a precificar meus doces e bolos?",
    a: "Com certeza! Temos módulos inteiros dedicados à precificação correta, para que você nunca mais cobre abaixo do valor que merece e passe a ter lucro real."
  },
  {
    q: "Consigo vender mesmo morando em cidade pequena?",
    a: "Sim! Ensinamos estratégias de delivery e tráfego pago que funcionam em qualquer cidade. Muitas alunas em cidades pequenas faturam muito bem usando as técnicas do curso."
  },
  {
    q: "E se eu não gostar do curso?",
    a: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu investimento sem perguntas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-eggshell pt-10 pb-20 md:py-24 px-6 md:mb-20">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-4xl text-vermillion font-bold text-center mb-8 md:mb-16"
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-navy/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-5 md:px-8 py-5 md:py-6 flex justify-between items-center group"
              >
                <span className="font-bold text-[14px] md:text-lg text-navy pr-4 leading-tight group-hover:text-vermillion transition-colors">
                  {faq.q}
                </span>
                <ChevronDown className={`w-3 h-3 md:w-6 md:h-6 text-indigo transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 md:px-8 pb-5 md:pb-8 text-sm md:text-base text-text-body leading-relaxed border-t border-cream-light pt-5 md:pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
