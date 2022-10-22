import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardReceta from './recetas/CardReceta'

const Inicio = () => {
  return (
    <Container className='mainSection '>
        <h1>Recetas ML&N</h1>
        <hr />
        <Row>
    <CardReceta></CardReceta>
    <CardReceta></CardReceta>
    <CardReceta></CardReceta>
    <CardReceta></CardReceta>
    <CardReceta></CardReceta>
    <CardReceta></CardReceta>
    <CardReceta></CardReceta>
    </Row>
    </Container>
  )
}

export default Inicio