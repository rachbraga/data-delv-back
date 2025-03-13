import { Router } from "express";
import Submission from "../model/submissionModel.js"; 
import mongoose from "mongoose";

const router = Router();

router.post("/api/submission", async (req, res) => {
    try {
        const { answers, email, name, phone } = req.body; 

        
        if (!Array.isArray(answers) || answers.length !== 10) {
            return res.status(400).json({ error: "O campo 'answers' deve ter exatamente 10 valores booleanos." });
        }

        
        const submission = new Submission({ answers, email, name, phone });
        await submission.save();

        res.status(201).json({ message: "Formulário enviado com sucesso!", submission });
    } catch (error) {
        res.status(500).json({ error: "Erro ao salvar os dados", details: error.message });
    }
});

export { router };
