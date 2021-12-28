export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case 'delete':
            return state.filter((todo) => todo.id !== action.payload);
        case 'toogle':
            return state.map(todo =>

                (todo.id === action.payload) ? {
                    ...todo,
                    done: !todo.done
                } :
                todo
            )
        case 'clear':
            return state.filter(todo => todo.done === false )
        case "order":
            return reorder(state,action.first,action.second)
        default:
            return state
    }

}

const reorder = (list,start,end)=>{
    const result = [...list];
    const [removed] = result.splice(start,1);
    result.splice(end,0,removed);
    return result
}