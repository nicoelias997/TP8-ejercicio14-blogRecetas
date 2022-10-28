import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { consultarAPI } from '../helpers/queries'
import CardReceta from './recetas/CardReceta'


const Inicio = () => {

  const [recetas, setRecetas] = useState([])

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setRecetas(respuesta);
      },
      (reason) => {
        console.log(reason);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    );
  }, []);

  return (
    <Container className='mainSection '>
        <h1 className='mt-3'>Recetas ML&N</h1>
        <hr />
        <Row className='d-flex' xs={2} md={4} lg={3}>
          
          {
            recetas.map(item => (
              <CardReceta key={item.id} id={item.id} nombreProducto={item.nombreProducto} tiempo={item.tiempoPreparado} imagen={item.imagen} categoria={item.categoria} cantidadIngredientes={item.cantidadIngredientes} ingredientes={item.ingredientes} descripcion={item.descripcion}></CardReceta>

            ))
          }
    </Row>
    </Container>
  )
}

export default Inicio