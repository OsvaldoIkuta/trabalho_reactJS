import React, { Component } from 'react';
import { Button, Input } from 'reactstrap'

import { setAutenticado } from '../utils/LoginManager'

import { Prompt } from 'react-router-dom'

import axios from 'axios'

class LoginPage extends Component {
    constructor(props) {
		super(props);
	}
    state = {}

    onLoginClick = () => {

            const usuario = {
                email: this.state.email,
                senha: this.state.senha,
            };

            axios.post('http://localhost:3001/api/usuarios/login', { usuario })
            .then(function(response){
                console.log('salvo com sucesso')
            });
        
    }

    onAbrirTelaCadastroUsuario = () => {

    }

    onInputChange = event => {
        const { name, value } = event.target
        //console.log(name, value);
        this.setState({
            [name]: value
        })
    }
    render() {
        const { usuario, senha } = this.state;
        const bloquearNavegacao = Boolean(usuario || senha);
        return (
            <div>
                <h1>Login</h1>
                <br/>
                <br/>
                <Prompt
                    when={bloquearNavegacao}
                    message='Deseja sair da tela de login?'
                />
                <Input type="text" name="email" onChange={this.onInputChange} placeholder="E-mail"></Input>
                <br/>
                <Input type="password" name="senha" onChange={this.onInputChange} placeholder="Senha"></Input>
                <br/>
                <br/>
                <Button onClick={this.onLoginClick}> Entrar</Button>
                <Button className="float-right" onClick={this.onAbrirTelaCadastroUsuario}>Cadastrar</Button>
            </div>
        )
    }
}

export default LoginPage;