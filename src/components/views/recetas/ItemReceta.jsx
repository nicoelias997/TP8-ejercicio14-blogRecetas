import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { borrarRecetaAPI, consultarAPI } from '../../helpers/queries'

const ItemReceta = (props) => {

  const borrarReceta = () => {
    borrarRecetaAPI(props.id).then((respuesta) => {
      if(respuesta.status === 200){
        Swal.fire({
          title: 'Estas seguro?',
          text: "Este proceso sera irreversible!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado!',
              'Tu producto fue eliminado.',
              'success'
            )
            consultarAPI().then((respuesta) => {
              props.setRecetas(respuesta)
            })
          }
        })
      }
    })
  }

  return (
    <tr className='align-items-center text-center'>
          <td>{props.id}</td>
            <td>{props.nombreProducto}</td>
            <td>{props.tiempoPreparado}</td>
            <td className='text-truncate maxLength'>{props.imagen}</td>
            <td>{props.categoria}</td>
            <td >{props.cantidadIngredientes }</td>
            <td  className='text-truncate maxLength'>{props.ingredientes}</td>
            <td  className='text-truncate flex-nowrap maxLength'>{props.descripcion}</td>
      <td>
      <Link className="btn btn-success" to={`/administrar/editar/${props.id}`}>
        Editar
      </Link> 
     
      <Button variant="danger" onClick={borrarReceta}>
        Borrar
      </Button>
    </td>
  </tr>
  )
}

export default ItemReceta