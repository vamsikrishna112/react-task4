import Axios from "axios";
import {useEffect, useState} from "react";
import './style.css';

function Table(){
    const [dt, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://dummyjson.com/users")
        .then((res) => {
            if(res.status === 200){
                console.log(res.data.users);
                setData(res.data.users);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err) => alert(err));
    },[])

    const ListNames = () => {
        return dt.map((val) => {
            return(
                <tbody>
                    <td>{val.id}</td>
                    <td><img src={val.image} alt="profile"/></td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.gender}</td>
                    <td>{val.email}</td>
                    <td>{val.username}</td>
                    <td>{val.domain}</td>
                    <td>{val.ip}</td>
                    <td>{val.university}</td>
                </tbody>
            )
        })
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Dummy data</h1>
            <table>
                <thead>
                    <th>Sno</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </thead>
                {ListNames()}
            </table>
        </div>
    )
}

export default Table;


// UserTable.js
// import React, { useState, useEffect } from 'react';

// const Table = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetch('https://dummyjson.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data.users));
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div>
//       <h2>User Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Sno</th>
//             <th>Profile Pic</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Gender</th>
//             <th>E-mail</th>
//             <th>Username</th>
//             <th>Domain</th>
//             <th>IP</th>
//             <th>University</th>

//             {/* Add more headers based on your data */}
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//                 <td >{user.id}</td>
//                 <td ><img src={user.image} alt="profile"/></td>
//                 <td >{user.firstName}</td>
//                 <td >{user.lastName}</td>
//                 <td >{user.gender}</td>
//                 <td >{user.email}</td>
//                 <td >{user.username}</td>
//                 <td >{user.domain}</td>
//                 <td >{user.ip}</td>
//                 <td >{user.university}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
