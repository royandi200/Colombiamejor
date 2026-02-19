import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Martínez',
    role: 'Soldado Profesional',
    content: 'Gracias a Colombia Mejor pude completar mi bachillerato mientras servía en la base. La flexibilidad del programa fue clave para poder estudiar sin descuidar mis obligaciones militares.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ana Lucía Herrera',
    role: 'Cabo Primero',
    content: 'Los tutores entienden perfectamente nuestras necesidades como militares. El apoyo fue excepcional durante todo el proceso y siempre estuvieron dispuestos a ayudarme.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Pedro Rodríguez',
    role: 'Sargento Segundo',
    content: 'Recomiendo este programa a todos mis compañeros. Es una oportunidad única de superación personal y profesional. El certificado me abrió muchas puertas.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-institucional-blue section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-dorado" />
            <span className="text-white text-sm font-medium">Testimonios</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Lo que Dicen Nuestros Estudiantes
          </h2>
          <p className="text-white/70 leading-relaxed">
            Historias de éxito de soldados que transformaron su futuro con nuestra formación académica.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-colombia-green/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-colombia-green" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-dorado text-dorado" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-colombia-green/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-colombia-green">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
