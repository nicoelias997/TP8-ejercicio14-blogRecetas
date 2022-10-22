import React from 'react'
import { Card, Col, Container, Row, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DetalleProducto = () => {
  return (
    <Container className='mainSection'>
      <Card className='m-5 d-flex '>
      <Card.Header>
      <Card.Title className='text-center'>Tortilla de avena</Card.Title>
      </Card.Header>
      <Card.Body className="text-center">
          <Col xs={12} className="mb-2 mt-2 text-center">
          <Card.Img src='https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg' className='rounded-circle img-fluid mb-2' style={{maxHeight: "50%", maxWidth: "50%"}}></Card.Img>
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
      <ListGroup.Item as="li">Tiempo</ListGroup.Item>
      <ListGroup.Item as="li">Cantitad total ingredientes</ListGroup.Item>
      <ListGroup.Item as="li">Categoria</ListGroup.Item>
    </ListGroup>
            </Col>
          </Row>
          <hr />
          <Col xs={12}>
            <Card.Text>
              descripcion lasdnjaklksdkasjkkadsjnadijasdkasjndsakadjaskdasjnadskasdnkmadskdnslasdnjaklksdkasjkkadsjnadijasdkasjndsakadjaskdasjnadskasdnkmadskdnslasdnjaklksdkasjkkadsjnadijasdkasjndsakadjaskdasjnadskasdnkmadskdnslasdnjaklksdkasjkkadsjnadijasdkasjndsakadjaskdasjnadskasdnkmadskdns
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