'use client'
import axios from 'axios';
import {Stack,TextField,Button} from '@mui/material'
import { useEffect, useState } from 'react';



export default function Home({data})  {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>username</th>
            <th>correo</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>

        
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
             <td>{user.email}</td> 
            <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>

      </table>
      <ul>

      </ul>
    </div>
  );
}
