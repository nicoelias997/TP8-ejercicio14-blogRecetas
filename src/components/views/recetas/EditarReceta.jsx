import React, {useEffect} from 'react'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import {useForm} from "react-hook-form"
import { obtenerRecetaAPI, editarProductoAPI } from '../../helpers/queries'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'

const EditarReceta = () => {

  const {register, handleSubmit, formState:{errors}, setValue} = useForm()
  const {id} = useParams()

  const navigate = useNavigate()
  // CON UN USEEFFECT Y SETVALUE PINTARE SEGUN EL ID LOS DETALLES CUANDO LO TENGA AQUI
  useEffect(() => {
    obtenerRecetaAPI(id).then((respuesta) => {
      console.log(respuesta.dato)
      if(respuesta.status === 200){
        setValue("nombreProducto", respuesta.dato.nombreProducto)
        setValue("precio",  respuesta.dato.precio)
        setValue("imagen",  respuesta.dato.imagen)
        setValue("categoria",  respuesta.dato.categoria)
        setValue("tiempoPreparado", respuesta.dato.tiempoPreparado)
        setValue("descripcion", respuesta.dato.descripcion)
        setValue("cantidadIngredientes", respuesta.dato.cantidadIngredientes)
        setValue("")
      }
    })
  }, [setValue, id])

  const onSubmit = (datosReceta) => {
    editarProductoAPI(id, datosReceta).then((respuesta) => {
      if(respuesta.status === 200){
        Swal.fire("Producto editado", "El producto fue correctamente actualizdo", "success")
        navigate("/administrar")
      } else {
        Swal.fire("Ocurrio un error", "HUbo un problema, intentelo nuevamente en breve.", "error")
      }
    })
}
  

 const agregarIngrediente = () => {
  console.log("ingrediente 1")
 }

  return (
    <Container>
      <h2 className='mt-5 text-center'>Editar receta</h2>
      <Form className='mt-5 mb-5' onSubmit={handleSubmit(onSubmit)}>
        <Row>
      <Col xs={9}>

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
        <Form.Group className="mt-2">
          <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={4} {...register("descripcion",{
            required: "La descripcion de la receta es obligatorio",
            minLength: {
              value: 30,
              message: "La cantidad de caracteres minima es 30"
            },
            maxLength: {
              value: 2000,
              message: "La cantidad de caracteres maxima es 1000"
              }
            
  })} />
          <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>

        </Form.Group>
       
      </Col>
        <Col xs={3}>
          <Form.Group className="mt-2">
            <Form.Label>Ingredientes:</Form.Label>
            <Form.Control  placeholder="Ej: 100ml leche, 8 huevos, etc"
            {
              ...register("ingredientes", {
                required: "Ingrese los ingredientes a utilizar junto a su cantidades",
                minLength: {
                  value: 2, 
                  message: "Debe contener al menos 2 caracteres."
                },
                maxLength: {
                  value: 15, 
                  message: "Debe contener 15 caracteres como maximo."
                }
              })
            }>
            </Form.Control>
            {/* ESTE BUTTON TENDRA UN ONCLICK PARA AGREGAR CADA INGREDIENTE A UN ARRAY INGREDIENTES */}
            <Button className='btn btn-sm btn-dark float-end mt-1' type='button' onClick={() => agregarIngrediente()}>Agregar</Button>
          <Form.Text className="text-danger m-1">{errors.ingredientes?.message}</Form.Text>
          {/* NECESITARE OTRO BOTON PARA ELIMINAR CADA INGREDIENTE DE SER SOLICITADO */}
          </Form.Group>

            
            {/* AQUI TENDRE QUE PINTAR CON MAP, SEGUN LOS INGREDIENTES QUE ENVIE, PARA PINTARLOS EN UNA LISTA */}

        </Col>
        </Row>
        <hr />
        <Form.Group className="mt-2 text-center">
        <Button type='submit' className='btn btn-warning'>Editar receta</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default EditarReceta