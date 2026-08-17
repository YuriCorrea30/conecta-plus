import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";

import DashboardPage from "./pages/DashboardPage";
import AlertasPage from "./pages/AlertasPage";
import InformacoesPage from "./pages/InformacoesPage";
import OrientacoesPage from "./pages/OrientacoesPage";
import UsuariosPage from "./pages/UsuariosPage";
import FormularioPage from "./pages/FormularioPage";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/alertas" element={<AlertasPage />} />
        <Route path="/informacoes" element={<InformacoesPage />} />
        <Route path="/orientacoes" element={<OrientacoesPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route
          path="/nova-informacao"
          element={<FormularioPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;