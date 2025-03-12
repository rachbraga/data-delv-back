import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
    {

    }
)

const submission = mongoose.model("submission",submissionSchema);

export default submission;