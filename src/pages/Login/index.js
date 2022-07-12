import React, { useContext, useState } from 'react';
import { Container, Box, Typography, TextField, Button, Checkbox, FormGroup, FormLabel, FormControlLabel, Grid } from '@mui/material';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { AuthContext } from '../../contexts/auth';


function Login() {

    const{setIsLogged} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('')

    function handleChange(event){
        if(event.target.name === 'email'){
            setEmail(event.target.value)
        }
        if(event.target.name === 'password'){
            setSenha(event.target.value)

        }
        /*
        const value = event.target.value;
        setEmail(value);
        */
    }
    
    function logar(){

        setIsLogged(true);


      fetch('http://localhost:3001/usuarios?email='+email)
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        console.log(json)
        if(json.senha === senha){
            alert('sucesso')
        }else{
            alert('login ou senha incorreto')
        }
      })
    }
    
    return (
        <div className="login">
            <Container style={{ width: '30%' }}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Typography variant="h5">
                        Login
                    </Typography>
                    <Box component="form" sx={{ mb: 3 }}>
                        {email}
                        <TextField
                            label="E-mail"
                            name="email"
                            id="email"
                            type="text"
                            variant='outlined'
                            fullWidth
                            style={{ marginTop: '15px' }}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Senha" 
                            name="password" 
                            id="password" 
                            type="password"
                            variant='outlined'
                            fullWidth
                            style={{ marginTop: '15px' }}
                            onChange={handleChange}
                        />
                        <FormGroup>
                            <FormControlLabel 
                                control={<Checkbox id="lembre-me" name="lembre-me" defaultChecked />} 
                                label="Lembre-me" 
                            />
                        </FormGroup>                   
                        <Button onClick={logar} variant="contained">Acessar</Button>
                        <Grid container>
                            <Grid item xs={4}>
                                <Button size="small">Esqueceu a senha?</Button>
                            </Grid>
                            <Grid item xs={8}>
                                <Button size="small">Não possui conta? Cadastre-se</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    
                </Box>
            </Container>
            
        </div>
    );
}

export default Login;