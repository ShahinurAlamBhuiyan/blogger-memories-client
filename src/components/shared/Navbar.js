import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const Navbar = ({toggle}) => {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/');
    }

    return (
        <nav className="flex justify-between items-center h-16 bg-red-100 shadow-md text-black font-mono" role="navigation">
            <Link to="/" className="pl-8">
                <p className="text-xl font-medium">-B-M-</p>
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/home" className="p-4 cursor-pointer">Home</Link>
                <Link to="/" className="p-4 cursor-pointer">About</Link>
                <Link to="/dashboard" className="p-4 cursor-pointer">Dashboard</Link>

                {
                    admin?.result.email ? <Button variant="contained" color="secondary" onClick={logout}>Logout</Button> :
                        <Button variant="contained" color="primary" onClick={() => history.push('/auth')}>Admin Login</Button>
                }
            </div>
        </nav>
    );
};

export default Navbar;