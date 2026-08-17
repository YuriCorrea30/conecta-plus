import * as orientacoesService from "../services/orientacoes.service.js";

export async function listarOrientacoes(req, res) {
    try {
        const { categoria } = req.query;

        const orientacoes =
            await orientacoesService.listarOrientacoes(categoria);

        res.status(200).json({
            sucesso: true,
            total: orientacoes.length,
            dados: orientacoes
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao listar orientações."
        });
    }
}

export async function buscarOrientacao(req, res) {
    try {
        const { id } = req.params;

        const orientacao =
            await orientacoesService.buscarOrientacao(id);

        if (!orientacao) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Orientação não encontrada."
            });
        }

        res.status(200).json({
            sucesso: true,
            dados: orientacao
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar orientação."
        });
    }
}