import { motion } from 'framer-motion';
import { Check, BookOpen, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    id: 1,
    title: 'Bachillerato Completo 6°-11°',
    price: 600000,
    description: 'Completa tu bachillerato desde 6° hasta 11° grado. Formación integral con todas las materias esenciales.',
    features: [
      'Clases grabadas 24/7',
      'Material descargable',
      'Tutorías personalizadas',
      'Certificado oficial',
      'Acceso por 24 meses',
    ],
    badge: 'Más Popular',
    icon: BookOpen,
    duration: '24 meses',
  },
  {
    id: 2,
    title: 'Bachillerato Cursos 10°-11°',
    price: 760000,
    description: 'Programa acelerado para completar tus últimos dos años de bachillerato de manera eficiente.',
    features: [
      'Duración 12 meses',
      'Modalidad flexible',
      'Acompañamiento constante',
      'Examen ICFES incluido',
      'Preparación especializada',
    ],
    badge: 'Rápido',
    icon: Clock,
    duration: '12 meses',
  },
  {
    id: 3,
    title: 'Bachillerato Técnico',
    price: 1500000,
    description: 'Formación técnica especializada que complementa tu bachillerato con habilidades profesionales.',
    features: [
      'Especialización técnica',
      'Prácticas profesionales',
      'Convenios empresariales',
      'Doble titulación',
      'Bolsa de empleo',
    ],
    badge: 'Premium',
    icon: Award,
    duration: '18 meses',
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
};

export default function Courses() {
  return (
    <section id="cursos" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-colombia-green/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-colombia-green" />
            <span className="text-gray-800 text-sm font-medium">Nuestros Programas</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Cursos Diseñados para Ti
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Elige el programa que mejor se adapte a tus necesidades y comienza tu camino hacia el éxito académico.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                {/* Card Header */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-colombia-green/10 flex items-center justify-center">
                      <course.icon className="w-6 h-6 text-colombia-green" />
                    </div>
                    <Badge className="bg-dorado/10 text-dorado-dark border-0 font-medium">
                      {course.badge}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Price */}
                <div className="px-6 py-4 bg-gray-50 border-y border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-colombia-green font-heading font-bold text-3xl">
                      {formatPrice(course.price)}
                    </span>
                    <span className="text-gray-500 text-sm">COP</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-colombia-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-colombia-green" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <Button
                    className="w-full bg-institucional-blue hover:bg-institucional-blue-dark text-white font-semibold py-5 rounded-xl transition-all duration-200 group-hover:bg-colombia-green"
                  >
                    Inscribirme Ahora
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            ¿Necesitas ayuda para elegir el programa adecuado?
          </p>
          <Button
            variant="outline"
            className="border-2 border-colombia-green text-colombia-green hover:bg-colombia-green hover:text-white font-semibold px-8 py-5 rounded-xl transition-all duration-200"
          >
            <Users className="w-5 h-5 mr-2" />
            Hablar con un Asesor
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
