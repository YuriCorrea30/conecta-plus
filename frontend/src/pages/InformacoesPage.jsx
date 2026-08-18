import Lista from "../components/Lista";

function InformacoesPage({ informacoes, setInformacoes }) {
  return (
    <Lista
      informacoes={informacoes}
      setInformacoes={setInformacoes}
    />
  );
}

export default InformacoesPage;