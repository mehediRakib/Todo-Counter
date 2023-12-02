import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/state/todo/todoSlice.js";

const CreateToDo = () => {
    const dispatch=useDispatch()
    const input=useRef();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <input ref={input} className="form-control" type="text" placeholder="Enter Task..."/>
                </div>
                <div className="col-md-2">
                    <button onClick={()=>dispatch(addTodo(input.current.value))} className="btn btn-primary">Add ToDo</button>
                </div>


            </div>

        </div>
    );
};

export default CreateToDo;