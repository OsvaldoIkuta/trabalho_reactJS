import React, { Component } from 'react';
import { Button, Input } from 'reactstrap'

import { isAutenticado, setToken, setId } from '../utils/LoginManager'

import { Prompt } from 'react-router-dom'

import Usuario_Create from './Usuario_Create';

import axios from 'axios'

class LoginPage extends Component {
    constructor(props) {
		super(props);
		this.state = {
            email: '',
            senha: ''
        };
	}
    state = {}

    onLoginClick = () => {
                /*this.setState(
                    {
                        usuario: '',
                        senha: ''
                    },
                    () => {
                        setAutenticado(true);
                        this.props.history.push('/');
                    } )*/
            
            fetch('http://localhost:3001/api/usuarios/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: this.state.email,
                    senha: this.state.senha,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    //"Content-Type": "text/plain"
                }
            }).then(response => response.json()) // retorna uma promise
            .then(result => {
                console.log(result);
                // Setting the token in localStorage
                setToken(result.token);
                setId(result.id)
                //setAutenticado(true);
                this.props.history.push('/');
            })
            .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed retrieving information', err);
          });
            
            
           /* .then(response => {response.json()
                
            .then(function(data){
                    if (data.sucess == true) {
                        this.setToken(data.token) // Setting the token in localStorage
                        setAutenticado(true);
                        this.props.history.push('/');
                    }else {
                        console.log("Usuario ou senha está(ão) incorretos")
                    }

                })

                                 
            });*/

            //event.preventDefault();

            /*const usuario = {
                email: this.state.email,
                senha: this.state.senha,
            };*/

            /*axios.post(`http://localhost:3001/api/usuarios/login`, { usuario })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })*/

            /*axios.post('http://localhost:3001/api/usuarios/login', { usuario })
            .then(function(response){
                console.log('salvo com sucesso')
            });*/
        
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
                    when={isAutenticado()}
                    message='Deseja sair da tela de login?'
                />
                <Input type="text" name="email" onChange={this.onInputChange} placeholder="E-mail"></Input>
                <br/>
                <Input type="password" name="senha" onChange={this.onInputChange} placeholder="Senha"></Input>
                <br/>
                <br/>
                <div className="row justify-content-between container">
                    <Button onClick={this.onLoginClick}> Entrar</Button>
                    <Usuario_Create></Usuario_Create>
                </div>
                
            </div>
        )
    }
}

export default LoginPage;