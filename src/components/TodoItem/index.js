import React from 'react';
import './TodoItem.css';
import { Form, Button } from 'react-bootstrap'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <Form.Group className="mb-3" controlId="formBasicCheckbox" onClick={props.onComplete}>
        <Form.Check type="checkbox" />
      </Form.Group>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <Button onClick={props.onDelete}>Eliminar</Button>
    </li>
  );
}

export { TodoItem };
