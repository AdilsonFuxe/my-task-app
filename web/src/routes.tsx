import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Taks from './pages/Tasks';
import NewTask from './pages/Tasks/Form';
import DetailTask from './pages/Tasks/Detail';

const Routes: React.FC = () => {
  return (
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/tarefas' exact component={Taks}/>
          <Route path='/nova_tarefa' exact component={NewTask}/>
          <Route path='/nova_tarefa/:id' exact component={NewTask}/>
          <Route path='/tarefas/:id' exact component={DetailTask}/>
      </Switch>
  );
}

export default Routes;