import * as alertasService from "../services/alertas.service.js";

export async function listarAlertas(req, res) {
    try {
        const alertas = await alertasService.listarAlertas();

        res.status(200).json({
            sucesso: true,
            total: alertas.length,
            dados: alertas
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao listar alertas."
        });
    }
}

export async function buscarAlerta(req, res) {
    try {
        const { id } = req.params;

        const alerta = await alertasService.buscarAlerta(id);

        if (!alerta) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Alerta não encontrado."
            });
        }

        res.status(200).json({
            sucesso: true,
            dados: alerta
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar alerta."
        });
    }
}

export async function criarAlerta(req, res) {
    try {
        const { titulo, descricao, nivel, categoria } = req.body;

        if (!titulo || !descricao || !nivel || !categoria) {
            return res.status(400).json({
                sucesso: false,
                mensagem:
                    "Título, descrição, nível e categoria são obrigatórios."
            });
        }

        const alerta = await alertasService.criarAlerta({
            titulo,
            descricao,
            nivel,
            categoria
        });

        res.status(201).json({
            sucesso: true,
            mensagem: "Alerta criado com sucesso.",
            dados: alerta
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao criar alerta."
        });
    }
}