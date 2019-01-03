import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    NavLink,
    NavItem, 
    Nav, 
    Navbar } from 'reactstrap';


    import { //HashRouter,
        //Route, 
       //BrowserRouter, 
       Link, withRouter } from 'react-router-dom'
import { setAutenticado, isAutenticado } from '../utils/LoginManager';

const Menu = (props) => {
    return (
        <Navbar color="light" light expand="md">
              <Nav navbar>
                <NavItem>
                  <Link className="nav-link" to="/"> <FontAwesomeIcon icon="home"/> Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/tarefas"> <FontAwesomeIcon icon="clipboard-list"/> Tarefas</Link>
                </NavItem>
                <NavItem>
                <Link className="nav-link" to="/sobre"> <FontAwesomeIcon icon="info-circle"/> Sobre</Link>
                </NavItem>
                {isAutenticado() ? (
                  <NavItem>
                    <NavLink onClick={() => {
                                setAutenticado(false);
                                props.history.push('/');
                    }}
                    >
                      <FontAwesomeIcon icon="times-circle"/>
                        Sair
                    </NavLink>
                  </NavItem>
                ): null}
                
              </Nav>
              </Navbar>
              

              

    )
}

export default withRouter(Menu);