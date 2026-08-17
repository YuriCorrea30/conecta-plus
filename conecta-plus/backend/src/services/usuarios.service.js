let usuarios = [];

export async function listarUsuarios() {
    return usuarios;
}

export async function buscarUsuario(id) {
    return usuarios.find((usuario) => usuario.id === id);
}

export async function criarUsuario(dados) {
    const novoUsuario = {
        id: Date.now().toString(),
        nome: dados.nome,
        email: dados.email,
        criadoEm: new Date().toISOString()
    };

    usuarios.push(novoUsuario);

    return novoUsuario;
}

export async function atualizarUsuario(id, dados) {
    const indice = usuarios.findIndex((usuario) => usuario.id === id);

    if (indice === -1) {
        return null;
    }

    usuarios[indice] = {
        ...usuarios[indice],
        nome: dados.nome ?? usuarios[indice].nome,
        email: dados.email ?? usuarios[indice].email,
        atualizadoEm: new Date().toISOString()
    };

    return usuarios[indice];
}

export async function excluirUsuario(id) {
    const indice = usuarios.findIndex((usuario) => usuario.id === id);

    if (indice === -1) {
        return null;
    }

    const usuarioRemovido = usuarios[indice];

    usuarios.splice(indice, 1);

    return usuarioRemovido;
}