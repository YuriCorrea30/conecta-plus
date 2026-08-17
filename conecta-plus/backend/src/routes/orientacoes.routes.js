import { Router } from "express";

import {
    listarOrientacoes,
    buscarOrientacao
} from "../controllers/orientacoes.controller.js";

const router = Router();

router.get("/", listarOrientacoes);

router.get("/:id", buscarOrientacao);

export default router;