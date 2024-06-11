import React, { FunctionComponent as FC } from "react"
import TODOI from "../interfaces/TodoInterface";

interface Props{
    todos: TODOI[];
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
}

const List: FC<Props> = ({ todos, deleteTodo, toggleComplete }) => {

    return (
        <div className="col-md-6 mx-auto my-5">
            {todos.map((todo: TODOI, index: number): any => (
                <div
                    key={index}
                    className="d-flex align-items-center justify-content-start w-100">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        style={{ marginRight: "10px" }}
                    />
                    <h1 className={`text-center py-2 ${todo.completed ? "completed" : "notCompleted"
                        
                        }`}
                        style={{ width: "80%" }}>{todo.text}</h1>
                    {<button onClick={() => deleteTodo(todo.id)} type="button" className="btn btn-danger mx-auto">
                    Delete
                    </button>}
                </div>
            
            ))
            }
        </div>
    );
};

export default List;