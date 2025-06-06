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

router.get("/api/submission/list", async (req, res) => {
  try {
      const submissions = await Submission.find(); // busca todos os registros
      res.status(200).json(submissions);
  } catch (error) {
      res.status(500).json({ error: "Erro ao buscar as submissões", details: error.message });
  }
});

router.put("/api/submission/:id/check", async (req, res) => {
    try {
      const { id } = req.params;
      const { isChecked } = req.body;
  
      const updatedSubmission = await Submission.findByIdAndUpdate(
        id,
        { isChecked },
        { new: true }
      );
  
      if (!updatedSubmission) {
        return res.status(404).json({ error: "Submissão não encontrada." });
      }
  
      res.status(200).json({
        message: "Status de check atualizado com sucesso.",
        submission: updatedSubmission,
      });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar", details: error.message });
    }
  });

export { router };
