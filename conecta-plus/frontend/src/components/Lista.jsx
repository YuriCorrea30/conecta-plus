import { Link } from "react-router-dom";

function Lista() {
  return (
    <section className="lista">
      <div className="lista-header">
        <div>
          <h1>Informações</h1>
          <p>Confira as informações disponíveis no Conecta Plus.</p>
        </div>

        <Link to="/nova-informacao" className="botao-principal">
          + Nova informação
        </Link>
      </div>

      <div className="lista-cards">

        <div className="info-card">
          <span className="categoria">Informação</span>

          <h3>Informação 1</h3>

          <p>
            Exemplo de informação importante para os usuários
            do Conecta Plus.
          </p>

          <button className="botao-secundario">
            Ver detalhes
          </button>
        </div>

        <div className="info-card">
          <span className="categoria">Orientação</span>

          <h3>Informação 2</h3>

          <p>
            Outra informação importante disponível para os
            usuários.
          </p>

          <button className="botao-secundario">
            Ver detalhes
          </button>
        </div>

        <div className="info-card">
          <span className="categoria">Alerta</span>

          <h3>Informação 3</h3>

          <p>
            Alerta ou orientação que pode ser exibido no sistema.
          </p>

          <button className="botao-secundario">
            Ver detalhes
          </button>
        </div>

      </div>
    </section>
  );
}

export default Lista;