import React from 'react';
import '../Table/table.css';

const ProfileTable = (props) => {
     return(
        <>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {props.users.length !== 0 ? (
                       props.users.map(ele =>
                        <tr key={ele.id}>
                            <td>{ele.name}</td>
                            <td>{ele.password}</td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={()=>props.EditUser(ele)}>Edit</button>
                                <button type="button" className="btn btn-danger ml-2" onClick={()=>props.DeleteUser(ele.id)}>Delete</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No User Data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ProfileTable;