import { Router } from "express";

import {
    listarAlertas,
    buscarAlerta,
    criarAlerta
} from "../controllers/alertas.controller.js";

const router = Router();

router.get("/", listarAlertas);

router.get("/:id", buscarAlerta);

router.post("/", criarAlerta);

export default router;