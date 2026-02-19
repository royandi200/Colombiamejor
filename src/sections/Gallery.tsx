import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  {
    src: '/images/5.jpeg',
    alt: 'Clase al aire libre con soldados',
    caption: 'Formación continua en cualquier entorno',
  },
  {
    src: '/images/234.jpeg',
    alt: 'Sesión educativa en campo',
    caption: 'Aprendizaje práctico y dinámico',
  },
  {
    src: '/images/23432.jpeg',
    alt: 'Instructora con soldados',
    caption: 'Acompañamiento personalizado',
  },
  {
    src: '/images/WhatsApp Image 2026-02-03 at 7.34.29 PM.jpeg',
    alt: 'Clase en aula',
    caption: 'Instalaciones modernas para el aprendizaje',
  },
  {
    src: '/images/WhatsApp Image 2026-02-03 at 7.34.30 PM.jpeg',
    alt: 'Soldados en clase',
    caption: 'Compromiso con la educación',
  },
  {
    src: '/images/WhatsApp Image 2026-02-03 at 7.34.32 PM.jpeg',
    alt: 'Grupo de estudio',
    caption: 'Trabajo en equipo y colaboración',
  },
  {
    src: '/images/WhatsApp Image 2026-02-03 at 7.34.33 PM.jpeg',
    alt: 'Evaluación escrita',
    caption: 'Evaluaciones que miden el progreso real',
  },
  {
    src: '/images/WhatsApp Image 2026-02-03 at 7.34.33 PM (1).jpeg',
    alt: 'Examen de estudiantes',
    caption: 'Preparación constante',
  },
  {
    src: '/images/WhatsApp Image 2026-02-03 at 7.34.33 PM (2).jpeg',
    alt: 'Estudiantes concentrados',
    caption: 'Dedicación y esfuerzo',
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="galeria" className="bg-white section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-colombia-green/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-colombia-green" />
            <span className="text-gray-800 text-sm font-medium">Galería</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Nuestra Comunidad en Acción
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Momentos de aprendizaje y crecimiento de nuestros estudiantes en su camino hacia el éxito académico.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-card-hover bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setLightboxImage(images[currentIndex].src)}
                />
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-institucional-blue/90 to-transparent p-6 md:p-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white font-heading font-medium text-lg md:text-xl"
                  >
                    {images[currentIndex].caption}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-colombia-green flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-colombia-green flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-2 ring-colombia-green ring-offset-2'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`Ver imagen ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'w-8 bg-colombia-green'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
