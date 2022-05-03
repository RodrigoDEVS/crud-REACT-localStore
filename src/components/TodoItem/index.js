import React from 'react';
import './TodoItem.css';
import { Form, Button } from 'react-bootstrap'

function TodoItem(props) {
  return (
    <div className='container'>
      <li className="TodoItem">
      <Form.Group className="mb-3" controlId="formBasicCheckbox" onClick={props.onComplete}>
        <Form.Check type="checkbox" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" disabled defaultValue={props.text} />
      </Form.Group>

      <Button className="mb-3" onClick={props.onDelete}>Eliminar</Button>
    </li>
    </div>
    
  );
}

export { TodoItem };
