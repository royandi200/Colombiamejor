import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, BookOpen, Users, Award } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/5.jpeg"
          alt="Soldados colombianos en formación"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-institucional-blue/95 via-institucional-blue/85 to-colombia-green/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Award className="w-4 h-4 text-dorado" />
            <span className="text-white/90 text-sm font-medium">Fundación Colombia Mejor</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6"
          >
            Prepárate para Servir con{' '}
            <span className="text-dorado">Conocimiento</span> y{' '}
            <span className="text-dorado">Determinación</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Bachillerato y cursos técnicos diseñados para los soldados de Colombia. 
            Formación académica de excelencia que se adapta a tu vocación militar.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('#cursos')}
              size="lg"
              className="bg-colombia-green hover:bg-colombia-green-dark text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg animate-pulse-glow"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Cursos Disponibles
            </Button>
            <Button
              onClick={() => scrollToSection('#nosotros')}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-200"
            >
              <Users className="w-5 h-5 mr-2" />
              Conoce Más
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            {[
              { value: '15+', label: 'Años de Experiencia' },
              { value: '5000+', label: 'Soldados Graduados' },
              { value: '98%', label: 'Tasa de Éxito' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-2xl sm:text-3xl text-dorado">{stat.value}</div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#stats')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
