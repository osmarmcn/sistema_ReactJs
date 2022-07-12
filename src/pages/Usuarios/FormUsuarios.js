import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import Swal from 'sweetalert2'

function FormUsuarios(){
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [json, setJson] = useState(null); // NOVO
        const { id } = useParams();
        
        function submit(event) {
            event.preventDefault();
            const data = {
                "id": id,
                "nome": nome,
                "email": email,
            };
            // NOVO
            if(json) {
                data.senha = json.senha;
            }
            if(id && password) {
                data.senha = password;
            } 
            if(!id && password){
                data.senha = password;
            }
            if(nome === '') {
                alert("Nome obrigatório");
                return false;
            }
            let method = 'POST';
            let url = "http://localhost:3001/usuarios";
            if(id) {
                method = 'PUT';
                url = url+ "/"+id;
            }

            fetch(url,{
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                Swal.fire({
                    title: 'Sucesso',
                    text: 'Registro Salvo com Sucesso',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            })
            .catch(function(error) {
                alert(error);
            });
        }

        function getData() {
            fetch("http://localhost:3001/usuarios/"+id)
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                setNome(json.nome);
                setEmail(json.email);
                setJson(json);
            })
            .catch(function(error) {
                alert(error);
            });
        }

        useEffect(() => {
            if(id) {
                getData();
            }
        }, []);

        return (
            <div>
                <h3>Novo Usuário</h3>
                
                <Link to="/usuarios">
                    <Button variant="contained" size="small">
                        Listar Usuários
                    </Button>
                </Link>
                <Box component="form" onSubmit={submit}>
                    <TextField 
                        label="Nome"
                        fullWidth
                        margin="normal"

                        type="text" 
                        id="nome"
                        name="nome" 
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                    />
                    <TextField 
                        label="E-mail"
                        fullWidth
                        margin="normal"

                        type="email" 
                        id="email"
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <TextField 
                        label="Senha"
                        fullWidth
                        margin="normal"

                        type="password" 
                        id="password"
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <Button size="small" type="submit" variant="contained">Salvar</Button>
                </Box>
            </div>
        );
    }

    export default FormUsuarios;