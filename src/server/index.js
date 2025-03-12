import express from 'express';
import cors from 'cors';
import { routes } from '../routes/index.js';
import mongodb from '../infra/connectMongo.js';

const app = express()

app.use(express.json());
app.use(cors({origin:"*"}));
routes(app)
db.on("error", console.log.bind(console, "Erro de conexão"))
mongodb.once("open", () => {
    console.log('Conexão com o banco de feita com sucesso')
})


inicialize();

async function inicialize () {

    app.listen(50500, () => {
        console.log(`servidor rodando no endereço http://localhost:${50500}`)
    })        
}