import { motion } from 'motion/react';
import { Star, ShieldCheck, Heart, TrendingUp, GraduationCap, Cake } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-3 h-3 md:w-8 md:h-8 text-vermillion" />,
    title: "Precificação correta",
    description: "Saiba exatamente quanto cobrar para lucrar de verdade."
  },
  {
    icon: <Star className="w-3 h-3 md:w-8 md:h-8 text-navy" />,
    title: "Venda todos os dias",
    description: "Estratégias de divulgação e atendimento para chamar atenção do seu cliente."
  },
  {
    icon: <Heart className="w-3 h-3 md:w-8 md:h-8 text-pink-destaque" />,
    title: "Receitas validadas",
    description: "Os doces e bolos de maior sucesso da Doces da Naty, receitas que são vendidas desde 2018 e que conquistaram milhares de clientes."
  },
  {
    icon: <ShieldCheck className="w-3 h-3 md:w-8 md:h-8 text-indigo" />,
    title: "Confeitaria profissional",
    description: "Não é por que você trabalha em casa que não precisa se preocupar com sua apresentação e posicionamento. “Não basta ser, tem que parecer ser”."
  },
  {
    icon: <Cake className="w-3 h-3 md:w-8 md:h-8 text-vermillion" />,
    title: "Os bolos que mais chamam atenção",
    description: "Além de serem lindos são os mais deliciosos que você vai provar, esqueça todos os cursos e tudo que você aprendeu sobre bolo até hoje."
  },
  {
    icon: <GraduationCap className="w-3 h-3 md:w-8 md:h-8 text-orange-destaque" />,
    title: "Acesso vitalício",
    description: "Estude no seu ritmo, para sempre. Sem mensalidades."
  }
];

export default function Benefits() {
  return (
    <section className="bg-eggshell pt-4 pb-24 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[20px] md:text-5xl text-vermillion font-bold text-center mb-8 md:mb-20"
        >
          O que você vai aprender a partir de agora
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white p-3 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-navy/5 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-2 md:mb-6">{benefit.icon}</div>
              <h3 className="font-bold text-sm md:text-xl text-text-dark mb-1 md:mb-3">{benefit.title}</h3>
              <p className="text-[10px] md:text-base text-text-body leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
