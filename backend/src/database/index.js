import { MongoClient } from "mongodb";

export const createClient = () => {
    const startConnection = async () => {
        const client = new MongoClient("mongodb://localhost:27017");
        await client.connect();
        return client;
    };

    const closeConnection = async (client) => {
        await client.close();
    };

    return {
        startConnection,
        closeConnection,
    };
};
