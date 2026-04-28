import { MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router";
import heroImage from "../../imports/image.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="IFES Serra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-sm mb-8">
          <span className="text-slate-700 font-medium">Serra, ES • 17-19 de Julho 2026</span>
        </div>

        <h1 className="mb-6">
          <span className="block text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-3">
            Simpósio Regional de Física
            <br />
            <span className="text-blue-600">do Espírito Santo</span>
          </span>
        </h1>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
          Três dias de palestras, minicursos e networking para a comunidade científica do estado.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/inscricoes"
            className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Fazer Inscrição
          </Link>
          <Link
            to="/cronograma"
            className="px-7 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
          >
            Ver Programação
          </Link>
        </div>
      </div>
    </section>
  );
}
