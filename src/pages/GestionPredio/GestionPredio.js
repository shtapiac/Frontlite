import React from "react"
import FormGestionPredio from "../../components/FormGestionPredio"


const GestionPredio = () => {

    const datos_predio = (datos) => {
        console.log(datos)
    }
    return (

        <div>
            <FormGestionPredio bus={datos_predio} />
        </div>
    )
}
export default GestionPredio