import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Menu from './components/commons/Menu';
import Footer from "./components/commons/Footer";
import Administrador from './components/views/Administrador';
import Login from "./components/views/Login";
import Registrarse from "./components/views/Registrarse"
import CrearReceta from "./components/views/recetas/CrearReceta"
import EditarReceta from "./components/views/recetas/EditarReceta"
import Error404 from './components/views/Error404';


function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path="/" element={<Inicio></Inicio>}>
      </Route>

      <Route path="/administrar" element={<Administrador></Administrador>}>
      </Route>
      <Route path="/administrar/crear" element={<CrearReceta></CrearReceta>}>
      </Route>
      <Route path="/administrar/editar/" element={<EditarReceta></EditarReceta>}>
      </Route>
      <Route path="/login" element={<Login></Login>}>
      </Route>
      <Route path="/login/registrarse" element={<Registrarse></Registrarse>}>
      </Route>
      <Route path="*" element={<Error404></Error404>}></Route>



        
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
