import Swal from "sweetalert2";
import store from "../../redux/store/store.js";
import {editToDo} from "../../redux/state/todo/todoSlice.js";

export function todoEditAlert(i,item) {

    Swal.fire({
        title: "Update your Task",
        input:"text",
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(editToDo({index:i,task:value}))
            }
        }


    })
}
