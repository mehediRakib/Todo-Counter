import React from 'react';
import AppNavBar from "../components/AppNavBar.jsx";
import CreateToDo from "../components/todoApp/createToDo.jsx";
import Todo from "../components/todoApp/todo.jsx";

const Todopage = () => {
    return (
        <div>
            <AppNavBar/>
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 ">
                        <div className="card">
                            <div className="card-header bg-info">
                                <h4 className="text-center">ToDo App</h4>
                            </div>
                            <div className="card-body">
                                <CreateToDo/>
                                <Todo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todopage;