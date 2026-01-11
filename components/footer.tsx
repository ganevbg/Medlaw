import { Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold mb-4">Медикъллоул-Консулт</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-4">Медицинско & Академично Право</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Експертна правна защита с над 15 години опит в болничния мениджмънт, академичните процедури и съдебната
              практика.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Връзки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#expertise" className="opacity-80 hover:opacity-100 transition-opacity">
                  Експертиза
                </a>
              </li>
              <li>
                <a href="#blog" className="opacity-80 hover:opacity-100 transition-opacity">
                  Блог
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Контакти</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>гр. София</li>
              <li>ул. [Адрес]</li>
              <li>+359 XXX XXX XXX</li>
              <li>contact@example.bg</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585557295760" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm opacity-80 text-center">
              <a href="#" className="hover:opacity-100 transition-opacity">
                GDPR политика
              </a>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Общи условия
              </a>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Етичен кодекс
              </a>
            </div>
            <p className="text-sm opacity-60">© 2026. Всички права запазени.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
