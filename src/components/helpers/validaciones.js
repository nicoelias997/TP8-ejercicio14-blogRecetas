import Swal from "sweetalert2"

export const validacionIngrediente = (ingrediente) => {
    if(ingrediente.trim() && ingrediente.length <= 20){
        return true
    } else {
        Swal.fire(
            "Error", "No puede contener mas de 20 caracteres", "error"
        )
        return false
    }
}
