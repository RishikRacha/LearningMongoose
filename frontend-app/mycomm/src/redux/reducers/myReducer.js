

//Reducer is a function w two parameters and must return something.
const myReducer = (state={products:[], users:[], name:'--------'}, action) => {  //assigning initial value to state, check prev state in redux logger when u click submit

    if(action.type === "NAME") {
        state = {
            ...state,
            name: action.payload}
    } 
    
    else if (action.type === "products") {
        state = {
            ...state,               //to keep the initial values as well
            products: action.payload,
        }
    }

    else if (action.type === "users") {
        state = {
            ...state,
            users: action.payload
        }
    }

    return state;
}

export default myReducer;