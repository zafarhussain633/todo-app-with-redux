


const initialState = []

const  TodoListReducer = (state=initialState, action)=>{
   
    switch(action.type) {
        case "ADD_TODO":
        return [...state , action.payload]

        case "DELETE_TODO_ITEM":
          return state.filter(res=> (res!==state[action.payload]))
           
         case "EDIT_TODO_ITEM":
          state[action.payload.id] = action.payload.item
           return [...state]
 
        default:
            return state
    }

}


export {TodoListReducer};
