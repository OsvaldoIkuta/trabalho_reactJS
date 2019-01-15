import React, { Component } from 'react';
import { getId } from '../utils/LoginManager';

import { Button } from 'reactstrap';

class SobrePage extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false,nome: '',email :'' , cpf: '', nascimento: '',senha: ''};
    
        this.toggle = this.toggle.bind(this);
        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        //this.handleChangeCPF = this.handleChangeCPF.bind(this);
        //this.handleChangeNascimento = this.handleChangeNascimento.bind(this);
        this.handleChangeSenha = this.handleChangeSenha.bind(this);
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
      /*handleChangeCPF(event) {
        this.setState({cpf: event.target.value});
      }
      handleChangeNascimento(event) {
        this.setState({nascimento: event.target.value});
      }*/
      handleChangeSenha(event) {
        this.setState({senha: event.target.value});
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

    onEditUsuarioPage = () => {
        this.props.history.replace('/usuario_edit')
    }

    render() {
        return (
            <div>
                <h1>Nome: {this.state.nome}</h1>
                <h3>Email: {this.state.email}</h3>
                <h3>CPF: {this.state.cpf}</h3>
                <h3>Nascimento: {this.state.nascimento}</h3>
            
                
                <br/>
                <Button color="warning" onClick={this.onEditUsuarioPage} >Editar Usuario</Button>
            </div>
        )
    }
}

export default SobrePage;