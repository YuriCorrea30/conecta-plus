import Formulario from "../components/Formulario";

function FormularioPage({ informacoes, setInformacoes }) {
  return (
    <Formulario
      informacoes={informacoes}
      setInformacoes={setInformacoes}
    />
  );
}

export default FormularioPage;