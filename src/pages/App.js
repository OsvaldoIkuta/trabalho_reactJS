import React, { Component } from 'react';
import { Container, 
   } from 'reactstrap';

import { HashRouter,
   Route, 
   Switch
  //BrowserRouter, 
  //Link 
} from 'react-router-dom';



import './App.css';
import HomePage from './HomePage';
import SobrePage from './SobrePage';
import TarefasPage from './TarefasPage';
import LoginPage from './LoginPage';
import Tarefa_Create from './Tarefa_Create';
import Tarefa_Edit from './Tarefa_Edit';
import Usuario_Edit from './Usuario_Edit';
 
import Menu from '../components/Menu';
import MyFooter from '../components/MyFooter';

import PrivateRoute from '../components/PrivateRoute';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faClipboardList, faHome, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);
library.add(faClipboardList);
library.add(faHome);
library.add(faInfoCircle, faTimesCircle);


class App extends Component {
  
  render() {
    return (
      <HashRouter>
          <Container>
              <Menu></Menu>
              <br/>
              
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <PrivateRoute path="/tarefas" component={TarefasPage}/>
                <PrivateRoute path="/tarefa_create" component={Tarefa_Create}/>
                <PrivateRoute path="/tarefa/edit/:id" component={Tarefa_Edit}/>
                <PrivateRoute path="/sobre" component={SobrePage}></PrivateRoute>
                <PrivateRoute path="/usuario_edit" component={Usuario_Edit}></PrivateRoute>
                <Route path="/login" component={LoginPage}/>
                <Route render={() => {
                    return (
                        <div>
                            <h1>Página não encontrada </h1>
                        </div>
                    );
                  }}
                />
              </Switch>
              
              <br/>
              <MyFooter></MyFooter>
          </Container>
      </HashRouter>
      
     
    )
  }
}

export default App;
