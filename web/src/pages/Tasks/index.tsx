import React, { useState, useEffect } from 'react';
import {Badge, Table, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import './index.css';

interface ITask {
  id : number
  title : string
  description : string
  finished : boolean
  created_at : Date
  updated_ad : Date
}

const Tasks: React.FC = () => {
  const [tasks , setTask ] = useState<ITask[]>([]);
  const history = useHistory();
  useEffect(()=>{
    loadTasks();
  },[])

  async function loadTasks(){
    const response = await api.get('tasks');
    setTask(response.data);
    //console.log(response.data);
  }

  function formatDate(date: Date): string {
     return moment(date).format('DD/MM/YYYY');
  }
  function newTask(): void{
    history.push('/nova_tarefa');
  }
  function editTask(id: number): void{
    history.push(`/nova_tarefa/${id}`);
  }
  function showTask(id: number): void{
    history.push(`/tarefas/${id}`);
  }
  async function finishedTask(id: number){
    await api.patch(`/tasks/${id}`);
    loadTasks();
  }
  async function removeTask(id: number){
    await api.delete(`/tasks/${id}`);
    loadTasks();
  }
  return(
    <div className="container">
      <br/>
      <div className="task-header">
        <h1>Tasks Page</h1>
        <Button variant='dark' size='sm' onClick={newTask}>Nova Tarefa</Button>
      </div>
      <br/>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Data de Actualizacao</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => (
              <tr key={task.id}>
                <td>{ task.id }</td>
                <td>{ task.title }</td>
                <td>{ formatDate(task.updated_ad) }</td>
                <td>
                  <Badge variant={task.finished ? 'success': 'warning'}>
                    {task.finished ? 'FINALIZADO': 'PENDENTE'}
                  </Badge>
                </td>
                <td>
                   <Button size="sm" disabled={task.finished} onClick={()=>editTask(task.id)}>Editar</Button>{' '}
                   <Button size="sm" disabled={task.finished}variant="success" onClick={()=> finishedTask(task.id)}>Finalizar</Button>{' '}
                   <Button size="sm" variant="info" onClick={()=>showTask(task.id)}>Visualizar</Button>{' '}
                   <Button size="sm" variant="danger" onClick={()=> removeTask(task.id)}>Remover</Button>{' '}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Tasks;