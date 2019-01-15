import React, { Component } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap'

import { setAutenticado } from '../utils/LoginManager'

import { Prompt } from 'react-router-dom'

import axios from 'axios';

class Usuario_Create extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false,nome: '',email :'' , cpf: '', nascimento: '',senha: ''};
    
        this.toggle = this.toggle.bind(this);
        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeCPF = this.handleChangeCPF.bind(this);
        this.handleChangeNascimento = this.handleChangeNascimento.bind(this);
        this.handleChangeSenha = this.handleChangeSenha.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
     toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      handleChangeNome(event) {
        this.setState({nome: event.target.value});
      }
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      handleChangeCPF(event) {
        this.setState({cpf: event.target.value});
      }
      handleChangeNascimento(event) {
        this.setState({nascimento: event.target.value});
      }
      handleChangeSenha(event) {
        this.setState({senha: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
         }

    onCreateClick = (event) => {
            event.preventDefault();

            var that = this;

            
            fetch('http://localhost:3001/api/usuarios', {
                method: 'POST',
                body: JSON.stringify({
                    nome: this.state.nome,
                    email: this.state.email,
                    cpf: this.state.cpf,
                    nascimento: this.state.nascimento,
                    senha: this.state.senha
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
                    that.toggle();
                }

                return response;
            }).then(function(response) {
                console.log("ok");
            }).catch(function(error) {
                console.log(error);
            });
        
    }


    render() {
        return (
            <div>
                
                <Button color="success" onClick={this.toggle}>Cadastre-se</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Cadastro  de Tarefas</ModalHeader>
                    <ModalBody>
                        <Form>
                                <FormGroup>
                                    <Input type="text" name="nome" onChange={this.handleChangeNome} placeholder="Nome"></Input>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Input type="email" name="email" onChange={this.handleChangeEmail} placeholder="Email"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="cpf" onChange={this.handleChangeCPF} placeholder="CPF"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="nascimento" onChange={this.handleChangeNascimento} placeholder="Data Nascimento"></Input>
                                </FormGroup>

                                <FormGroup>
                                    <Input type="password" name="senha" onChange={this.handleChangeSenha} placeholder="Senha"></Input>
                                </FormGroup>
                            
                            </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.onCreateClick}> Cadastrar</Button>
                        <Button className="float-right" color="danger" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>

                </Modal>
                

            
                
                
                
            </div>
        )
    }
}

export default Usuario_Create;