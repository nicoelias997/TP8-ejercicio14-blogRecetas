import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Administrador = () => {
  return (
    <Container className='mainSection'>
      <h1>Aqui administrare mis recetas</h1>
      <hr />
      <Row>
        <Col>
        <h6>Agregar receta ➡</h6>
        </Col>
        <Col>
        <Link></Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Administrador