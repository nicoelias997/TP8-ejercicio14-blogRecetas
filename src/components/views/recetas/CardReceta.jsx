import React from 'react'
import {  Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardReceta = (props) => {
  return (
    <Col xs={4} className="d-flex">
    <Card className="my-4">
      <Card.Header>
        <Card.Img src={props.imagen} alt={props.nombreProducto}></Card.Img>
        <Card.Title className="mt-1">{props.nombreProducto}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Tiempo de preparado: {props.tiempo} minutos.</Card.Subtitle>
        <br />
        <Card.Text className='text-truncate'>{props.descripcion}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link className='btn btn-success rounded-1 float-end ' to={`/detalleProducto/${props.id}`}>Ver mas</Link>
      </Card.Footer>
    </Card>
    </Col>
   
  )
}

export default CardReceta