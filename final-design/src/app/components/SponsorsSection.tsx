const sponsors = [
  {
    name: "IFES",
    full: "Instituto Federal do Espírito Santo",
    color: "#009c3b",
  },
  {
    name: "FAPES",
    full: "Fundação de Amparo à Pesquisa e Inovações do ES",
    color: "#e8432c",
  },
  {
    name: "UFES",
    full: "Universidade Federal do Espírito Santo",
    color: "#003087",
  },
  {
    name: "CNPq",
    full: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    color: "#1565c0",
  },
  {
    name: "CAPES",
    full: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    color: "#00529b",
  },
  {
    name: "Prefeitura de Serra",
    full: "Prefeitura Municipal de Serra – ES",
    color: "#2e7d32",
  },
  {
    name: "SBF",
    full: "Sociedade Brasileira de Física",
    color: "#6a1b9a",
  },
];

export function SponsorsSection() {
  return (
    <section id="patrocinadores" className="bg-slate-50 py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-slate-900 text-2xl font-bold mb-2">
            Apoio
          </h2>
          <p className="text-slate-600 text-sm">
            Agradecemos as instituições que apoiam o evento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="p-4 bg-white border border-slate-200 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: sponsor.color + "22", border: `2px solid ${sponsor.color}` }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: sponsor.color }}
                  >
                    {sponsor.name.slice(0, 2)}
                  </span>
                </div>
                <p className="text-slate-900 font-semibold text-sm">{sponsor.name}</p>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{sponsor.full}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
