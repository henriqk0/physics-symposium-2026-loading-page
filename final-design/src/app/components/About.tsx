import { BookOpen, Award, FlaskConical, Network } from "lucide-react";
import { SponsorsBar } from "./SponsorsBar";

const conferenceImg =
  "https://images.unsplash.com/photo-1773828755374-0ee802d9f44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwY29uZmVyZW5jZSUyMGFjYWRlbWljJTIwZXZlbnQlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NzY5Njg2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  {
    icon: BookOpen,
    title: "Palestras Científicas",
    description:
      "Palestras de alto nível com pesquisadores renomados nas diversas áreas da física.",
  },
  {
    icon: FlaskConical,
    title: "Minicursos Práticos",
    description:
      "Minicursos práticos abordando temas de física experimental e computacional.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Oportunidade única de conectar-se com professores, pesquisadores e estudantes.",
  },
  {
    icon: Award,
    title: "Premiação",
    description:
      "Premiação dos melhores trabalhos apresentados nas sessões de pôsteres e comunicações orais.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-white">
      <div className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold mb-3">
            Sobre o SRFES
          </h2>
          <p className="text-slate-500 text-sm">Simpósio Regional de Física do Espírito Santo</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              O <strong className="text-slate-900">Simpósio Regional de Física do Espírito Santo (SRFES 2026)</strong> é um evento científico organizado pelo Instituto Federal do Espírito Santo (IFES) – Campus Serra, em parceria com a UFES e a Sociedade Brasileira de Física.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              O simpósio tem como objetivo reunir estudantes, professores e pesquisadores do Espírito Santo e de outros estados para debater os avanços e perspectivas da física, promovendo a troca de experiências e a integração da comunidade científica regional.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Durante três dias, o evento contará com palestras, minicursos, sessões de comunicações orais, apresentação de pôsteres e visitas guiadas aos laboratórios do IFES Serra.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Física Quântica", "Astrofísica", "Matéria Condensada", "Física Nuclear", "Computacional"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={conferenceImg}
              alt="Simpósio de Física"
              className="w-full rounded-2xl object-cover h-72 lg:h-80 shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-900/5" />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border-2 border-blue-200 rounded-xl p-4 shadow-xl">
              <p className="text-blue-600 text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3ª</p>
              <p className="text-slate-600 text-xs">Edição</p>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-5 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-900 font-semibold mb-2 text-sm">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <SponsorsBar variant="light" />
    </section>
  );
}
