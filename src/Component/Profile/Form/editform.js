import React, { useEffect, useState } from 'react';

const EditForm = (props) => {

    const [users, setUser] = useState(props.currentInfo);
  
    useEffect(()=>{
       setUser(props.currentInfo)
    },[props])


    const handleSubmit = (e) => {
      e.preventDefault();
      if(!users.name || !users.password) {
          return;
      }
      props.UpdateUser(users);
    }
  
  
    const handleChange = (e) => {
       const { name, value } = e.target;
       const updateUser = {
          ...users,
          [name]: value
       }
      setUser(updateUser);
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
            <button type="submit" className="btn btn-primary">Update</button>
            <button type="button" className="btn btn-secondary" onClick={()=>props.setEditMode(false)}>Cancel</button>
          </div>
        </div>
     </div>
     </form>
    </>
   )
}


export default EditForm;