import React from "react"
import FormCrearPredio from "../../components/FormCrearPredio"


const CrearPredio = () => {

    const datos_predio = (datospredio) => {
        

        fetch("http://localhost:8000/api/crearpredio", {
        method: "POST",
         body: JSON.stringify(datospredio),
        headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        alert('predio creado')
        
        
        //window.location.href = "/usuario";
      });
    }
    
    

    return(
        <div>
            <FormCrearPredio bus={datos_predio}/>
        </div>
    )}

export default CrearPredio