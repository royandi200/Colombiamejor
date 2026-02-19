import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '573115463751';
  const message = encodeURIComponent('¡Hola! Me gustaría solicitar información sobre los cursos de bachillerato. ¿Podrían ayudarme?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 1.5, 
        type: 'spring',
        stiffness: 260,
        damping: 20 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden md:block bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        ¿Necesitas ayuda?
      </motion.span>
      
      {/* Button */}
      <div className="relative">
        {/* Pulse animation rings */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <span className="absolute -inset-2 rounded-full bg-green-500/20 animate-pulse" />
        
        {/* Main button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-green-500/40 transition-shadow duration-300">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
        </div>
      </div>
    </motion.a>
  );
}
