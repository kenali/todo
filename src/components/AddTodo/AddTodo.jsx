import React, { useState } from "react";
import { v4 } from "uuid";

import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from './AddTodo.module.css'

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([...todo, { id: v4(), title: value, status: false }]);
    setValue("");
  }

  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Введите задачу..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className={s.btn} onClick={saveTodo}>Сохранить</Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
