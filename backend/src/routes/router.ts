import { Router } from "express";

import { handleLevel } from "../controllers/endpoints.js";

const router = Router();

router.get("/:level", handleLevel);

export default router;
