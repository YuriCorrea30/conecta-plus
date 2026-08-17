import * as informacoesService from "../services/informacoes.service.js";

export async function listarInformacoes(req, res) {
    try {
        const { categoria, busca } = req.query;

        const informacoes = await informacoesService.listarInformacoes({
            categoria,
            busca
        });

        res.status(200).json({
            sucesso: true,
            total: informacoes.length,
            dados: informacoes
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao listar informações."
        });
    }
}

export async function buscarInformacao(req, res) {
    try {
        const { id } = req.params;

        const informacao = await informacoesService.buscarInformacao(id);

        if (!informacao) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Informação não encontrada."
            });
        }

        res.status(200).json({
            sucesso: true,
            dados: informacao
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar informação."
        });
    }
}

export async function criarInformacao(req, res) {
    try {
        const { titulo, descricao, categoria, link } = req.body;

        if (!titulo || !descricao || !categoria) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "Título, descrição e categoria são obrigatórios."
            });
        }

        const informacao = await informacoesService.criarInformacao({
            titulo,
            descricao,
            categoria,
            link
        });

        res.status(201).json({
            sucesso: true,
            mensagem: "Informação cadastrada com sucesso.",
            dados: informacao
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao cadastrar informação."
        });
    }
}

export async function excluirInformacao(req, res) {
    try {
        const { id } = req.params;

        const removida = await informacoesService.excluirInformacao(id);

        if (!removida) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Informação não encontrada."
            });
        }

        res.status(200).json({
            sucesso: true,
            mensagem: "Informação excluída com sucesso."
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao excluir informação."
        });
    }
}