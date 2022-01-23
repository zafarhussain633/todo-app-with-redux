

const initialState = []

const  TodoListReducer = (state=initialState, action)=>{
    // let arr = [];
    switch(action.type) {
        case "ADD_TODO":
        return [...state , action.payload]

        case "DELETE_TODO_ITEM":
         let item = state[action.payload]
         return  [...state.filter(res=>res != item )]

         

        default:
            return state
    }

}


export {TodoListReducer};
