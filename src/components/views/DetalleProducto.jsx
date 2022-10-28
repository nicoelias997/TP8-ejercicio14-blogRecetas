import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, ListGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { obtenerRecetaAPI } from '../helpers/queries'

const DetalleProducto = ( ) => {

  const [receta, setReceta] = useState("")

  const {id} = useParams()
  useEffect(() => {
    obtenerRecetaAPI(id).then((respuesta) => {
      if(respuesta.status === 200){
        setReceta(respuesta.dato)
      }
    })
    
  }, [id])


  return (
    <Container className='mainSection'>
      <Card className='m-5 d-flex '>
      <Card.Header>
      <Card.Title className='text-center'>{receta.nombreProducto}</Card.Title>
      </Card.Header>
      <Card.Body className="text-center">
          <Col xs={12} className="mb-2 mt-2 text-center">
          <Card.Img src={receta.imagen} className='rounded-circle img-fluid mb-2' style={{maxHeight: "50%", maxWidth: "50%"}}></Card.Img>
          </Col>
          <Row className=''>
            <Col xs={6}>
              Ingredientes
              <br></br>
              1
              <br></br>
              2 <br></br>
              3 <br></br>
              4 <br></br>
              5 <br></br>

            </Col>
            <Col xs={6}>
            <ListGroup as="ol" numbered variant="flush">
      <ListGroup.Item as="li">Tiempo: {receta.tiempoPreparado} minutos.</ListGroup.Item>
      <ListGroup.Item as="li">Cantitad total de ingredientes: {receta.cantidadIngredientes}</ListGroup.Item>
      <ListGroup.Item as="li">Categoria: {receta.categoria}</ListGroup.Item>
    </ListGroup>
            </Col>
          </Row>
          <hr />
          <Col xs={12}>
            <Card.Text>
              {receta.descripcion}
            </Card.Text>
          </Col>
        </Card.Body>
        <Card.Footer>
          <Link to="/" className='btn btn-dark float-end'>Mas recetas...</Link>
        </Card.Footer>
      </Card>
      
    </Container>
  )
}

export default DetalleProducto