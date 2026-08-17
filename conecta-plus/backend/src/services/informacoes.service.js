let informacoes = [
    {
        id: "1",
        titulo: "Como utilizar a internet com segurança",
        descricao:
            "Confira dicas para navegar na internet de maneira mais segura.",
        categoria: "Segurança Digital",
        link: "",
        criadoEm: new Date().toISOString()
    },
    {
        id: "2",
        titulo: "Como identificar mensagens suspeitas",
        descricao:
            "Aprenda a reconhecer características comuns de mensagens fraudulentas.",
        categoria: "Golpes",
        link: "",
        criadoEm: new Date().toISOString()
    }
];

export async function listarInformacoes({ categoria, busca }) {
    let resultado = [...informacoes];

    if (categoria) {
        resultado = resultado.filter(
            (item) =>
                item.categoria.toLowerCase() === categoria.toLowerCase()
        );
    }

    if (busca) {
        const termo = busca.toLowerCase();

        resultado = resultado.filter(
            (item) =>
                item.titulo.toLowerCase().includes(termo) ||
                item.descricao.toLowerCase().includes(termo)
        );
    }

    return resultado;
}

export async function buscarInformacao(id) {
    return informacoes.find((item) => item.id === id);
}

export async function criarInformacao(dados) {
    const novaInformacao = {
        id: Date.now().toString(),
        titulo: dados.titulo,
        descricao: dados.descricao,
        categoria: dados.categoria,
        link: dados.link || "",
        criadoEm: new Date().toISOString()
    };

    informacoes.push(novaInformacao);

    return novaInformacao;
}

export async function excluirInformacao(id) {
    const indice = informacoes.findIndex((item) => item.id === id);

    if (indice === -1) {
        return null;
    }

    const removida = informacoes[indice];

    informacoes.splice(indice, 1);

    return removida;
}