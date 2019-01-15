import React, { Component } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap'

import { setAutenticado } from '../utils/LoginManager'

import { Prompt } from 'react-router-dom'

import axios from 'axios'

class Tarefa_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false,titulo: '',descricao :'' ,concluida: 0};
    
        this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
        this.handleChangeDescricao = this.handleChangeDescricao.bind(this);
        this.handleChangeConcluida = this.handleChangeConcluida.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
      }
    

      handleChangeTitulo(event) {
        this.setState({titulo: event.target.value});
      }
      handleChangeDescricao(event) {
        this.setState({descricao: event.target.value});
      }
      handleChangeConcluida(event) {
          if (this.state.concluida == 0) {
            this.setState({concluida: 1});
          } else if (this.state.concluida == 1){
            this.setState({concluida: 0});
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
            //console.log(this.state.concluida);
            console.log(localStorage.getItem('id_token'))
            
            fetch('http://localhost:3001/api/tarefas/'+this.props.match.params.id, {
                method: 'PUT',
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
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            }).then(function(response) {
                that.props.history.push('/tarefas');
                console.log("ok");
            }).catch(function(error) {
                console.log(error);
            });
        
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    componentDidMount() {
		fetch('http://localhost:3001/api/tarefas/'+this.props.match.params.id, {
            method: 'GET',
			headers: {
			  "x-access-token": localStorage.getItem('id_token')
			}
            })
			.then(response => {
                return response.json();
			}).then(data => {
                const tarefa = data;
                console.log(tarefa);
                this.setState({
                    titulo: tarefa.titulo,
                    descricao: tarefa.descricao,
                    concluida: tarefa.concluida
                })
			});
    }
    
    onCancel = () => {
        this.props.history.push('/tarefas');
    }


    render() {
        return (
            <div>

                <h1>Cadastro  de Tarefas </h1>
                        <Form>
                                    <React.Fragment>
                                        <FormGroup>
                                            <Input type="text" name="titulo" onChange={this.handleChangeTitulo} placeholder="Título" value={this.state.titulo}></Input>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <Input type="text" name="descricao" onChange={this.handleChangeDescricao} placeholder="Descrição" value={this.state.descricao}></Input>
                                        </FormGroup>
                                        
                                        <FormGroup check>
                                            <Label>
                                                <Input type="checkbox" name="finalizada" onChange={this.handleChangeConcluida} checked={this.state.concluida == 1 ? 'checked' : ''} ></Input>{' '} Finalizada?
                                            </Label>
                                            
                                        </FormGroup>
                                    </React.Fragment>
                            
                        </Form>

                    <Button onClick={this.onCreateClick}> Salvar</Button>
                    <Button className="float-right" color="danger" onClick={this.onCancel}>Cancelar</Button>

                  

                
                
                
            </div>
        )
    }
}

export default Tarefa_Edit;