import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { consultarAPI } from '../helpers/queries'
import CardReceta from './recetas/CardReceta'

const Inicio = () => {

  const [recetas, setRecetas] = useState([])

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setRecetas(respuesta)
    })
  })

  return (
    <Container className='mainSection '>
        <h1 className='mt-3'>Recetas ML&N</h1>
        <hr />
        <Row>
          {
            recetas.map(item => (
              <CardReceta key={item.id} id={item.id} nombreProducto={item.nombreProducto} tiempo={item.tiempo} imagen={item.imagen} categoria={item.categoria} cantidadIngredientes={item.cantidadIngredientes} ingredientes={item.ingredientes} descripcion={item.descripcion}></CardReceta>

            ))
          }
    </Row>
    </Container>
  )
}

export default Inicio