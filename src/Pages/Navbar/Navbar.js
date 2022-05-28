import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from './Logo.png';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const signOutProcess = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        {user?<li><Link onClick={signOutProcess} to='/'>Sign Out</Link></li> : <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div class="navbar bg-primary mt-[-75px]">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <ul class="p-2">
                            {links}
                        </ul>
                    </ul>
                </div>
                <img className='w-20 ml-5' src={Logo}></img>
            </div>
            <div class="navbar-center hidden lg:flex font-bold">
                <ul class="menu menu-horizontal p-0">  
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                    <label for='sidebar' tabIndex="1" className="btn btn-ghost lg:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                </div>
        </div>
    );
};

export default Navbar;