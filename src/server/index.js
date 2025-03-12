import express from 'express';
import cors from 'cors';
import { routes } from '../routes/index.js';

const app = express()

app.use(express.json());
app.use(cors({origin:"*"}));
routes(app)

inicialize();

async function inicialize () {

    app.listen(50500, () => {
        console.log(`servidor rodando no endereço http://localhost:${50500}`)
    })        
}