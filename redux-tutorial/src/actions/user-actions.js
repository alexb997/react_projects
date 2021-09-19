import $ from 'jquery';

export const API_REQUEST_SUCCES = 'users:updateUser';
export const API_REQUEST_ERROR = 'users:showError';

export function updateUser(newUser){
    return{
        type: API_REQUEST_SUCCES,
        payload: {
            user: newUser
        }
    }
}

export function showError(){
    return {
        type: API_REQUEST_ERROR,
        payload: {
            user:'ERROR!'
        }
    }
}

// export function onRequest(){
//     return{
//         type: API_REQUEST_REQUEST
//     }
// }

export function apiRequest(){
    return dispatch => {
        $.ajax({
            url: 'http://google.com',
            succes(response){
                console.log('SUCCES');
                dispatch(updateUser(response.newUser));
            },
            error(){
                console.log('ERROR');
                dispatch(showError());
            }
        })
    };
}