import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Palestrantes from "./pages/Palestrantes";
import Cronograma from "./pages/Cronograma";
import Inscricoes from "./pages/Inscricoes";
import Hospedagem from "./pages/Hospedagem";
import FormularioInscricao from "./pages/FormularioInscricao";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "palestrantes", Component: Palestrantes },
      { path: "cronograma", Component: Cronograma },
      { path: "inscricoes", Component: Inscricoes },
      { path: "inscricoes/formulario", Component: FormularioInscricao },
      { path: "hospedagem", Component: Hospedagem },
    ],
  },
]);
