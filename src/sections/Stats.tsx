import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, TrendingUp, Monitor } from 'lucide-react';

const stats = [
  { icon: Calendar, value: 15, suffix: '+', label: 'Años de Experiencia' },
  { icon: Users, value: 5000, suffix: '+', label: 'Soldados Graduados' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Tasa de Éxito' },
  { icon: Monitor, value: 100, suffix: '%', label: 'En Línea' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-colombia-green py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-4">
                <stat.icon className="w-7 h-7 text-dorado" />
              </div>
              <div className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
