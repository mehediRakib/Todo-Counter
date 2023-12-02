import React from 'react';
import {useSelector} from "react-redux";
import {todoDelete} from "./todoDelete.js";
import {todoEditAlert} from "./todoEditAlert.js";


const Todo = () => {
    const todo=useSelector((state)=>state.todo.value);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todo.map((item,i)=>{
                           return(
                               <tr key={i.toString()}>
                                   <td>{i+1}</td>
                                   <td>{item}</td>
                                   <td><button onClick={()=>todoEditAlert(i,item)} className="btn btn-sm btn-dark">Edit</button></td>
                                   <td> <button onClick={()=>{todoDelete(i)}} className="btn btn-sm btn-danger">Remove</button></td>
                               </tr>
                           )
                        })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Todo;