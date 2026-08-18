import { useState } from "react";

function Formulario({ informacoes, setInformacoes }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

   const novaInformacao = {
  id: Date.now(),
  titulo: titulo,
  descricao: descricao,
  categoria: categoria
};

setInformacoes([...informacoes, novaInformacao]);

    alert("Informação cadastrada com sucesso!");

    setTitulo("");
    setDescricao("");
    setCategoria("");
  }

  return (
    <section className="formulario">
      <div className="formulario-header">
        <h1>Cadastrar Informação</h1>

        <p>
          Adicione uma nova informação ao Conecta Plus.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="campo">
          <label htmlFor="titulo">
            Título
          </label>

          <input
            id="titulo"
            type="text"
            placeholder="Digite o título"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="descricao">
            Descrição
          </label>

          <textarea
            id="descricao"
            placeholder="Digite a descrição"
            rows="5"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            required
          ></textarea>
        </div>

        <div className="campo">
          <label htmlFor="categoria">
            Categoria
          </label>

          <select
            id="categoria"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
            required
          >
            <option value="">
              Selecione uma categoria
            </option>

            <option value="alerta">
              Alerta
            </option>

            <option value="informacao">
              Informação
            </option>

            <option value="orientacao">
              Orientação
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="botao-principal"
        >
          Cadastrar informação
        </button>

      </form>
    </section>
  );
}

export default Formulario;