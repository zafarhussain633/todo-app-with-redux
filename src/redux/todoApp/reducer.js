const initialState = []

const  TodoListReducer = (state=initialState, action)=>{
   
    switch(action.type) {
        case "ADD_TODO":
        return [...state , action.payload]

        case "DELETE_TODO_ITEM":
           state.splice(action.payload,1)
           return [...state]
 
        case "RESET_TODO_ITEM":
            return []

        default:
            return state
    }

   
}


export {TodoListReducer};
