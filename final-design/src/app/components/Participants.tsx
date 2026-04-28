import { ExternalLink } from "lucide-react";
import { SponsorsBar } from "./SponsorsBar";

const speakers = [
  {
    id: 1,
    name: "Prof. Dr. Carlos Eduardo Santos",
    institution: "UFES",
    area: "Física de Partículas",
    talk: "Descobertas recentes no LHC e o futuro da física de altas energias",
    image: "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcGh5c2ljaXN0JTIwcmVzZWFyY2hlciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Njk2ODYxOXww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 2,
    name: "Profa. Dra. Maria Fernanda Lima",
    institution: "IFES",
    area: "Astrofísica e Cosmologia",
    talk: "Ondas gravitacionais: uma nova janela para o universo",
    image: "https://images.unsplash.com/photo-1659353887272-703de19bec9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzY2llbnRpc3QlMjByZXNlYXJjaGVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2OTY4NjE5fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 3,
    name: "Prof. Dr. Rafael Oliveira",
    institution: "USP",
    area: "Física da Matéria Condensada",
    talk: "Supercondutividade de alta temperatura: desafios e perspectivas",
    image: "https://images.unsplash.com/photo-1758685734414-951a86561065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwYWNhZGVtaWMlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzc2OTY4NjIzfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 4,
    name: "Profa. Dra. Ana Paula Souza",
    institution: "UNICAMP",
    area: "Física Quântica",
    talk: "Computação quântica: onde estamos e para onde vamos",
    image: "https://images.unsplash.com/photo-1758685847967-c598c3b176b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBhY2FkZW1pYyUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NzY5Njg2MjN8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 5,
    name: "Prof. Dr. João Marcos Vieira",
    institution: "UFMG",
    area: "Física Computacional",
    talk: "Simulações moleculares e suas aplicações em ciência de materiais",
    image: "https://images.unsplash.com/photo-1773828977866-baed2942b424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBwcm9mZXNzb3IlMjBzcGVha2luZyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzc2OTY4NjE1fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 6,
    name: "Profa. Dra. Beatriz Carvalho",
    institution: "UNESP",
    area: "Física Nuclear",
    talk: "Aplicações da física nuclear na medicina e na indústria",
    image: "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzc2OTY4NjEyfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

const committeeMembers = [
  { name: "Prof. Dr. Anderson Martins", role: "Presidente do Comitê", institution: "IFES Serra" },
  { name: "Profa. Dra. Luísa Ferreira", role: "Coordenadora Científica", institution: "IFES Serra" },
  { name: "Prof. Dr. Roberto Azevedo", role: "Coordenador de Minicursos", institution: "UFES" },
  { name: "MSc. Camila Rodrigues", role: "Coordenadora de Pôsteres", institution: "IFES Serra" },
  { name: "Prof. Dr. Fábio Nascimento", role: "Tesoureiro", institution: "IFES Serra" },
  { name: "Profa. Ma. Renata Pimentel", role: "Secretária Geral", institution: "IFES Serra" },
];

export function Participants() {
  return (
    <section id="palestrantes" className="bg-gradient-to-b from-slate-50 to-blue-50/30">
      <div className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Speakers */}
        <div className="mb-12">
          <h2 className="text-slate-900 text-3xl font-bold mb-2">
            Palestrantes
          </h2>
          <p className="text-slate-600">
            Pesquisadores de diferentes instituições do país
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute top-2 right-2 px-2 py-1 bg-white text-slate-700 text-xs rounded font-medium">
                  {speaker.institution}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs text-blue-600 mb-1">{speaker.area}</p>
                <h3 className="text-slate-900 font-semibold mb-2">
                  {speaker.name}
                </h3>
                <div className="border-t border-slate-200 pt-2 mt-2">
                  <p className="text-slate-600 text-sm leading-snug">
                    {speaker.talk}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organizing Committee */}
        <div>
          <div className="mb-8">
            <h3 className="text-slate-900 text-xl font-bold mb-1">
              Organização
            </h3>
            <p className="text-slate-500 text-sm">Comitê organizador do evento</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {committeeMembers.map((member, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xs">
                    {member.name.split(" ").slice(-1)[0][0]}
                    {member.name.split(" ").slice(-2, -1)[0]?.[0]}
                  </span>
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-medium">{member.name}</p>
                  <p className="text-slate-600 text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SponsorsBar variant="light" />
    </section>
  );
}
