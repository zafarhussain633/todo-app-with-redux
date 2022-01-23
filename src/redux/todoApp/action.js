


const AddTodoAction =(todoItem)=>dispatch=>{
   dispatch({
       type:"AddTodo",
       payload:todoItem
   })
}



export {AddTodoAction}




