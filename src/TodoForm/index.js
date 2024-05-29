import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";


function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext)


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }


    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel"
                    type=""
                    onClick={onCancel}>
                    Cancelar
                </button>

                <button className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };