import { useState } from "react";
import { Clock, Coffee, Mic2, BookOpen, Award, Users, FlaskConical } from "lucide-react";
import { SponsorsBar } from "./SponsorsBar";

type Activity = {
  time: string;
  title: string;
  speaker?: string;
  type: "opening" | "talk" | "break" | "workshop" | "poster" | "lab" | "award" | "social";
  location?: string;
};

type Day = {
  date: string;
  dayName: string;
  activities: Activity[];
};

const schedule: Day[] = [
  {
    date: "09/09",
    dayName: "Quarta-feira",
    activities: [
      { time: "08:00", title: "Registro", type: "opening", location: "Hall de Entrada" },
      { time: "08:45", title: "Abertura", type: "opening", location: "Auditório Principal" },
      { time: "09:00", title: "Palestra", speaker: "Marcelo Segatto", type: "talk", location: "Auditório Principal" },
      { time: "10:00", title: "Pausa", type: "break", location: "Foyer" },
      { time: "10:30", title: "Palestra", speaker: "Ronaldo Lobato", type: "talk", location: "Auditório Principal" },
      { time: "11:30", title: "Mesa Redonda: IA e Computação Quântica", type: "talk", location: "Auditório Principal" },
      { time: "13:00", title: "Pausa almoço", type: "break" },
      { time: "15:00", title: "Palestra", speaker: "Eduardo Marino", type: "talk", location: "Auditório Principal" },
      { time: "16:00", title: "Pausa", type: "break", location: "Foyer" },
      { time: "16:30", title: "Comunicações (EE, Ensino)", type: "poster", location: "Sala de Apresentações" },
      { time: "17:10", title: "Palestra", speaker: "Guilherme Lima", type: "talk", location: "Auditório Principal" },
      { time: "18:30", title: "Palestra de Divulgação Científica", speaker: "Jaziel Coelho", type: "talk", location: "Auditório Principal" },
      { time: "20:00", title: "Encontro de Boas Vindas", type: "social", location: "Espaço de Convivência" },
    ],
  },
  {
    date: "10/09",
    dayName: "Quinta-feira",
    activities: [
      { time: "08:30", title: "Palestra", speaker: "Ernani Vassoler", type: "talk", location: "Auditório Principal" },
      { time: "09:30", title: "Comunicações (FT, FMC)", type: "poster", location: "Sala de Apresentações" },
      { time: "10:30", title: "Pausa", type: "break", location: "Foyer" },
      { time: "11:00", title: "Palestra", speaker: "Ivã Gurgel", type: "talk", location: "Auditório Principal" },
      { time: "12:00", title: "Pausa almoço", type: "break" },
      { time: "14:00", title: "Palestra", speaker: "Yutao Xing", type: "talk", location: "Auditório Principal" },
      { time: "15:00", title: "Comunicações (Ensino, AC, FT)", type: "poster", location: "Sala de Apresentações" },
      { time: "16:00", title: "Pausa", type: "break", location: "Foyer" },
      { time: "16:30", title: "Comunicações (FMC, EE)", type: "poster", location: "Sala de Apresentações" },
      { time: "17:10", title: "Palestra", speaker: "Humberto Belich", type: "talk", location: "Auditório Principal" },
      { time: "18:10", title: "Homenagens", type: "award", location: "Auditório Principal" },
      { time: "19:00", title: "Jantar de confraternização", type: "social", location: "Restaurante" },
    ],
  },
  {
    date: "11/09",
    dayName: "Sexta-feira",
    activities: [
      { time: "09:00", title: "Palestra", speaker: "Giuseppe Dito", type: "talk", location: "Auditório Principal" },
      { time: "10:00", title: "Comunicações (AC, FT)", type: "poster", location: "Sala de Apresentações" },
      { time: "10:40", title: "Pausa", type: "break", location: "Foyer" },
      { time: "11:00", title: "Palestra", speaker: "Wiliam Ricaldi", type: "talk", location: "Auditório Principal" },
      { time: "12:00", title: "Pausa almoço", type: "break" },
      { time: "14:00", title: "Palestra", speaker: "Marcos Gonçalves Menezes", type: "talk", location: "Auditório Principal" },
      { time: "15:00", title: "Comunicações (EE, Ensino, AC)", type: "poster", location: "Sala de Apresentações" },
      { time: "16:00", title: "Pausa", type: "break", location: "Foyer" },
      { time: "16:30", title: "Comunicação (FMC)", type: "poster", location: "Sala de Apresentações" },
      { time: "16:50", title: "Palestra", speaker: "Jorge Luiz Gonzalez", type: "talk", location: "Auditório Principal" },
      { time: "17:50", title: "Palestra", speaker: "Antônio Varandas", type: "talk", location: "Auditório Principal" },
      { time: "18:50", title: "Discussões e Encerramento", type: "social", location: "Auditório Principal" },
    ],
  },
];

