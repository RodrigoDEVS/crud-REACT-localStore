import React from 'react';
import './CreateTodoButton.css';
import {Button} from 'react-bootstrap'

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <Button variant="success" className="CreateTodoButton" onClick={onClickButton}>Success</Button>
    
  );
}

export { CreateTodoButton };
