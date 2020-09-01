import React, { useState, useEffect} from 'react';
import {Button, Card, Badge} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../services/api';
import './index.css';
import moment from 'moment';
import { finished } from 'stream';

interface ITask {
  id : number
  title : string
  description : string
  finished : boolean
  created_at : Date
  updated_ad : Date
}


const Tasks: React.FC = () => {
  const [model, setModel] = useState<ITask>();

  const {id} = useParams();
  const history = useHistory();

  useEffect(()=>{
    if(id) {
      findTask();
    }
  },[id]);

  function formatDate(date: Date | undefined): string {
    return moment(date).format('DD/MM/YYYY');
  }

  function goBack(): void {
    history.goBack();
  }

  async function findTask() {
    const response= await api.get<ITask>(`/tasks/${id}`);
    setModel(response.data);
    console.log(response.data);
  }

  
  return(
    <div className="container">
      <br/>
      <div className="task-header">
        <h1>Datalhes</h1>
        <Button variant='dark' size='sm' onClick={goBack}>Voltar</Button>
      </div>
      <br/>
      <Card>
      <Card.Body>
        <Card.Title>{ model?.title }</Card.Title>
        <Card.Text>
          {model?.description}
          <br/>
          <Badge variant={model?.finished ? 'success': 'warning'}>
            {model?.finished ? 'FINALIZADO': 'PENDENTE'}
          </Badge>
          <br/>
          <strong>Data de Criação: </strong>
          <Badge variant='info'>
            {formatDate(model?.created_at)}
          </Badge>
          <br/>
          <strong>Ultima Actualizacao: </strong>
          <Badge variant='info'>
            {formatDate(model?.updated_ad)}
          </Badge>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Tasks;