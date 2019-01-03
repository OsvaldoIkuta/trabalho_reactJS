import React, { Component } from 'react';

import {Link, Route} from 'react-router-dom'

import { Table } from 'reactstrap';

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
			{ key: 'usuarioId', label: 'Usuário ID' },
			{ key: 'id', label: 'ID' },
			{ key: 'titulo', label: 'Titulo' },
			{ key: 'descricao', label: 'Descrição' }
		];
    }
    
    componentDidMount() {
		fetch('http://localhost:3001/api/tarefas?titulo=aprender')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					users:result
				});
			});
	}

    render() {
        {/**
            const tarefasLinks = TAREFAS.map((tarefa, index) => { // array de <li>
                return (<li key={tarefa.id}><Link to={'/tarefas/' + tarefa.id }>{tarefa.titulo}</Link></li>)
                //return (<li><Link to={`/tarefas/{$tarefa.id}` }>{tarefa.titulo}</Link></li>)
            
             })
        */}

        
        return (
        
            <div>
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
                                    <td>{item.usuarioId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.descricao}</td>
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