const typeConfig: Record<Activity["type"], { icon: typeof Clock; color: string; bg: string; borderColor: string; iconBg: string; label: string }> = {
  opening: {
    icon: Mic2,
    color: "text-violet-700",
    bg: "bg-violet-50",
    borderColor: "border-l-violet-500",
    iconBg: "bg-violet-500",
    label: "Abertura"
  },
  talk: {
    icon: Mic2,
    color: "text-blue-700",
    bg: "bg-blue-50",
    borderColor: "border-l-blue-500",
    iconBg: "bg-blue-500",
    label: "Palestra"
  },
  break: {
    icon: Coffee,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    borderColor: "border-l-emerald-500",
    iconBg: "bg-emerald-500",
    label: "Intervalo"
  },
  workshop: {
    icon: BookOpen,
    color: "text-red-700",
    bg: "bg-red-50",
    borderColor: "border-l-red-500",
    iconBg: "bg-red-500",
    label: "Minicurso"
  },
  poster: {
    icon: Users,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    borderColor: "border-l-cyan-500",
    iconBg: "bg-cyan-500",
    label: "Apresentação"
  },
  lab: {
    icon: FlaskConical,
    color: "text-orange-700",
    bg: "bg-orange-50",
    borderColor: "border-l-orange-500",
    iconBg: "bg-orange-500",
    label: "Laboratório"
  },
  award: {
    icon: Award,
    color: "text-amber-700",
    bg: "bg-amber-50",
    borderColor: "border-l-amber-500",
    iconBg: "bg-amber-500",
    label: "Premiação"
  },
  social: {
    icon: Users,
    color: "text-pink-700",
    bg: "bg-pink-50",
    borderColor: "border-l-pink-500",
    iconBg: "bg-pink-500",
    label: "Encerramento"
  },
};

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  const day = schedule[activeDay];

  return (
    <section id="cronograma" className="bg-white">
      <div className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-slate-900 text-3xl font-bold mb-2">
            Programação
          </h2>
          <p className="text-slate-600">
            09 a 11 de setembro de 2026 • IFES Serra
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 mb-8">
          {schedule.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`px-5 py-2 rounded-lg border transition-colors ${
                activeDay === i
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              <span className="font-medium text-sm">{d.dayName} • {d.date}</span>
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(typeConfig).map(([key, cfg]) => (
            <span
              key={key}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${cfg.bg} border border-slate-200`}
            >
              <div className={`w-3 h-3 rounded ${cfg.iconBg}`} />
              <span className={`text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
            </span>
          ))}
        </div>

        {/* Activities */}
        <div className="space-y-2">
          {day.activities.map((activity, i) => {
            const cfg = typeConfig[activity.type];
            const isBreak = activity.type === "break";
            return (
              <div
                key={i}
                className={`flex gap-3 p-4 rounded-lg border-l-4 border ${cfg.borderColor} ${cfg.bg} ${
                  isBreak ? "opacity-60" : ""
                }`}
              >
                {/* Time */}
                <div className="flex-shrink-0 w-14">
                  <span className={`font-mono text-sm font-semibold ${cfg.color}`}>
                    {activity.time}
                  </span>
                </div>

                {/* Icon */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${cfg.iconBg} flex items-center justify-center`}>
                  <cfg.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${cfg.color}`}>
                        {activity.title}
                      </p>
                      {activity.speaker && (
                        <p className="text-slate-700 text-xs mt-1">{activity.speaker}</p>
                      )}
                      {activity.location && (
                        <p className="text-slate-600 text-xs mt-0.5">📍 {activity.location}</p>
                      )}
                    </div>

                    {/* Type badge */}
                    <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${cfg.color} hidden sm:block`}>
                      {cfg.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-slate-500 text-xs mt-8">
          * Programação sujeita a pequenas alterações. Acompanhe nossas redes sociais.
        </p>
      </div>

      <SponsorsBar variant="light" />
    </section>
  );
}
