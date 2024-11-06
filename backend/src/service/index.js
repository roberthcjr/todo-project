import { responseHandler } from '../utils/responseHandler.js';
import TodoRepository from '../repository/index.js';

export default class TodoService {
    async init(){
        this.todoRepository = new TodoRepository();
        await this.todoRepository.init();
    }

    async getAllTodos(){
        const todos = (await this.todoRepository.findAll()).toArray();
        if((await todos).length === 0) throw responseHandler(404, 'No todos found');
        return todos;
    }

    async add(task){
        const todo = {
            task,
            created_at: new Date(),
            status: 'pending'
        };
        console.log(todo);
        await this.todoRepository.add(todo);
    }

    async delete(id){
        await this.todoRepository.delete(id);
    }

    async update(todo){
        await this.todoRepository.update(todo);
    }

    async close(){
        await this.todoRepository.close();
    }
}