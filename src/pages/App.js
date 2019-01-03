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
                <Route path="/sobre" component={SobrePage}/>
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
