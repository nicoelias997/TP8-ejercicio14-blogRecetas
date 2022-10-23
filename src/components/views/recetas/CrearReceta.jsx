import React, { useState } from 'react'
import { Form, Container, Button, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import {useForm} from "react-hook-form"
import { crearRecetaAPI } from '../../helpers/queries'
import Swal from 'sweetalert2'

import { validacionIngrediente } from '../../helpers/validaciones'
import { useNavigate } from 'react-router-dom'

const CrearReceta = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()

  const navigate = useNavigate()

  const [ingrediente, setIngrediente] = useState("")
  const [ingredientes, setIngredientes] = useState([])

  const onSubmit = (datosReceta) => {
    console.log(datosReceta)
    crearRecetaAPI(datosReceta).then((respuesta) => {
      if(respuesta.status === 201){
        Swal.fire(
          "Producto creado",
          "El producto fue creado exitosamente",
          "success"
        )
        navigate("/administrar")
      } else {
        Swal.fire(
          "Ocurrio un error",
          "El producto NO fue creado.",
          "error"
        )
      }  
    })
  }

  const agregarIngrediente = (ingrediente) => {
   if(validacionIngrediente(ingrediente)){
    if(ingredientes.length <= 6){
      setIngredientes([
        ...ingredientes,
        ingrediente
      ])
    } else {
      Swal.fire("Solo puedes enviar hasta 7 ingredientes", "Puedes agregar mas en la descripcion", "error")
    }
    } else {
      Swal.fire(
        "Ingrese un valor al ingrediente", "NO puede tener mas de 20 caracteres", "error"
      )
    }
    setIngrediente("")
  }
  
  const eliminarIngrediente = (item) => {
    const arrayFiltrado = ingredientes.filter(ingrediente => item !== ingrediente)
    setIngredientes(arrayFiltrado)
  }

  return (
    <Container>
      <h2 className='mt-5 text-center'>Crear receta</h2>
      <Form className='mt-5 mb-5' style={{maxHeight: "100vh"}} onSubmit={handleSubmit(onSubmit)}>
        <Row>
      <Col xs={8}>

        <Form.Group className="mt-2">
          <Form.Label>Nombre producto:</Form.Label>
          <Form.Control type="text" placeholder='Ej: tortilla de avena'
           {...register("nombreProducto",{
            required: "El nombre del producto es obligatorio",
            minLength: {
              value: 2,
              message: "La cantidad de caracteres minima es 2"
            },
            maxLength: {
              value: 100,
              message: "La cantidad de caracteres maxima es 100"
              }
            
  })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Imagen:</Form.Label>
          <Form.Control type="text" placeholder='Ej: https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          {...register("imagen", {
            required: "La url de la imagen es obligatorio",
            pattern: {
              value:  /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
              message: "Debe ingresar una url valida"
            }
          })}></Form.Control>
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Row>
          <Col xs={4}>
        <Form.Group className="mt-2">
          <Form.Label>Tiempo preparado:</Form.Label>
          <Form.Control type="number" placeholder='Ej: 20 (en minutos)'
          {...register("tiempoPreparado", {
            required: "Es obligatorio darle un tiempo de preparado a la receta",
            min: {
              value: 5, 
              message: "El valor minimo es 5 minutos"
            },
            max: {
              value: 1440,
              message: "El tiempo de preparado no puede superar al equivalente de un dia."
            }
          })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.tiempoPreparado?.message}</Form.Text>

        </Form.Group>
        </Col>
        <Col xs={4}>
        <Form.Group className="mt-2">
          <Form.Label>Categoria:</Form.Label>
          <Form.Select {...register("categoria", {
            required: "Debe seleccionar una categoria"

          })}>
            <option value="">Elija un tipo de comida:</option>
            <option value="aperitivo">Aperitivos</option>
            <option value="colacion">Colacion</option>
            <option value="ensalada">Ensaladas</option>
            <option value="almuerzo-cena">Almuerzo o Cena</option>
            <option value="desayuno-merienda">Desayuno o merienda</option>
            <option value="postre">Postres</option>       
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>
        </Col>
        <Col xs={4}>
        <Form.Group className="mt-2">
          <Form.Label>Cantidad de ingredientes:</Form.Label>
          <Form.Control type="number" placeholder='Ej: 5' {...register("cantidadIngredientes", {
            required: "Es obligatorio indicar una cantidad de ingredientes",
            min: {
              value: 2, 
              message: "El valor minimo de ingredientes es 2"
            },
            max: {
              value: 15,
              message: "No puede agregar mas de 15 productos a la receta."
            }
          })}></Form.Control>
          <Form.Text className="text-danger">{errors.cantidadIngredientes?.message}</Form.Text>

        </Form.Group>
        </Col>
        </Row>
        <Form.Group className="mt-2" >
          <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={4} {...register("descripcion",{
            required: "La descripcion de la receta es obligatorio",
            minLength: {
              value: 30,
              message: "La cantidad de caracteres minima es 30"
            },
            maxLength: {
              value: 1000,
              message: "La cantidad de caracteres maxima es 1000"
              }
            
  })} />
          <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>

        </Form.Group>
       
      </Col>
        <Col xs={4}>
          <Form.Group className="mt-2">

            <Form.Label>Ingredientes:</Form.Label>
            <Form.Control  placeholder="Ej: 100ml leche, 8 huevos, etc" value={ingrediente} onChange={e => setIngrediente(e.target.value)}
            // {
            //   ...register("ingredientes")
            // }
            >
            </Form.Control>
          
            <Button className='btn btn-sm btn-dark float-end mt-1' type='button' onClick={() => agregarIngrediente(ingrediente)}>Agregar</Button>
          {/* <Form.Text className="text-danger m-1">{errors.ingredientes?.message}</Form.Text> */}

          </Form.Group>           
            {/* AQUI TENDRE QUE PINTAR CON MAP, SEGUN LOS INGREDIENTES QUE ENVIE, PARA PINTARLOS EN UNA LISTA */}
            <Col xs={12} className="d-flex mt-1">
            <ListGroup as="ol" numbered className='d-flex mt-2'>

          {
            ((ingredientes.length !== 0)) ? 
            ingredientes.map(item => (
                <ListGroupItem key={item} className="d-flex justify-content-between">
                   <span >{item}</span>
                   <Button className='btn btn-sm float-end' onClick={() => eliminarIngrediente(item)}>X</Button>
                  </ListGroupItem>
                
            )) : 
            <ul>
            <li className=''>No hay ingredientes.</li>
            </ul>
          }
              </ListGroup>
              </Col>

        </Col>
        </Row>
        <hr />
        <Form.Group className="mt-2 text-center">
        <Button type='submit' className='btn btn-warning'>Crear receta</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default CrearReceta