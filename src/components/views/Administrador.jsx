import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Administrador = () => {
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
          
        </tbody>
        </Table>
    </Container>
  )
}

export default Administrador