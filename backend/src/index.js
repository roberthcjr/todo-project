import express from 'express';
import bodyParser from 'body-parser';
import TodoService from './service/index.js';

const app = express();

app.use(bodyParser.json());

app.get('/tasks', async (req, res, next) => {
    let todoService;
    try {
        todoService = new TodoService();
        await todoService.init();
        const todos = await todoService.getAllTodos();
        res.json(todos);
    } catch (error) {
        next(error);
    } finally {
        if(todoService) await todoService.close();
    }
}
);

app.post('/tasks', async (req, res, next) => {
    let todoService;
    try {
        todoService = new TodoService();
        await todoService.init();
        await todoService.add(req.body.task);
        res.status(201).send();
    } catch (error) {
        next(error);
    } finally {
        if(todoService) await todoService.close();
    }
}
);

app.delete('/tasks', async (req, res, next) => {
    let todoService;
    try {
        todoService = new TodoService();
        await todoService.init();
        await todoService.delete(req.body.id);
        res.status(200).send();
    } catch (error) {
        next(error);
    } finally {
        if(todoService) await todoService.close();
    }
});

app.put('/tasks', async (req, res, next) => {
    let todoService;
    try {
        todoService = new TodoService();
        await todoService.init();
        await todoService.update(req.body);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        next(error);
    } finally {
        if(todoService) await todoService.close();
    }
})

app.use((err, req, res, next) => {
    res.status(err.status).send(err.message);
    }
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });