import { Atom, MapPin, Mail, Phone, Instagram, Youtube, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">SRFES 2026</p>
                <p className="text-cyan-400 text-xs">Simpósio Regional de Física – ES</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              O Simpósio Regional de Física do Espírito Santo promove o avanço científico
              e a integração da comunidade física do estado e da região.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "/" },
                { label: "Palestrantes", href: "/palestrantes" },
                { label: "Cronograma", href: "/cronograma" },
                { label: "Inscrições", href: "/inscricoes" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Av. Talma Rodrigues Ribeiro, 3.100<br />Portal de Jacaraípe – Serra, ES</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:srfes2026@ifes.edu.br" className="hover:text-cyan-400 transition-colors">
                  srfes2026@ifes.edu.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>(27) 99999-0000</span>
              </li>
            </ul>
            <a
              href="https://www.ifes.edu.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Site oficial do IFES Serra
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 SRFES – Simpósio Regional de Física do Espírito Santo. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Organizado pelo IFES Serra com apoio da UFES e SBF
          </p>
        </div>
      </div>
    </footer>
  );
}
