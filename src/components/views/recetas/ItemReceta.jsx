import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemReceta = () => {


  return (
    <tr className='align-items-center'>
          <td>Cod</td>
            <td>Producto</td>
            <td>Tiempo</td>
            <td className='text-truncate'>URL de Imagen</td>
            <td>Categoria</td>
            <td>Cant. Ingredientes</td>
            <td  className='text-truncate'>Nombre ingredientes</td>
            <td  className='text-truncate'>Descripcion</td>
      <td>
      <Link className="btn btn-success" to={`/administrar/editar`}>
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