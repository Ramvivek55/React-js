import React from 'react';
import { useState } from "react";
import AddForm from './Form/addform';
import EditForm from './Form/editform';
import ProfileTable from './Table/table';
import '../Profile/profile.css';

const Profile = () => {

   const usersData = [
      { id: 1, name: "Regan", password: "economics" },
      { id: 2, name: "Mackinzie", password: "forster" },
      { id: 3, name: "Francis", password: "nemesis" }
   ];

   const initialCurrentInfo = { id: null, name: "", password: "" }


   const [users, setUser] = useState(usersData);
   const [currentInfo, setCurrentInfo] = useState(initialCurrentInfo);
   const [editMode, setEditMode] = useState(false);


   const AddFormDetail = (userInfo) => {
      userInfo.id = users.length + 1;
      const addInfo = [...users, userInfo]
      setUser(addInfo);
   }


   const UpdateUser = (userInfo) => {
      setEditMode(false);
      const UpdateInfo = users.map(ele => ele.id === userInfo.id ? userInfo : ele);
      setUser(UpdateInfo);
   }

   const EditUser = (info) => {
      setEditMode(true);
      const currentDetails = {
         id: info.id,
         name: info.name,
         password: info.password
      }
      setCurrentInfo(currentDetails);
   }

   const DeleteUser = (id) => {
      setEditMode(false);
      console.log(id);
      const userFilter = users.filter(ele => ele.id !== id);
      setUser(userFilter);
   }


   return (
      <div className="container">   {!editMode ? (
         <>
            <h2>Add User</h2>
            <AddForm AddFormDetail={AddFormDetail} />
         </>
      ) : (
         <>
            <h2>Update User</h2>
            <EditForm currentInfo={currentInfo} UpdateUser={UpdateUser} editMode={editMode} setEditMode={setEditMode} />
         </>
      )}
         <>
            <h2>Profile Table</h2>
            <ProfileTable users={users} EditUser={EditUser} DeleteUser={DeleteUser} />
         </>
      </div>
   )
}


export default Profile;