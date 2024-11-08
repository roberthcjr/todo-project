import { responseHandler } from "../utils/responseHandler.js";
import { v4 as uuid } from "uuid";
import TodoRepository from "../repository/index.js";

export default class TodoService {
    async init() {
        this.todoRepository = new TodoRepository();
        await this.todoRepository.init();
    }

    async getAllTodos() {
        const todos = (await this.todoRepository.findAll()).toArray();
        if ((await todos).length === 0)
            throw responseHandler(404, "No todos found");
        return todos;
    }

    async add(task) {
        const todo = {
            id: uuid(),
            task,
            created_at: new Date(),
            status: "pending",
        };
        await this.todoRepository.add(todo);
    }

    async delete(id) {
        await this.todoRepository.delete(id);
    }

    async update(todo) {
        const queryResponse = await this.todoRepository.update(todo);
        if (queryResponse.modifiedCount === 0)
            throw responseHandler(304, "No data was modified");
    }

    async close() {
        await this.todoRepository.close();
    }
}
