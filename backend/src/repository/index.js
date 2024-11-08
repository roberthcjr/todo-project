import { createClient } from "../database/index.js";

export default class TodoRepository {
    async init() {
        this.clientMiddleware = createClient();
        this.client = await this.clientMiddleware.startConnection();
    }

    async findAll() {
        const db = this.client.db("local");
        const collection = db.collection("todo-list");
        const todos = await collection.find();
        return todos;
    }

    async add(todo) {
        await this.client.connect();
        const db = this.client.db("local");
        const collection = db.collection("todo-list");
        await collection.insertOne(todo);
    }

    async delete(id) {
        await this.client.connect();
        const db = this.client.db("local");
        const collection = db.collection("todo-list");
        await collection.deleteOne({ id });
    }

    async update(todo) {
        const { id } = todo;
        await this.client.connect();
        const db = this.client.db("local");
        const collection = db.collection("todo-list");
        return await collection.updateOne({ id }, { $set: todo });
    }

    async close() {
        this.clientMiddleware.closeConnection(this.client);
    }
}
