function Dashboard({ informacoes }) {
  const totalInformacoes = informacoes.length;

  const totalAlertas = informacoes.filter(
    (informacao) => informacao.categoria === "alerta"
  ).length;

  const totalInformacoesCategoria = informacoes.filter(
    (informacao) => informacao.categoria === "informacao"
  ).length;

  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Visão geral do Conecta Plus</p>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Total</h3>
          <strong>{totalInformacoes}</strong>
          <p>Informações cadastradas</p>
        </div>

        <div className="card">
          <h3>Alertas</h3>
          <strong>{totalAlertas}</strong>
          <p>Alertas registrados</p>
        </div>

        <div className="card">
          <h3>Informações</h3>
          <strong>{totalInformacoesCategoria}</strong>
          <p>Informações disponíveis</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;