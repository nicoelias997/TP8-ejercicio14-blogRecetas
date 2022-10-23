import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemReceta = (props) => {


  return (
    <tr className='align-items-center text-center'>
          <td>{props.id}</td>
            <td>{props.nombreProducto}</td>
            <td>{props.tiempo}</td>
            <td className='text-truncate maxLength'>{props.imagen}</td>
            <td>{props.categoria}</td>
            <td >{props.cantidadIngredientes }</td>
            <td  className='text-truncate maxLength'>{props.ingredientes}</td>
            <td  className='text-truncate flex-nowrap maxLength'>{props.descripcion}</td>
      <td>
      <Link className="btn btn-success" to={`/administrar/editar/${props.id}`}>
        Editar
      </Link> 
     
      <Button variant="danger">
        Borrar
      </Button>
    </td>
  </tr>
  )
}

export default ItemReceta