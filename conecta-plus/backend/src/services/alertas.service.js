let alertas = [
    {
        id: "1",
        titulo: "Cuidado com links desconhecidos",
        descricao:
            "Evite clicar em links recebidos de pessoas ou empresas desconhecidas.",
        nivel: "alto",
        categoria: "Links suspeitos",
        criadoEm: new Date().toISOString()
    },
    {
        id: "2",
        titulo: "Desconfie de pedidos urgentes",
        descricao:
            "Golpistas podem utilizar mensagens urgentes para pressionar a vítima.",
        nivel: "medio",
        categoria: "Mensagens suspeitas",
        criadoEm: new Date().toISOString()
    }
];

export async function listarAlertas() {
    return alertas;
}

export async function buscarAlerta(id) {
    return alertas.find((alerta) => alerta.id === id);
}

export async function criarAlerta(dados) {
    const novoAlerta = {
        id: Date.now().toString(),
        titulo: dados.titulo,
        descricao: dados.descricao,
        nivel: dados.nivel,
        categoria: dados.categoria,
        criadoEm: new Date().toISOString()
    };

    alertas.push(novoAlerta);

    return novoAlerta;
}