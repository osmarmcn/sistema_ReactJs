import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Menu from './layouts/Menu';
import ListaUsuarios from './pages/Usuarios/ListaUsuarios';
import FormUsuarios from './pages/Usuarios/FormUsuarios';
import { Container } from '@mui/material';
import RoutePrivate from './routes/RoutePrivate';
import AuthProvider from './contexts/auth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Container>
            <>
              <RoutePrivate path="/" element={<Home />} isPrivate={false} />
              <RoutePrivate path="/login" element={<Login />} isPrivate={false} />
              <RoutePrivate path="/dashboard" element={<Dashboard />} isPrivate={true} />
              <RoutePrivate path="/usuarios" element={<ListaUsuarios />} isPrivate={true} />
              <RoutePrivate path="/usuarios/novo" element={<FormUsuarios />} isPrivate={true} />
              <RoutePrivate path="/usuarios/editar/:id" element={<FormUsuarios />} isPrivate={true} />
            </> 
          </Container>
        </BrowserRouter>
      </AuthProvider>
        
    </div>
  );
}
export default App;
