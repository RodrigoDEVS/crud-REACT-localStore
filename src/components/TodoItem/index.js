import React from 'react';
import './TodoItem.css';
import { Form, Button, Table } from 'react-bootstrap'

function TodoItem(props) {
  return (
    <div className='container'>
      <li className="TodoItem">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Hecho</th>
              <th>Tarea</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" onClick={props.onComplete}>
                  <Form.Check type="checkbox" />
                </Form.Group>
              </td>
              <td>{props.text}</td>
              <td>
                <Button className="mb-3" onClick={props.onDelete}>Eliminar</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </li>
    </div>

  );
}

export { TodoItem };
