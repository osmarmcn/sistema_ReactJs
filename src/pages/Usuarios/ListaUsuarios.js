import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableCell, TableRow, Button } from "@mui/material";
import Swal from 'sweetalert2'

function ListaUsuarios() {
    const [lista, setLista] = useState([]);
    function listarDados(){
        fetch("http://localhost:3001/usuarios")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            setLista(json);
        });
    }
    function excluir(id){
        fetch("http://localhost:3001/usuarios/"+id, {
            method: "DELETE"
        })
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            Swal.fire({
                title: 'Exclusão',
                text: 'Registro Excluído com Sucesso',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
           listarDados();
        })
    }
    // function(param1, param2...){
    // 
    // }
    // (param1, param2...) => {}
    useEffect(() => {
        listarDados();
    }, []);
    return (
        <div>
            <Link to="/usuarios/novo">
                <Button size="small" variant="contained">Novo Usuário</Button>
            </Link>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>E-mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lista.map(function(item, index) {
                        return (
                            <TableRow>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.nome}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>
                                    <Link to={`/usuarios/editar/${item.id}`}>
                                        <Button>
                                            Editar
                                        </Button>
                                    </Link>
                                    <Button onClick={() => { excluir(item.id) }}>Excluir</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
          
        </div>
    );
}

export default ListaUsuarios;