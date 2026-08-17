const orientacoes = [
    {
        id: "1",
        titulo: "Não compartilhe suas senhas",
        descricao:
            "Nunca compartilhe suas senhas com outras pessoas. Empresas sérias não costumam solicitar sua senha por mensagens.",
        categoria: "Senhas"
    },
    {
        id: "2",
        titulo: "Confira o endereço do site",
        descricao:
            "Antes de informar seus dados, confira se o endereço do site é realmente o oficial.",
        categoria: "Sites"
    },
    {
        id: "3",
        titulo: "Cuidado com mensagens urgentes",
        descricao:
            "Desconfie de mensagens que exigem pagamentos ou informações pessoais imediatamente.",
        categoria: "Golpes"
    },
    {
        id: "4",
        titulo: "Evite clicar em links desconhecidos",
        descricao:
            "Links desconhecidos podem direcionar você para páginas falsas ou maliciosas.",
        categoria: "Links"
    }
];

export async function listarOrientacoes(categoria) {
    if (!categoria) {
        return orientacoes;
    }

    return orientacoes.filter(
        (item) =>
            item.categoria.toLowerCase() === categoria.toLowerCase()
    );
}

export async function buscarOrientacao(id) {
    return orientacoes.find((item) => item.id === id);
}