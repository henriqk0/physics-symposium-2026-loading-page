import { MapPin, Navigation } from "lucide-react";

export function Location() {
  const googleMapsUrl = "https://www.google.com/maps/place/IFES+-+Campus+Serra/@-20.1280556,-40.3080556,17z/data=!3m1!4b1!4m6!3m5!1s0xb8179f3b3b3b3b3b:0x3b3b3b3b3b3b3b3b!8m2!3d-20.1280556!4d-40.3054807!16s%2Fg%2F11b6z3z3z3";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8!2d-40.3054807!3d-20.1280556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzQxLjAiUyA0MMKwMTgnMTkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr";

  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-slate-900 text-3xl font-bold mb-2">
            Localização
          </h2>
          <p className="text-slate-600">
            IFES Campus Serra
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-semibold mb-1">Endereço</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Av. Talma Rodrigues Ribeiro, 3.100<br />
                    Portal de Jacaraípe<br />
                    Serra - ES, 29173-087
                  </p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
              >
                <Navigation className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>

            <div className="mt-6 space-y-3">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h4 className="text-slate-900 font-semibold text-sm mb-1">
                  Como chegar
                </h4>
                <p className="text-slate-600 text-sm">
                  O campus fica a aproximadamente 20 km do centro de Vitória, acessível pela Rodovia Norte-Sul.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h4 className="text-slate-900 font-semibold text-sm mb-1">
                  Estacionamento
                </h4>
                <p className="text-slate-600 text-sm">
                  O IFES Serra possui estacionamento gratuito para participantes do evento.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[300px]">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border border-slate-200"
              title="Localização do IFES Serra"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
