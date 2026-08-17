import * as usuariosService from "../services/usuarios.service.js";

export async function listarUsuarios(req, res) {
    try {
        const usuarios = await usuariosService.listarUsuarios();

        res.status(200).json({
            sucesso: true,
            dados: usuarios
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao listar usuários."
        });
    }
}

export async function buscarUsuario(req, res) {
    try {
        const { id } = req.params;

        const usuario = await usuariosService.buscarUsuario(id);

        if (!usuario) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuário não encontrado."
            });
        }

        res.status(200).json({
            sucesso: true,
            dados: usuario
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar usuário."
        });
    }
}

export async function criarUsuario(req, res) {
    try {
        const { nome, email } = req.body;

        if (!nome || !email) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "Nome e e-mail são obrigatórios."
            });
        }

        const usuario = await usuariosService.criarUsuario({
            nome,
            email
        });

        res.status(201).json({
            sucesso: true,
            mensagem: "Usuário cadastrado com sucesso.",
            dados: usuario
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao cadastrar usuário."
        });
    }
}

export async function atualizarUsuario(req, res) {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;

        const usuario = await usuariosService.atualizarUsuario(id, {
            nome,
            email
        });

        if (!usuario) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuário não encontrado."
            });
        }

        res.status(200).json({
            sucesso: true,
            mensagem: "Usuário atualizado com sucesso.",
            dados: usuario
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao atualizar usuário."
        });
    }
}

export async function excluirUsuario(req, res) {
    try {
        const { id } = req.params;

        const usuario = await usuariosService.excluirUsuario(id);

        if (!usuario) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuário não encontrado."
            });
        }

        res.status(200).json({
            sucesso: true,
            mensagem: "Usuário excluído com sucesso."
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao excluir usuário."
        });
    }
}