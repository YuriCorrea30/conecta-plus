import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";

import DashboardPage from "./pages/DashboardPage";
import AlertasPage from "./pages/AlertasPage";
import InformacoesPage from "./pages/InformacoesPage";
import OrientacoesPage from "./pages/OrientacoesPage";
import UsuariosPage from "./pages/UsuariosPage";
import FormularioPage from "./pages/FormularioPage";

function App() {
  const [informacoes, setInformacoes] = useState([
    {
      id: 1,
      titulo: "Uso consciente da internet",
      categoria: "alerta",
      descricao: "Utilize a internet de forma segura e responsável."
    },
    {
      id: 2,
      titulo: "Organização dos estudos",
      categoria: "informacao",
      descricao: "Crie uma rotina para melhorar seus estudos."
    },
    {
      id: 3,
      titulo: "Cuidados com a saúde",
      categoria: "orientacao",
      descricao: "Mantenha hábitos saudáveis no seu dia a dia."
    }
  ]);

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route
          path="/"
          element={<DashboardPage informacoes={informacoes} />}
        />

        <Route path="/alertas" element={<AlertasPage />} />

        <Route
          path="/informacoes"
          element={
            <InformacoesPage
              informacoes={informacoes}
              setInformacoes={setInformacoes}
            />
          }
        />

        <Route path="/orientacoes" element={<OrientacoesPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />

        <Route
          path="/nova-informacao"
          element={
            <FormularioPage
              informacoes={informacoes}
              setInformacoes={setInformacoes}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;