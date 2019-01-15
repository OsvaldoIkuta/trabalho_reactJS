import React, { Component } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap'

import { getId, getToken} from '../utils/LoginManager'

import { Prompt } from 'react-router-dom'

import axios from 'axios'

class Usuario_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false,nome: '',email :'' , cpf: '', nascimento: '',senha: ''};
    
        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeCPF = this.handleChangeCPF.bind(this);
        this.handleChangeNascimento = this.handleChangeNascimento.bind(this);
        this.handleChangeSenha = this.handleChangeSenha.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            //console.log(this.state.titulo);
            //console.log(this.state.descricao);
            //console.log(this.state.concluida);
            console.log(localStorage.getItem('id_token'))
            
            fetch('http://localhost:3001/api/usuarios/'+ getId(), {
                method: 'PUT',
                body: JSON.stringify({
                    nome: this.state.nome,
                    email: this.state.email,
                    cpf: this.state.cpf,
                    nascimento: this.state.nascimento,
                    senha: this.state.senha,
                    token: getToken()
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
                that.props.history.push('/sobre');
                console.log("ok");
            }).catch(function(error) {
                console.log(error);
            });
        
    }
    componentDidMount() {
		fetch('http://localhost:3001/api/usuarios/'+ getId(), {
            method: 'GET'
            })
			.then(response => {
                return response.json();
			}).then(data => {
                const usuario = data;
                console.log(usuario);
                this.setState({
                    nome: usuario.nome,
                    email: usuario.email,
                    cpf: usuario.cpf,
                    nascimento: usuario.nascimento,
                    senha: usuario.senha
                })
			});
    }
    
    onCancel = () => {
        this.props.history.push('/sobre');
    }


    render() {
        return (
            <div>

                <h1>Editar Usuário </h1>
                        <Form>
                                    <React.Fragment>
                                    <Form>
                                        <FormGroup>
                                            <Input type="text" name="nome" onChange={this.handleChangeNome} placeholder="Nome" value={this.state.nome}></Input>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <Input type="email" name="email" onChange={this.handleChangeEmail} placeholder="Email" value={this.state.email}></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name="cpf" onChange={this.handleChangeCPF} placeholder="CPF" value={this.state.cpf}></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name="nascimento" onChange={this.handleChangeNascimento} placeholder="Data Nascimento" value={this.state.nascimento}></Input>
                                        </FormGroup>

                                        <FormGroup>
                                            <Input type="password" name="senha" onChange={this.handleChangeSenha} placeholder="Senha" value={this.state.senha}></Input>
                                        </FormGroup>
                                    
                                    </Form>
                                    </React.Fragment>
                            
                        </Form>

                    <Button onClick={this.onCreateClick}> Salvar</Button>
                    <Button className="float-right" color="danger" onClick={this.onCancel}>Cancelar</Button>

                  

                
                
                
            </div>
        )
    }
}

export default Usuario_Edit;