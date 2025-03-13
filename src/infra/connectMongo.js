import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

try {
    await client.connect();
    console.log("Conectado ao MongoDB com sucesso!");
} catch (error) {
    console.error("Erro na conexão com o MongoDB:", error);
}

export default client;
