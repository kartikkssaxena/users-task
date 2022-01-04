import ACTION_TYPES from './constants.js';

 export const requestUsers = (dispatch)=>{
    dispatch({ type: ACTION_TYPES.REQUEST_USERS_PENDING});
    fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(resdata=>dispatch({type: ACTION_TYPES.REQUEST_USERS_SUCCESS, payload: resdata.data}))
    .catch(error => dispatch({ type: ACTION_TYPES.REQUEST_USERS_FAILED, payload: error}))
};

export const deleteUser =(id, dispatch)=>{
    dispatch({
        type: ACTION_TYPES.DELETE_USER ,
        payload: id
    })
}

export const saveUser =(editedData, dispatch)=>{
    dispatch({
        type: ACTION_TYPES.SAVE_USER ,
        payload: editedData
    })
}