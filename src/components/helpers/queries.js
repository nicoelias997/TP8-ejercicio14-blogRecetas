
const URL = process.env.REACT_APP_API_RECETA

export const consultarAPI = async () => {
    try{
        const res = await fetch(URL)
        const data = await res.json()
        return data
    } catch(e){
        console.log(e)
    }
}

export const crearRecetaAPI =  async (receta) => {
    try{
        const respuesta = await fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receta)
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}

export const obtenerRecetaAPI = async (id) => {
    try{
        const respuesta = await fetch(URL+"/"+id)
        const data = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return data
    } catch(e){
        console.log(e)
    }
}