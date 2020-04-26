import React, { useState } from 'react';
import Auth from './useAuth';
import dashImage from '../../../src/images/r-dash.png';
import './Login.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';


const Login = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        isValid : false,
    });
    const auth = Auth();

    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res=>{
           window.location.pathname = '/dashboard'
        })
    }
    const handleSignOut = ()=>{
        auth.signOut()
        .then(res=>{
            window.location.pathname ='/login'
        })
    }

    const is_valid_email = email =>/(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const hasNumber = input => /\d/.test(input);
    const handleChange = (e) =>{
        const newUserInfo = {
            ...user
        };
        let isValid = true;
        if(e.target.name === 'email'){
            isValid = is_valid_email(e.target.value);
        }
        if(e.target.name === 'password'){
            isValid = e.target.value.length > 8 && hasNumber(e.target.value);
        }

        newUserInfo[e.target.name] = e.target.value;
        newUserInfo.isValid = isValid;
        setUser(newUserInfo);
        console.log(newUserInfo);
    }
    const createAccount = (event) =>{
        if(user.isValid){
            auth.createUser()
            .then(res=>{
                console.log(res);
                const createdUser = {...user};
                createdUser.isSignedIn = true;
                setUser(createdUser);
            })
            .catch(err => {
                console.log(err);
            })
            
        }else{
            console.log('form is not valid', user);
        }
        event.preventDefault();
        event.target.reset();
    }

    const signInUser = (event)=>{
        event.preventDefault();
        event.target.reset();
    }
    const displaySignUp = ()=>{
        const signup = document.getElementsByClassName('signup');
        const login = document.getElementsByClassName('login');
        for (var i=0; i<signup.length;i =1){
            signup[i].style.display = 'block';
            login[i].style.display = 'none';
        }    
    }
    const displayLogin = ()=>{
        const signup = document.getElementsByClassName('signup');
        const login = document.getElementsByClassName('login');
        for (var i=0; i<signup.length;i =1){
            signup[i].style.display = 'none';
            login[i].style.display = 'block';
        }    
    }
    return (
        <div>
            <div className="react-dash-area">
                <img src={dashImage} alt=""/>
            </div>
            <div className="auth-area">
            <div className="signing">
            <div className="toggle">
                <h4 id="login" onClick={displayLogin}>Login</h4>
                <h4 id="new-user" onClick={displaySignUp}>New User</h4>
            </div>
            <h2>Welcome To DashBoard</h2>
            {
                auth.user ? <button onClick={handleSignOut} className="google-btn">Sign Out</button> :
                <button style={{margin:"10px 0"}} onClick={handleSignIn} className="google-btn"> <LockOpenIcon className="svg" /> Sign In With Google </button>
            }
                 <br/>
                <span>or</span>
            <div className="login">
            <form onSubmit={signInUser}>
                    <input onBlur={handleChange} type="text" name="email" placeholder=" Your Email"/>
                    <br/>
                    <input onBlur={handleChange} type="password" name="password" id="" placeholder=" Your Password"/>
                    <br/>
                    <input type="submit" value="Sign In"/>
                </form>
            </div>
            <div className="signup">
                <form onSubmit={createAccount}>
                    <input onBlur={handleChange} type="text" name="name" placeholder=" Your Name"/>
                    <br/>
                    <input onBlur={handleChange} type="text" name="email" placeholder=" Your Email"/>
                    <br/>
                    <input onBlur={handleChange} type="password" name="password" id="" placeholder=" Your Password"/>
                    <br/>
                    <input type="submit" value="Create Account"/>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;