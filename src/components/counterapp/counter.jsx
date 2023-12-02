import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset, setCustomValue} from "../../redux/state/counter/counterSlice.js";
import {useRef} from "react";


const Counter = () => {

    let count= useSelector((state)=>state.counter.value);
    const dispacth=useDispatch();
    const num=useRef();



    return <div className="card">
        <div className="card-header bg-secondary">
            <h4 className="text-white text-center">My counter App</h4>
        </div>
        <div className="card-body">
            <h4 className="text-secondary">{count}</h4>

            <div className="my-4">
                <button onClick={()=>dispacth(increment())} className="btn btn-success">Increase</button>
                <button onClick={()=>dispacth(decrement())} className="btn mx-2 btn-danger">Decrease</button>
            </div>
            <div className="my-4">
                <input ref={num} className="form-control w-50 my-2 " type="number" placeholder="Enter a customize value..."/>
                <button onClick={()=>dispacth(setCustomValue(num.current.value))} className="btn btn-danger mx-1 w-25 my-2">custom set</button>
                <button onClick={()=>dispacth(reset())} className="btn mx-1 w-25 btn-secondary">Reset</button>
            </div>
        </div>

    </div>;
};

export default Counter;