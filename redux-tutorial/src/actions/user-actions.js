import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';

export function updateUser(newUser){
    return{
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function apiRequest(){
    return dispatch => {
        $.ajax({
            url: 'http://google.com',
            succes(){
                console.log('SUCCES');
            },
            error(){
                console.log('ERROR');
            }
        })
    };
}