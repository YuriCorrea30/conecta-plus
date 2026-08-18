import { useState } from "react";
import { Link } from "react-router-dom";

function Lista({ informacoes, setInformacoes }) {
  const [filtro, setFiltro] = useState("Todos");
  const [informacaoEditando, setInformacaoEditando] = useState(null);

  const informacoesFiltradas =
    filtro === "Todos"
      ? informacoes
      : informacoes.filter(
          (informacao) => informacao.categoria === filtro
        );

  function excluirInformacao(id) {
    const novasInformacoes = informacoes.filter(
      (informacao) => informacao.id !== id
    );

    setInformacoes(novasInformacoes);
  }

  function iniciarEdicao(informacao) {
    setInformacaoEditando(informacao);
  }

  function salvarEdicao() {
    const novasInformacoes = informacoes.map((informacao) =>
      informacao.id === informacaoEditando.id
        ? informacaoEditando
        : informacao
    );

    setInformacoes(novasInformacoes);
    setInformacaoEditando(null);

    alert("Informação atualizada com sucesso!");
  }

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

      <div className="filtros">
        <button onClick={() => setFiltro("Todos")}>
          Todos
        </button>

        <button onClick={() => setFiltro("alerta")}>
          Alertas
        </button>

        <button onClick={() => setFiltro("informacao")}>
          Informações
        </button>

        <button onClick={() => setFiltro("orientacao")}>
          Orientações
        </button>
      </div>

      {informacaoEditando && (
        <div className="formulario-edicao">
          <h2>Editando: {informacaoEditando.titulo}</h2>

          <input
            type="text"
            value={informacaoEditando.titulo}
            onChange={(event) =>
              setInformacaoEditando({
                ...informacaoEditando,
                titulo: event.target.value
              })
            }
          />

          <textarea
            value={informacaoEditando.descricao}
            onChange={(event) =>
              setInformacaoEditando({
                ...informacaoEditando,
                descricao: event.target.value
              })
            }
          />

          <button
            className="botao-principal"
            onClick={salvarEdicao}
          >
            Salvar alterações
          </button>
        </div>
      )}

      <div className="lista-cards">
        {informacoesFiltradas.map((informacao) => (
          <div className="info-card" key={informacao.id}>
            <span className="categoria">
              {informacao.categoria}
            </span>

            <h3>{informacao.titulo}</h3>

            <p>{informacao.descricao}</p>

            <button className="botao-secundario">
              Ver detalhes
            </button>

            <button
              className="botao-secundario"
              onClick={() => iniciarEdicao(informacao)}
            >
              Editar
            </button>

            <button
              className="botao-secundario"
              onClick={() => excluirInformacao(informacao.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Lista;