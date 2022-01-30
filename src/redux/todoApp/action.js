


const AddTodoAction = (todoItem) => dispatch=>{
   dispatch({
       type:"ADD_TODO",
       payload:todoItem
   })
}

const DeleteTodoItemAction = (deleteItem) => dispatch=>{
    dispatch({
        type:"DELETE_TODO_ITEM",
        payload:deleteItem
    })
 }


const ResetTodoList = () => dispatch=> {
    dispatch( {
            type:"RESET_TODO_ITEM",  
        })
} 


export {AddTodoAction, DeleteTodoItemAction , ResetTodoList}




