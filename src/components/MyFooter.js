import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'

class MyFooter extends React.Component {
    render(){
        return(
            
            <div className="footer fixed-bottom">
                <Col>
                    <Row>
                        <Col className="text-center" sm="6">Icons</Col>
                        <Col className="text-center" sm="6">
                            <ul>
                                <Link to="/">Home</Link>
                                <br/>
                                <Link to="/tarefas">Tarefas</Link>
                                <br/>
                                <Link to="/sobre">Sobre</Link>
                                <br/>
                            </ul>
                        </Col>
                    </Row>
                    
                </Col>
                <Col className="text-center copyright">© 2018 Copyright: www.osvaldoikuta.com.br</Col>
            </div>
                

       
        )
    }
}

export default MyFooter;