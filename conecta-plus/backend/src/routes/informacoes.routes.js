import { Router } from "express";

import {
    listarInformacoes,
    buscarInformacao,
    criarInformacao,
    excluirInformacao
} from "../controllers/informacoes.controller.js";

const router = Router();

router.get("/", listarInformacoes);

router.get("/:id", buscarInformacao);

router.post("/", criarInformacao);

router.delete("/:id", excluirInformacao);

export default router;