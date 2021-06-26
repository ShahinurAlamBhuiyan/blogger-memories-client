import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const Dropdown = ({isOpen, toggle}) => {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/');
    }
    return (
        <div className={isOpen ? "grid gird-rows-4 text-center bg-gray-300" : "hidden" } onClick={toggle}>
            <Link to="/home" className="p-4 cursor-pointer">Home</Link>
                <Link to="/" className="p-4 cursor-pointer">About</Link>
                <Link to="/dashboard" className="p-4 cursor-pointer">Dashboard</Link>

                {
                    admin?.result.email ? <Button variant="contained" color="secondary" onClick={logout}>Logout</Button> :
                        <Button variant="contained" color="primary" onClick={() => history.push('/auth')}>Admin Login</Button>
                }
        </div>
    );
};

export default Dropdown;