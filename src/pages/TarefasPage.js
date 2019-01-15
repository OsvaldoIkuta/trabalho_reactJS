import React, { Component } from 'react';

import {Link, Route} from 'react-router-dom'

import { Table, Button, Input } from 'reactstrap';

import Tarefas_Button_Create from './Tarefa_Create';
import Tarefas_Button_Edit from './Tarefa_Edit';

{
    /**
     * const TAREFAS = [{
        id: 1,
        titulo: "Aprender Inglês",
        descricão: "Inglês Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 2,
        titulo: "Aprender Francês",
        descricão: "Farncês Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 3,
        titulo: "Aprender Nihongo",
        descricão: "Nohongo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    ]
     * 
     */
}



class TarefasPage extends Component {
    constructor(props) {
		super(props);
		this.state = {users: []};
		this.headers = [
			{ key: 'id', label: 'ID' },
			{ key: 'titulo', label: 'Titulo' },
            { key: 'descricao', label: 'Descrição' },
            { key: 'concluida', label: 'Concluída?'},
            { key: 'acoes', label: 'Açoes'}
        ];
        this.onEditTarefaPage = this.onEditTarefaPage.bind(this);
        this.onDeleteTarefaPage = this.onDeleteTarefaPage.bind(this);
    }
    
    componentDidMount() {
		this.requestTarefas();
    }
    
    requestTarefas() {
        fetch('http://localhost:3001/api/tarefas?titulo=aprender')
        .then(response => {
            //console.log(response);
            return response.json();
        }).then(result => {
            //console.log(result);
            this.setState({
                users:result
            });
        });
    }

    onCreateTarefaPage = () => {
        this.props.history.replace('/tarefa_create')
    }

    onEditTarefaPage = (id) => {
        this.props.history.replace('/tarefa/edit/'+id)
    }

    onDeleteTarefaPage = (id) => {
        var that = this;
        console.log('http://localhost:3001/api/tarefas/'+id);
        fetch('http://localhost:3001/api/tarefas/'+id, {
			method: 'DELETE',
			headers: {
			  "x-access-token": localStorage.getItem('id_token')
			}
		}).then(function(response) {
            console.log("ok");
            that.requestTarefas();
        }).catch(function(error) {
            console.log(error);
        });
    }

    handleChangeConcluida(e, item) {
        var that = this;
        console.log(item);
        if (e.target.checked == true) {
          //this.setState({concluida: 1});
          fetch('http://localhost:3001/api/tarefas/'+item.id+'/concluida', {
                method: 'PUT'
            }).then(function(response) {
                console.log("ok");
                that.requestTarefas();
            }).catch(function(error) {
                console.log(error);
            });
          item.concluida = 1
          console.log(item);
        } else {
          //this.setState({concluida: 0});
          fetch('http://localhost:3001/api/tarefas/'+item.id+'/concluida', {
                method: 'DELETE'
            }).then(function(response) {
                console.log("ok");
                that.requestTarefas();
            }).catch(function(error) {
                console.log(error);
            });
          item.concluida = 0
          console.log(item);
        }
      //this.setState({concluida: event.target.value});
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.users != this.state.users;
     }

    render() {
        var that = this;
        {/**
            const tarefasLinks = TAREFAS.map((tarefa, index) => { // array de <li>
                return (<li key={tarefa.id}><Link to={'/tarefas/' + tarefa.id }>{tarefa.titulo}</Link></li>)
                //return (<li><Link to={`/tarefas/{$tarefa.id}` }>{tarefa.titulo}</Link></li>)
            
             })
        */}

        
        return (
            
            <div>
                <Button color="success" onClick={this.onCreateTarefaPage} >Cadastrar Tarefa</Button>
                <br></br>
                <Table striped>
                    <thead>
                        <tr>
                        {
                            this.headers.map(function(h) {
                                return (
                                    <th key = {h.key}>{h.label}</th>
                                )
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(function(item, key) {             
                            return (
                                    <tr key = {key}>
                                        <td>{item.id}</td>
                                        <td>{item.titulo}</td>
                                        <td>{item.descricao}</td>
                                        <td><Input type="checkbox" name="finalizada" onChange={((e) => that.handleChangeConcluida(e, item))}  checked={item.concluida == 1 ? 'checked' : ''}  ></Input>{' '}</td>
                                        <td>
                                            <Link className="btn btn-warning"  to={'/tarefa/edit/'+item.id} >Editar</Link>
                                            <Button color="danger"  onClick={() => {if(window.confirm('Delete the item?')) {that.onDeleteTarefaPage(item.id)};}}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            
        )
        
    }
}

export default TarefasPage;