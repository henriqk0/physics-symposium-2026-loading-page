import { Heart } from "lucide-react";

interface SponsorsBarProps {
  variant?: "dark" | "light";
}

const sponsors = [
  { name: "IFES", full: "Instituto Federal do Espírito Santo", color: "#009c3b" },
  { name: "UFES", full: "Universidade Federal do Espírito Santo", color: "#003087" },
  { name: "FAPES", full: "Fundação de Amparo à Pesquisa do ES", color: "#e8432c" },
  { name: "CNPq", full: "Conselho Nacional de Desenvolvimento Científico", color: "#1565c0" },
  { name: "CAPES", full: "Coordenação de Aperfeiçoamento de Pessoal", color: "#00529b" },
  { name: "Prefeitura Serra", full: "Prefeitura Municipal de Serra", color: "#2e7d32" },
  { name: "SBF", full: "Sociedade Brasileira de Física", color: "#6a1b9a" },
];

export function SponsorsBar({ variant = "dark" }: SponsorsBarProps) {
  const bg = variant === "dark" ? "bg-white/5 border-white/10" : "bg-slate-100/50 border-slate-200";
  const text = variant === "dark" ? "text-gray-400" : "text-slate-600";
  const cardBg = variant === "dark" ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 hover:shadow-md";
  const cardText = variant === "dark" ? "text-white" : "text-slate-800";
  const iconColor = variant === "dark" ? "text-cyan-400" : "text-blue-500";

  return (
    <div className={`border-t ${bg} py-10 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className={`flex items-center justify-center gap-2 mb-6 ${text}`}>
          <Heart className={`w-4 h-4 ${iconColor}`} />
          <span className="text-sm font-medium">Agradecemos nossos patrocinadores e apoiadores</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              title={sponsor.full}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${cardBg} cursor-default transition-all`}
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: sponsor.color }}
              />
              <span className={`text-sm font-semibold ${cardText}`}>{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
