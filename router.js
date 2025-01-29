import { Router } from "express";
import { getAll, getOne, create, update, deletePost } from "./PostController.js";

const router =  Router();


router.post("/posts", create);
router.get("/posts", getAll);
router.get("/posts/:id", getOne);
router.put("/posts/:id", update);
router.delete("/posts/:id", deletePost);

export default router;