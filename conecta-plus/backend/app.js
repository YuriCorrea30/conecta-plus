import express from "express";
import cors from "cors";

import usuariosRoutes from "./routes/usuarios.routes.js";
import informacoesRoutes from "./routes/informacoes.routes.js";
import alertasRoutes from "./routes/alertas.routes.js";
import orientacoesRoutes from "./routes/orientacoes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        sucesso: true,
        mensagem: "Bem-vindo à API do Conecta+!",
        versao: "1.0.0"
    });
});

app.get("/api", (req, res) => {
    res.json({
        projeto: "Conecta+",
        mensagem: "API funcionando corretamente.",
        rotas: {
            usuarios: "/api/usuarios",
            informacoes: "/api/informacoes",
            alertas: "/api/alertas",
            orientacoes: "/api/orientacoes"
        }
    });
});

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/informacoes", informacoesRoutes);
app.use("/api/alertas", alertasRoutes);
app.use("/api/orientacoes", orientacoesRoutes);

app.use((req, res) => {
    res.status(404).json({
        sucesso: false,
        mensagem: "Rota não encontrada."
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        sucesso: false,
        mensagem: "Erro interno do servidor."
    });
});

export default app;