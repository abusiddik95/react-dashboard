import React from 'react';
import './Header.css'
import { useAuth } from '../Login/useAuth';
import TopInfoBar from '../TopInfoBar/TopInfoBar';




const Header = () => {
    const auth = useAuth();
    console.log(auth.user);
    return (
        <div className="header">
            <span> <TopInfoBar></TopInfoBar> </span>

         { auth.user ?
           <h3> {auth.user.name} </h3>   :
           <a className="header-login" href="/login">Sign in</a>
        }
        {/* {
            auth.user ? <a href="/login">Sign out</a> :
            <a href="/login">Sign in</a>
        } */}
        </div>
    );
};

export default Header;