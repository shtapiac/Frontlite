import React from "react";
import { Table } from "react-bootstrap";

const Tabla = ({
  columnas = [],
  registros = [],
  botones = { botones },
  bus,
  campos = [],
}) => {
  const click_eliminar = (e) => {
    bus(e.target.id);
  };

  const click_actualizar = (e) => {
    bus(e.target.id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columnas.map((columna, index) => {
            return <th key={index}>{columna}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {registros.map((registro, index) => {
          return (
            <tr key={index}>
              {campos.map((campo, k) => {
                return <td key={k}>{registro[campo]}</td>;
              })}
              {botones ? (
                <td>
                  <button className="btn btn-outline-light" id={registro._id} onClick={click_actualizar}>
                    <img src="/img/edit-text-ico.png" alt="" width="30" height="30"
                      className="d-inline-block align-text-middle" />
                  </button>{" "}
                  <button className="btn btn-outline-light" id={registro._id} onClick={click_eliminar}>
                    <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                      className="d-inline-block align-text-middle" />
                  </button>
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabla;
