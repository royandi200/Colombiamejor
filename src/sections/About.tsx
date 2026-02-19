import { motion } from 'framer-motion';
import { Quote, Target, Heart, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excelencia Académica',
    description: 'Programas diseñados con los más altos estándares educativos.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Acompañamiento constante durante todo tu proceso de aprendizaje.',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Más de 15 años formando líderes militares en Colombia.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/images/WhatsApp Image 2026-02-03 at 7.34.29 PM.jpeg"
                alt="Diana Ramos enseñando a soldados"
                className="w-full h-auto object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-colombia-green/20 flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-colombia-green" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-heading font-semibold text-sm">
                      Diana Ramos
                    </p>
                    <p className="text-gray-500 text-xs">
                      Fundadora y Directora
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-dorado/10 rounded-2xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-colombia-green/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-colombia-green" />
              <span className="text-gray-800 text-sm font-medium">Sobre Nosotros</span>
            </div>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6 leading-tight">
              Formando Líderes Militares del Futuro
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                En <strong className="text-colombia-green">Fundación Colombia Mejor</strong>, entendemos los desafíos únicos 
                que enfrentan los miembros de las fuerzas militares. Por eso hemos diseñado un programa de 
                bachillerato flexible y accesible que se adapta a tus horarios y responsabilidades.
              </p>
              <p>
                Nuestra fundadora, <strong className="text-colombia-green">Diana Ramos</strong>, cuenta con más de 
                15 años de experiencia en educación especializada, creando programas que combinan excelencia 
                académica con las necesidades prácticas del entorno militar.
              </p>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-l-4 border-dorado pl-6 py-2 mb-8"
            >
              <p className="text-gray-800 font-heading font-medium italic text-lg">
                "Ayudamos a superar barreras y alcanzar metas personales y profesionales."
              </p>
            </motion.blockquote>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-gray-50 hover:bg-colombia-green/5 transition-colors"
                >
                  <value.icon className="w-8 h-8 text-colombia-green mx-auto mb-3" />
                  <h4 className="font-heading font-semibold text-gray-800 text-sm mb-1">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-xs">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
