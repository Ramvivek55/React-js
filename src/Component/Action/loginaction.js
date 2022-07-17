const LoginAction = (user) =>{
    console.log(user,'action');
    return {
        type: 'login',
        payload: user
    }
}


export const action = {
    LoginAction
}