import { useState } from "react";
import '../Login/login.css';
import { action } from '../Action/loginaction';
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
    const [name, setName] = useState('Well');
    const [password, setPassword] = useState('Happy');
    const [error, setError] = useState({ name: '', password: '' });
    const dispatch = useDispatch();
    const storeState = useSelector(state => state);


    const handleSubmit = (e) => {
        e.preventDefault();
        let userInfo = {
            name: name,
            password: password
        }

        let obj = {}
        Object.keys(userInfo).forEach(ele => {
            let info = validation(ele, userInfo[ele]);
            if (info && info.length !== 0) {
                obj[ele] = info
            }
        });
        if (Object.keys(obj).length !== 0) {
            setError(obj);
            return;
        }
        dispatch(action.LoginAction(userInfo));
        console.log('Submitted Successfully!');
        console.log(storeState);
        props.history.push('/profile');
    }


    const handleChange = (e) => {
        let fields = e.target.name;
        let value = e.target.value;
        if (fields === 'name') {
            setName(value);
        } else if (fields === 'password') {
            setPassword(value);
        }

        let errorInfo = {
            ...error,
            [fields]: validation(fields, value)
        }
        setError(errorInfo)


    }

    const validation = (fields, value) => {
        switch (fields) {
            case 'name':
                if (!value) {
                    return 'Name field is required!'
                } else {
                    return ''
                }
            case 'password':
                if (!value) {
                    return 'Password field is required!'
                } else {
                    return ''
                }
            default:
                return ''
        }
    }



    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <label>UserName</label>
                            <input type="text" placeholder="UserName" className={"form-control " + (error.name ? 'errCode' : '')} name="name" value={name} onChange={(e) => handleChange(e)} />
                            <span className="text-danger">{error.name}</span>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Password</label>
                            <input type="password" placeholder="Password" className={"form-control " + (error.password ? 'errCode' : '')} name="password" value={password} onChange={(e) => handleChange(e)} />
                            <span className="text-danger">{error.password}</span>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary">Login</button> <strong>Click To Navigate Next Profile Page</strong>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}


export default Login;