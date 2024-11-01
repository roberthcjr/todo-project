import { MongoClient } from 'mongodb';

export const startConnection = async () => {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    return client;
}

export const closeConnection = async (client) => {
    await client.close();
}