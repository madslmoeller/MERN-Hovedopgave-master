import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function CreateUser() {

  const [id, setId] = useState()
  const [name, setName] = useState();
  const [role, setRole] = useState();

  const [newId, setNewId] = useState('')
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');

  const [userList, setUserList] = useState([]);

  const addToList = () => {
    Axios.post('http://localhost:3001/create/user', {
      id: id,
      name: name,
      role: role,
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/read/user').then((response) => {
      setUserList(response.data)
    });
  }, []);

  const updateUser = (id) => {
    Axios.put('http://localhost:3001/update/user', {
      id: id,
      newId: newId,
      newName: newName,
      newRole: newRole,
    });
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/delete/user/${id}`);
  };

  return (
    <div>
      <div className='text'>
        <div className="AppOne">
          <h1>Creater User</h1>
          <div className='createUser'>
            <label>User ID:</label>
            <input type='text' placeholder='Type Your ID...'
              onChange={(event) => {
                setId(event.target.value)
              }}
            />
            <label>User Name:</label>
            <input type='text' placeholder='Type Your Name...'
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
            <label>User Role: </label>
            <input type='text' placeholder='Type Your Role...'
              onChange={(event) => {
                setRole(event.target.value)
              }}
            />
          </div>
          <button onClick={addToList}>Add To List</button>
          {userList.map((val, key) => {
            return <div key={key}>
              <div className='userBox'>
              <div className='userHeader'>
                <h3>Update/Delete User</h3>
              </div>
                <div className='userRole'>
                  <h3>ID: {val.id}</h3>
                  <h3>Name: {val.name}</h3>
                  <h3>Role: {val.role}</h3>
                </div>
                <input type='text' placeholder='New User ID...'
                  onChange={(event) => {
                    setNewId(event.target.value)
                  }}
                />
                <input type='text' placeholder='New User Name...'
                  onChange={(event) => {
                    setNewName(event.target.value)
                  }}
                />
                <input type='text' placeholder='New User Role...'
                  onChange={(event) => {
                    setNewRole(event.target.value)
                  }}
                />
              </div>
              <button onClick={() => updateUser(val._id)}>Update</button>
              <button onClick={() => deleteUser(val._id)}>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
