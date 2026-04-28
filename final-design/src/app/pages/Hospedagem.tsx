import { MapPin, Phone, Mail, DollarSign } from "lucide-react";
import { SponsorsSection } from "../components/SponsorsSection";

const hotels = [
  {
    name: "Hotel Canela",
    address: "Rua João Calmon, 123 - Laranjeiras, Serra",
    phone: "(27) 3328-1234",
    email: "contato@hotelcanela.com.br",
    price: "R$ 150-200",
    distance: "5 km do IFES Serra",
  },
  {
    name: "Pousada Mar Azul",
    address: "Av. Central de Laranjeiras, 456 - Laranjeiras, Serra",
    phone: "(27) 3328-5678",
    email: "reservas@marazul.com.br",
    price: "R$ 120-180",
    distance: "4 km do IFES Serra",
  },
  {
    name: "Hotel Jacaraípe",
    address: "Av. Jacaraípe, 789 - Jacaraípe, Serra",
    phone: "(27) 3251-9012",
    email: "hotel@jacaraipe.com.br",
    price: "R$ 180-250",
    distance: "2 km do IFES Serra",
  },
  {
    name: "Pousada Serra Verde",
    address: "Rua das Palmeiras, 321 - Serra Sede",
    phone: "(27) 3338-4567",
    email: "pousada@serraverde.com.br",
    price: "R$ 100-150",
    distance: "8 km do IFES Serra",
  },
];

export default function Hospedagem() {
  return (
    <>
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-slate-900 text-3xl font-bold mb-2">
              Hospedagem
            </h2>
            <p className="text-slate-600">
              Sugestões de hotéis e pousadas próximos ao local do evento
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-slate-700 text-sm">
              <strong>Importante:</strong> As acomodações listadas são sugestões. O SRFES não possui convênio oficial com nenhum estabelecimento. Recomendamos entrar em contato diretamente para verificar disponibilidade e valores.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {hotels.map((hotel) => (
              <div
                key={hotel.name}
                className="bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors"
              >
                <h3 className="text-slate-900 font-semibold text-lg mb-3">
                  {hotel.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-700">{hotel.address}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{hotel.distance}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <a
                      href={`tel:${hotel.phone.replace(/\D/g, "")}`}
                      className="text-slate-700 hover:text-blue-600"
                    >
                      {hotel.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <a
                      href={`mailto:${hotel.email}`}
                      className="text-slate-700 hover:text-blue-600 break-all"
                    >
                      {hotel.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-sm pt-2 border-t border-slate-200">
                    <DollarSign className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-900 font-medium">{hotel.price}</span>
                    <span className="text-slate-500 text-xs">por noite</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-lg">
            <h3 className="text-slate-900 font-semibold mb-2">
              Outras Opções
            </h3>
            <p className="text-slate-600 text-sm mb-3">
              Você também pode buscar acomodações em plataformas como:
            </p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Airbnb - Apartamentos e casas na região</li>
              <li>• Booking.com - Hotéis e pousadas</li>
              <li>• Trivago - Comparador de preços de hotéis</li>
            </ul>
          </div>
        </div>
      </section>

      <SponsorsSection />
    </>
  );
}
