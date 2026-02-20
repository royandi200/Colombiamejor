import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, MessageCircle, Facebook, Instagram, Music } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 311 546 3751',
    href: 'tel:+573115463751',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@colombiamejor.org',
    href: 'mailto:contacto@colombiamejor.org',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Bogotá, Colombia',
    href: '#',
  },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1aVvfTiN7y/' },
  { icon: Music, label: 'TikTok', href: 'https://www.tiktok.com/@colombiamejor100?_r=1&_t=ZS-9447roX4I1I' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/573115463751' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="bg-gray-50 section-padding">
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
            <span className="text-gray-800 text-sm font-medium">Contacto</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Contáctanos y te ayudaremos a elegir el programa perfecto para ti. Estamos aquí para responder todas tus preguntas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-800 font-medium">
                      Nombre Completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-colombia-green focus:ring-colombia-green/20 rounded-xl py-5"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-800 font-medium">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-colombia-green focus:ring-colombia-green/20 rounded-xl py-5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-800 font-medium">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+57 300 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-gray-200 focus:border-colombia-green focus:ring-colombia-green/20 rounded-xl py-5"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-800 font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos qué programa te interesa..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-200 focus:border-colombia-green focus:ring-colombia-green/20 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-colombia-green hover:bg-colombia-green-dark text-white font-semibold py-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-colombia-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-colombia-green/20 transition-colors">
                      <info.icon className="w-6 h-6 text-colombia-green" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{info.label}</p>
                      <p className="text-gray-800 font-medium group-hover:text-colombia-green transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-institucional-blue rounded-2xl p-6">
                <h4 className="text-white font-heading font-semibold mb-4">
                  Síguenos en Redes
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 hover:bg-dorado flex items-center justify-center text-white hover:text-institucional-blue transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="text-gray-800 font-heading font-semibold mb-4">
                  Horario de Atención
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Lunes - Viernes</span>
                    <span className="text-gray-800 font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sábados</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Domingos</span>
                    <span className="text-gray-500">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
