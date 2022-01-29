


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

 const EditTodoItemAction = (id,editItem) => dispatch=>{
    dispatch({
        type:"EDIT_TODO_ITEM",
        payload:{id,editItem}
    })
 }



export {AddTodoAction, DeleteTodoItemAction,EditTodoItemAction}




