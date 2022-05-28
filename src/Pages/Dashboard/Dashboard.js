import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useState({});
    useEffect(() => {
        fetch(`https://tranquil-crag-79449.herokuapp.com/users/${user.email}`, {
            method : 'GET',
            headers : {
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    } ,[user.email])

    return (
        <div class="drawer drawer-mobile ">
            <input id="sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    {admin.role === 'user' && <li><Link to='/dashboard'>My Orders</Link></li>}
                    {admin.role === 'user' && <li><Link to='/dashboard/addReview'>Reviews</Link></li>}
                    {admin.role === 'admin' && <li><Link to='/dashboard/users'>All users</Link></li>}
                    
                    <li><Link to='/dashboard/myProfile'>Profile</Link></li>
                    { admin.role === 'admin' && <li><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>}
                    { admin.role === 'admin' && <li><Link to='/dashboard/addProduct'>Add Product</Link></li>}
                    { admin.role === 'admin' && <li><Link to='/dashboard/admin'>Make Admin</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;