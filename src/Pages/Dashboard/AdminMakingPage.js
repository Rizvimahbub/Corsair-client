import React from 'react';
import { toast } from 'react-toastify';

const AdminMakingPage = ({ index, user, refetch }) => {
    const { role, email, name, phone } = user;
    const makeAdmin = () => {
        
        
        fetch(`https://tranquil-crag-79449.herokuapp.com/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                refetch();
                toast.success('Made as admin')
            }
        })
        
    }
    const removeAdmin = () => {
        fetch(`https://tranquil-crag-79449.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch();
            toast.error('Removed from admin')
        })
        
    }
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{role === 'admin'?  
            <button onClick={removeAdmin} class="btn btn-xs bg-red-500 border-0 text-white">Remove Admin</button>
            :
            <button onClick={makeAdmin} class="btn btn-xs bg-green-500 border-0 text-white">Make Admin</button>

        }</td>
        </tr>
    );
};

export default AdminMakingPage;