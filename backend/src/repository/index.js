import {startConnection, closeConnection} from '../database/index.js';

export default class TodoRepository {
    async init(){
        this.client = await startConnection();
    }
    
    async findAll(){
        const db = this.client.db('local');
        const collection = db.collection('todo-list');
        const todos = await collection.find();
        return todos;
    }

    async add(todo){
        await this.client.connect();
        const db = this.client.db('local');
        const collection = db.collection('todo-list');
        await collection.insertOne(todo);
    }

    async delete(todo){
        await this.client.connect();
        const db = this.client.db('local');
        const collection = db.collection('todo-list');
        await collection.deleteOne(todo);
    }

    async update(todo){
        await this.client.connect();
        const db = this.client.db('local');
        const collection = db.collection('todo-list');
        await collection.updateOne(todo);
    }

    async close(){
        closeConnection(this.client);
    }
}