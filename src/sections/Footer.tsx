import { Facebook, Instagram, MessageCircle, Mail, Phone, Music } from 'lucide-react';

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Cursos', href: '#cursos' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

const courseLinks = [
  { name: 'Bachillerato Completo', href: '#cursos' },
  { name: 'Cursos 10°-11°', href: '#cursos' },
  { name: 'Bachillerato Técnico', href: '#cursos' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1aVvfTiN7y/' },
  { icon: Music, label: 'TikTok', href: 'https://www.tiktok.com/@colombiamejor100?_r=1&_t=ZS-9447roX4I1I' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/573001234567' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-institucional-blue">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="flex items-center gap-3 mb-6"
            >
              <img 
                src="/images/logo.jpeg" 
                alt="Fundación Colombia Mejor"
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Formando líderes militares del futuro a través de educación de excelencia, 
              adaptada a las necesidades de las fuerzas armadas de Colombia.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-dorado flex items-center justify-center text-white hover:text-institucional-blue transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-dorado text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              Nuestros Cursos
            </h4>
            <ul className="space-y-3">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-dorado text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contacto@colombiamejor.org"
                  className="flex items-center gap-3 text-white/60 hover:text-dorado text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  contacto@colombiamejor.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+573115463751"
                  className="flex items-center gap-3 text-white/60 hover:text-dorado text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  +57 311 546 3751
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <span className="w-4 h-4 mt-0.5 flex-shrink-0">📍</span>
                Bogotá, Colombia
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 Fundación Colombia Mejor. NIT 900921471-2. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-dorado text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/40 hover:text-dorado text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
