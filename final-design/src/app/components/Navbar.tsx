import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Atom, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Palestrantes", href: "/palestrantes" },
  { label: "Cronograma", href: "/cronograma" },
  { label: "Hospedagem", href: "/hospedagem" },
  { label: "Inscrições", href: "/inscricoes" },
];

const previousEditions = [
  { year: "2024", url: "#" },
  { year: "2022", url: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEditions, setShowEditions] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg shadow-slate-200/50 border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Atom className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-900 font-semibold text-sm">
              SRFES 2026
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm transition-colors rounded-lg ${
                  location.pathname === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Edições Anteriores Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowEditions(!showEditions)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Edições Anteriores
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {showEditions && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowEditions(false)}
                  />
                  <div className="absolute right-0 mt-1 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-20">
                    {previousEditions.map((edition) => (
                      <a
                        key={edition.year}
                        href={edition.url}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        SRFES {edition.year}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link
              to="/inscricoes"
              className="ml-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors font-medium"
            >
              Inscrever
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-3 py-2 text-sm transition-colors rounded-lg ${
                  location.pathname === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Edições Anteriores Mobile */}
            <div className="pt-2">
              <button
                onClick={() => setShowEditions(!showEditions)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Edições Anteriores
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showEditions ? 'rotate-180' : ''}`} />
              </button>

              {showEditions && (
                <div className="mt-1 ml-3 space-y-1">
                  {previousEditions.map((edition) => (
                    <a
                      key={edition.year}
                      href={edition.url}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
                    >
                      SRFES {edition.year}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/inscricoes"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg transition-all font-medium text-center"
            >
              Inscreva-se
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
