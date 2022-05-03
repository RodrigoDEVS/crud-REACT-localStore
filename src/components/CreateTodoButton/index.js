import React from 'react';
import {Button} from 'react-bootstrap'

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <Button variant="success" className="CreateTodoButton" onClick={onClickButton}>Agregar ToDo</Button>
    
  );
}

export { CreateTodoButton };
