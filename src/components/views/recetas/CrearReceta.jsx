import React from 'react'
import { Form, Container } from 'react-bootstrap'

const CrearReceta = () => {
  return (
    <Container>
      <h2 className='mt-5 text-center'>Crear receta</h2>
      <Form className='mt-5 mb-5'>
        <Form.Group>
          <Form.Label>Nombre producto:</Form.Label>
          <Form.Control type="text" placeholder='Ej: tortilla de avena'></Form.Control>
        </Form.Group>
     
        <Form.Group>
          <Form.Label>Tiempo preparado:</Form.Label>
          <Form.Control type="number" placeholder='Ej: 20 (en minutos)'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen:</Form.Label>
          <Form.Control type="text" placeholder='Ej: https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria:</Form.Label>
          <Form.Select>
            <option>Elija un tipo de comida:</option>
            <option>Aperitivos</option>
            <option>Colacion</option>
            <option>Ensaladas</option>
            <option>Almuerzo o Cena</option>
            <option>Postres</option>       
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Cantidad de ingredientes:</Form.Label>
          <Form.Control type="number" placeholder='Ej: 5'></Form.Control>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={4} />

        </Form.Group>
        
      </Form>
    </Container>
  )
}

export default CrearReceta