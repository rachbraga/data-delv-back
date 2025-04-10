import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
    {
        answers: {
            type: [Boolean],
            required: true   
        },
        email: {
            type: String,
            required: true,
            trim: true,     
            lowercase: true, 
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            match: [/^\d{10,11}$/, "Número de telefone inválido"] 
        },
        isChecked: { type: Boolean, default: false }
    },
    { timestamps: true } 
);

const Submission = mongoose.model("submission", submissionSchema);

export default Submission;
