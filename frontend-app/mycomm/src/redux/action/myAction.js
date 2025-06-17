// a function that returns action object is called an action creator
// action is a special object. it must have a keyname/prooperty called 'type' whose value is a string.


export const myActionCreator = (data) => {
    return {
        type:"NAME",            //HAS TO BE NAMED TYPE AND HAS TO BE STRING
        payload: data           //CAN HAVE ANY KEY NAME
    };
}

export const productsActionCreator = (products) => {
    return {
        type: 'products',
        payload: products
    }
}

export const usersActionCreator = users => {
    return {
        type: 'users',
        payload: users
    }
}

