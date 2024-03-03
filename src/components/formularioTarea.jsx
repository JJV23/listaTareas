import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";
//import Form from "react-bootstrap/Form";
//import Form from "react-boostrap/Button";
const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  //declaro una constante dentro del corchete el nombre del state y el nombre de la funcion del state siemrpe con la palabra set antes.Luego colocamos el operador de asignacion "=", invocamos el useState y entre parentesis con valor inicializo tarea.
  
  const [arrayTareas, setArrayTareas] = useState([]);
  // luego me creo otra constante, un arrays, invoco a useState y lo inicializo como un array vacio([]).
  //antes del return debo agregar toda la logica que necesite, los estados, variables, funciones.

  const handleSubmit = (e) =>{
    e.preventDefault();
    //guardar el state tarea en el arrayTareas
    // spread ...
    setArrayTareas([...arrayTareas, tarea])
    //operador express de js
    //limpiar el formulario
    setTarea('');
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            className="me-2"
            onChange={(e) => setTarea(e.target.value)}
            //evento onChange, asociados a la funcion
            value={tarea}
            //al value le asigno el estado del componente, en este caso el state tarea, se enlaza siempre que el input dependa del estado, serian componentes controlados.
            
          />
          <Button variant="dark" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arrayTareas = {arrayTareas}></ListaTareas>
      
    </section>
  );
};

export default FormularioTarea;
