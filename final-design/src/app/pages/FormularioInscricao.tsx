import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { ArrowLeft, User, Mail, Phone, FileText, Building2, CreditCard, QrCode } from "lucide-react";
import { SponsorsSection } from "../components/SponsorsSection";

const categoryMap: Record<string, string> = {
  grad: "Estudante de Graduação",
  posgrad: "Estudante de Pós-Graduação",
  prof: "Profissional / Professor",
};

const priceMap: Record<string, { lote1: number; lote2: number; lote3: number }> = {
  grad: { lote1: 30, lote2: 36, lote3: 42 },
  posgrad: { lote1: 50, lote2: 60, lote3: 70 },
  prof: { lote1: 80, lote2: 96, lote3: 112 },
};

export default function FormularioInscricao() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("categoria") || "grad";
  const [selectedLote, setSelectedLote] = useState<"lote1" | "lote2" | "lote3">("lote1");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "credito">("pix");

  const categoryName = categoryMap[category] || "Estudante de Graduação";
  const price = priceMap[category]?.[selectedLote] || 30;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulário enviado! Você receberá um e-mail com as instruções de pagamento.");
  };

  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-blue-50/30 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate("/inscricoes")}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Inscrições
          </button>

          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-8">
            <h1 className="text-slate-900 text-2xl font-bold mb-2">
              Formulário de Inscrição
            </h1>
            <p className="text-slate-600 mb-6">
              Categoria: <strong>{categoryName}</strong>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dados Pessoais */}
              <div>
                <h3 className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Dados Pessoais
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      CPF *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="000.000.000-00"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Dados Institucionais */}
              <div>
                <h3 className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  Dados Institucionais
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Instituição *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Nome da instituição"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Curso / Área *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Ex: Engenharia, Biologia"
                    />
                  </div>
                </div>
                {category !== "prof" && (
                  <div className="mt-4">
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Comprovante de Matrícula *
                    </label>
                    <input
                      type="file"
                      required
                      accept=".pdf,.jpg,.png"
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p className="text-slate-500 text-xs mt-1">
                      Formatos aceitos: PDF, JPG, PNG (máx. 5MB)
                    </p>
                  </div>
                )}
              </div>

              {/* Seleção de Lote */}
              <div>
                <h3 className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Selecione o Lote
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedLote === "lote1"
                      ? "border-green-500 bg-green-50"
                      : "border-slate-200 hover:border-green-300"
                  }`}>
                    <input
                      type="radio"
                      name="lote"
                      value="lote1"
                      checked={selectedLote === "lote1"}
                      onChange={(e) => setSelectedLote(e.target.value as "lote1")}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold text-green-700">1º Lote</div>
                      <div className="text-sm text-slate-600">Até 31/05/2026</div>
                      <div className="text-lg font-bold text-green-700 mt-1">
                        R$ {priceMap[category].lote1}
                      </div>
                    </div>
                  </label>

                  <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedLote === "lote2"
                      ? "border-amber-500 bg-amber-50"
                      : "border-slate-200 hover:border-amber-300"
                  }`}>
                    <input
                      type="radio"
                      name="lote"
                      value="lote2"
                      checked={selectedLote === "lote2"}
                      onChange={(e) => setSelectedLote(e.target.value as "lote2")}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold text-amber-700">2º Lote</div>
                      <div className="text-sm text-slate-600">01/06 a 30/06</div>
                      <div className="text-lg font-bold text-amber-700 mt-1">
                        R$ {priceMap[category].lote2}
                      </div>
                    </div>
                  </label>

                  <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedLote === "lote3"
                      ? "border-red-500 bg-red-50"
                      : "border-slate-200 hover:border-red-300"
                  }`}>
                    <input
                      type="radio"
                      name="lote"
                      value="lote3"
                      checked={selectedLote === "lote3"}
                      onChange={(e) => setSelectedLote(e.target.value as "lote3")}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold text-red-700">3º Lote</div>
                      <div className="text-sm text-slate-600">01/07 a 10/07</div>
                      <div className="text-lg font-bold text-red-700 mt-1">
                        R$ {priceMap[category].lote3}
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Forma de Pagamento */}
              <div>
                <h3 className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  Forma de Pagamento
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "pix"
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-blue-300"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={paymentMethod === "pix"}
                      onChange={(e) => setPaymentMethod(e.target.value as "pix")}
                      className="mr-2"
                    />
                    <div className="flex items-center gap-3">
                      <QrCode className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-slate-900">PIX</div>
                        <div className="text-sm text-slate-600">Pagamento instantâneo</div>
                      </div>
                    </div>
                  </label>

                  <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "credito"
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-blue-300"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="credito"
                      checked={paymentMethod === "credito"}
                      onChange={(e) => setPaymentMethod(e.target.value as "credito")}
                      className="mr-2"
                    />
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Cartão de Crédito</div>
                        <div className="text-sm text-slate-600">Até 3x sem juros</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Resumo */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-slate-900 font-semibold mb-3">Resumo da Inscrição</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Categoria:</span>
                    <span className="text-slate-900 font-medium">{categoryName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Lote:</span>
                    <span className="text-slate-900 font-medium">
                      {selectedLote === "lote1" ? "1º Lote" : selectedLote === "lote2" ? "2º Lote" : "3º Lote"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Forma de Pagamento:</span>
                    <span className="text-slate-900 font-medium">
                      {paymentMethod === "pix" ? "PIX" : "Cartão de Crédito"}
                    </span>
                  </div>
                  <div className="h-px bg-blue-200 my-3"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-900 font-semibold">Total:</span>
                    <span className="text-blue-600 font-bold text-2xl">R$ {price}</span>
                  </div>
                </div>
              </div>

              {/* Botão de Enviar */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Finalizar Inscrição
              </button>

              <p className="text-slate-500 text-xs text-center">
                Ao finalizar, você receberá um e-mail com as instruções de pagamento e confirmação.
              </p>
            </form>
          </div>
        </div>
      </section>

      <SponsorsSection />
    </>
  );
}
