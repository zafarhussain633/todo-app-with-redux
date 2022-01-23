const initialState = {
    todoList : []
}


const  TodoListReducer = (state=initialState, action)=>{
   
    switch(action.type) {
        case "addTodo" :
        return [action.payload]

        default:
            return state
    }

}


export {TodoListReducer};
