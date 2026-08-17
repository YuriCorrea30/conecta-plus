function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Visão geral do Conecta Plus</p>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Usuários</h3>
          <strong>0</strong>
          <p>Usuários cadastrados</p>
        </div>

        <div className="card">
          <h3>Alertas</h3>
          <strong>0</strong>
          <p>Alertas registrados</p>
        </div>

        <div className="card">
          <h3>Informações</h3>
          <strong>0</strong>
          <p>Informações disponíveis</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;