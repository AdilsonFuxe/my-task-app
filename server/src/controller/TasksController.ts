import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Tasks } from '../entity/Tasks';

class TasksController {
    public async index(request: Request, response: Response): Promise<Response>{
        const tasks = await getRepository(Tasks).find();
        return response.json(tasks);
    }

    public async show(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const task = await getRepository(Tasks).findOne(id);

        if(!task)
            return response.status(404).json({message: 'task not found'});
        return response.json(task);
    }

    public async store(request: Request, response: Response): Promise<Response>{
        const { title, description } = request.body;

        const task = await getRepository(Tasks).save({
            title,
            description
        });
        return response.json(task);
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;

        const task = await getRepository(Tasks).update(id, request.body);

        if(task.affected === 1){
            const task = await getRepository(Tasks).findOne(id);
            return response.json(task);
        }
        return response.status(400).json({message: 'task not found'});
    }

    public async remove(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const task = await getRepository(Tasks).delete(id);

        if(task.affected === 1)
            return response.json();
        return response.status(404).json({message: 'Task not found'});
    }
}

export default new TasksController();