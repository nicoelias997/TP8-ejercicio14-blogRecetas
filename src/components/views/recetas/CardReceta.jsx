import React from 'react'
import {  Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardReceta = () => {
  return (
    <Col xs={4} className="d-flex">
    <Card className="my-4">
      <Card.Header>
        <Card.Img src='https://cdn.shopify.com/s/files/1/0191/9978/articles/Pina-asada-con-canela_460x.jpg?v=1665678509'></Card.Img>
        <Card.Title className="mt-1">Tortilla de avena</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Tiempo de preparado : </Card.Subtitle>
        <Card.Text>Descripcion lroeajsasdlssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadnadsjn</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link className='btn btn-success rounded-1 float-end ' to="/detalleProducto">Ver mas</Link>
      </Card.Footer>
    </Card>
    </Col>
   
  )
}

export default CardReceta