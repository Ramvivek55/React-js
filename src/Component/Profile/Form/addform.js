import React, { useState } from 'react';


const AddForm = (props) => {

  const initialState = {id: null, name: '', password: ''}
  const [users, setUser] = useState(initialState);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!users.name || !users.password) {
        return;
    }
    props.AddFormDetail(users);
    setUser(initialState);
  }


  const handleChange = (e) => {
     const { name, value } = e.target;
     const newUser = {
        ...users,
        [name]: value
     }
     setUser(newUser);
  }


   return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
     <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
             <label>Name</label>
             <input type="text" className="form-control" placeholder="Name" value={users.name} name="name" onChange={(e)=>handleChange(e)}/>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-3">
             <label>Password</label>
             <input type="text" className="form-control" placeholder="Password" value={users.password} name="password" onChange={(e)=>handleChange(e)}/>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </div>
     </div>
     </form>
    </>
   )
}


export default AddForm;