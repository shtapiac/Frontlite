import React from "react";
import { Form, Button } from "react-bootstrap";

const FormCrearPredio = ({bus}) => {


    const enviar_formulario = (e) => {

      e.preventDefault()    
      
      const datospredio = {
        
        codigo: e.target.codigo.value,
        vm2: e.target.vm2.value,
        nombre: e.target.nombre.value,
        cedula: e.target.cedula.value,
        areat: e.target.areat.value,
        areac: e.target.areac.value,
        direccion: e.target.direccion.value,
        barrio: e.target.barrio.value,
        asociado: false,
        
      }
      
      bus(datospredio)

      

    }




    return (
        <Form onSubmit={enviar_formulario}>
          <Form.Group className="mb-3">
            <Form.Control type="number" name="codigo" placeholder="Codigo del predio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="vm2" placeholder="Valor metro cuadrado" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="nombre" placeholder="Nombre propietario" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="cedula" placeholder="Cedula propietario" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="areat" placeholder="Area total predio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" name="areac" placeholder="Area construida predio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="direccion" placeholder="Dirección del predio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="barrio" placeholder="Barrio del predio" />
          </Form.Group>


          
          <Button variant="primary" type="submit">
            Crear predio
          </Button>

        </Form>

    )





}

export default FormCrearPredio