import { Router } from "express";
import submission from "../model/submission";

const router = Router();


router.post("/api/submission", async (req, res) => {
    try {
        
    }catch (error) {
        res.status(400).send(error)
    }
})

export {router}