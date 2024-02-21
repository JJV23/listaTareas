import { Button, Form } from "react-bootstrap";
//import Form from "react-bootstrap/Form";
//import Form from "react-boostrap/Button";
const FormularioTarea = () => { 
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
          <Form.Control type="text" placeholder="Ej: tarea 1" className="me-2" />
          <Button variant="dark" type="submit">Agregar</Button>
        </Form.Group>
        
      </Form>
    </section>
  );
};

export default FormularioTarea;
