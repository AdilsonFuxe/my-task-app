import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Tasks } from '../entity/Tasks';

class FinishedTaskController {
    public async finisehd(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const task = await getRepository(Tasks).update(id, { finished: true });

        if(task.affected === 1)
            return response.json({ message: 'Task Finished'});
        return response.status(404).json({message: 'Task not found'});
    }
}



export default new FinishedTaskController();