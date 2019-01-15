import React, { Component } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap'

import { setAutenticado } from '../utils/LoginManager'

import { Prompt } from 'react-router-dom'

import axios from 'axios';

class Tarefa_Create extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false,titulo: '',descricao :'' ,concluida: 0};
    
        //this.toggle = this.toggle.bind(this);
        this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
        this.handleChangeDescricao = this.handleChangeDescricao.bind(this);
        this.handleChangeConcluida = this.handleChangeConcluida.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
      }
    
     /*toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }*/
      handleChangeTitulo(event) {
        this.setState({titulo: event.target.value});
      }
      handleChangeDescricao(event) {
        this.setState({descricao: event.target.value});
      }
      handleChangeConcluida(event) {
          if (event.target.checked == true) {
            this.setState({concluida: 1});
          } else {
            this.setState({concluida: 0});
          }
        //this.setState({concluida: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
         }

    onCreateClick = (event) => {
            event.preventDefault();

            var that = this;

            //console.log(this.state.titulo);
            //console.log(this.state.descricao);
            console.log(this.state.concluida);
            console.log(localStorage.getItem('id_token'))
            
            fetch('http://localhost:3001/api/tarefas', {
                method: 'POST',
                body: JSON.stringify({
                    titulo: this.state.titulo,
                    descricao: this.state.descricao,
                    concluida: this.state.concluida,
                    token: localStorage.getItem('id_token')
                }),
                headers: {
                    //'Authorization': localStorage.getItem('id_token'),
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(function(response) {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }else if(response.status >= 200 && response.status < 300){
                    that.onCancel();
                }

                return response;
            }).then(function(response) {
                console.log("ok");
            }).catch(function(error) {
                console.log(error);
            });
        
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    onCancel = () => {
        this.props.history.push('/tarefas');
    }


    render() {
        return (
            <div>
                

                <h1>Cadastro  de Tarefas </h1>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="titulo" onChange={this.handleChangeTitulo} placeholder="Título"></Input>
                            </FormGroup>
                            
                            <FormGroup>
                                <Input type="text" name="descricao" onChange={this.handleChangeDescricao} placeholder="Descrição"></Input>
                            </FormGroup>
                            
                            <FormGroup check>
                                <Label>
                                    <Input type="checkbox" name="finalizada" onChange={this.handleChangeConcluida} ></Input>{' '} Finalizada?
                                </Label>
                                
                            </FormGroup>
                        </Form>
                    <Button onClick={this.onCreateClick}> Cadastrar</Button>
                    <Button className="float-right" color="danger" onClick={this.onCancel}>Cancelar</Button>
            
                
                
                
            </div>
        )
    }
}

export default Tarefa_Create;