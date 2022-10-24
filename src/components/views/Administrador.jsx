import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  consultarAPI } from '../helpers/queries'
import ItemReceta from './recetas/ItemReceta'

const Administrador = () => {
  
  const [recetas, setRecetas] = useState([])

  useEffect(() => {
    consultarAPI().then((respuesta) => {
        setRecetas(respuesta) 
    }  
    )
  }, [])


  return (
    <Container className='mainSection'>
      <h1>Aqui administrare mis recetas</h1>
      <hr />
      <Row className="d-flex align-items-center">
        <Col xs={10} className="text-end">
        <h4>Agregar receta:</h4>
        </Col>
        <Col xs={2}>
        <Link className="btn btn-dark float-end" to="/administrar/crear" >Agregar</Link>
        </Col>
      </Row>
      <hr />

      <Table responsive striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Tiempo</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Cant. Ingredientes</th>
            <th>Nombre ingredientes</th>
            <th>Descripcion</th>
          </tr>
        </thead>  
        <tbody>
          {
            recetas.map(item => (
              <ItemReceta key={item.id} id={item.id} nombreProducto={item.nombreProducto} tiempo={item.tiempo} imagen={item.imagen} categoria={item.categoria} cantidadIngredientes={item.cantidadIngredientes} ingredientes={item.ingredientes} descripcion={item.descripcion} setRecetas={setRecetas}></ItemReceta>
            ))
          }

        </tbody>
        </Table>
    </Container>
  )
}

export default Administrador