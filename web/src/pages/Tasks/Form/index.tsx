import React, { useState, useEffect, ChangeEvent } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../services/api';
import './index.css';

interface ITask {
  title : string
  description : string
}

const Tasks: React.FC = () => {
  const [model, setModel] = useState<ITask>({
    title: '',
    description: ''
  });

  const {id} = useParams();
  const history = useHistory();

  useEffect(()=>{
    if(id)
      findTask();
  },[id]);


  function goBack(): void {
    history.goBack();
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>): void {
     setModel({
       ...model,
       [e.target.name]: e.target.value
     });
  }

  async function onSubmit(e: ChangeEvent<HTMLFontElement>){
    e.preventDefault();
    if(id) {
      await api.put(`/tasks/${id}`, model);
    }
    else {
      await api.post('/tasks', model);
    }
    goBack();
  }

  async function findTask() {
    const task: ITask = await (await api.get(`/tasks/${id}`)).data;
    setModel(task);
  }
  return(
    <div className="container">
      <br/>
      <div className="task-header">
        <h1>Nova Tarefa</h1>
        <Button variant='dark' size='sm' onClick={goBack}>Voltar</Button>
      </div>
      <br/>
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group >
            <Form.Label>Titulo</Form.Label>
            <Form.Control 
              type="text" 
              name="title" 
              value = {model.title}
              onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Descricao</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3}
              name="description" 
              value = {model.description}
              onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)}
              />
          </Form.Group>
        
          <Button variant="dark" type="submit">
            Salvar
          </Button>
        </Form> 
      </div>
    </div>
  );
}

export default Tasks;