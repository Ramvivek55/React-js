

const loginDetail = {
    name: '',
    password: ''
}

const LoginReducer = (state = loginDetail, action) => {
    switch (action.type) {                                                                                                                                                                                                                                                                                                                                
        case 'login':
            return {
                name: action.payload.name,
                password: action.payload.password
            }
        default:
            return state;
    }
}


export default LoginReducer;