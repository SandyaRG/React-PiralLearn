import axios from 'axios';
import { useState } from 'react';
import '../style/login.css';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './Firebase';
import * as React from 'react';
import { errors, layout } from '../layout';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi } from 'piral';

export default function Login(){
    const [validationMsg, setValidationMsg] = useState("");
    const [loginValues, setLoginValue] = useState({
        email: '',
        password: ''
    });

    function loginToApplication(){
        // change to your feed URL here (either using feed.piral.cloud or your own service)
        const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/my-app-educare-pilet1-feed';

        const instance = createInstance({
        state: {
            components: layout,
            errorComponents: errors,
        },
        plugins: [...createStandardApi()],
        requestPilets() {
            return fetch(feedUrl)
            .then((res) => res.json())
            .then((res) => res.items);
        },
        });
        const root = createRoot(document.querySelector('#app'));
        //instance.root.setData("Role",sessionStorage.getItem("Role"));
        //instance.root.setData("AuthToken",sessionStorage.getItem("AuthToken"));
        root.render(<Piral instance={instance} />);
    }
    
    function passToDShowAndHideMenu(e: any): void {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginValues.email, loginValues.password)
        .then((userCredential: any) => {
            // Signed in 
            const user = userCredential.user;
            sessionStorage.setItem('AuthToken', userCredential.user.accessToken)
            console.log(user);
            // axios.post('https://localhost:7090/api/User/GetUserData', loginValues               
            // ).then((res: any) => {
            //     if(res?.data?.length === 0){
            //         setValidationMsg('Please Enter Valid Credentials');
            //     }
            //     else{
            //         sessionStorage.setItem("Role", res?.data[0]?.role);
            //     }
            //     //props.roleId(res?.data[0]?.role === 'Admin' ? 1 : res?.data[0]?.role === 'Student' ? 2 : 0);
            //     loginToApplication();
            // });
            loginToApplication();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    function handleChange(event: any){
          const { name, value } = event.target;
          setLoginValue({ ...loginValues, [name]: value });
      }
    return <div>
<html lang="en">
    <head>
        <title>Animated Login Form</title>
    </head>
    <body className='loginBody'> 
    <div className="loginContainer">
    <center> <h1> Educare </h1> </center>   
    <form>  
        <div className="txt_field">      
            <input type="text" name="email" onChange={handleChange} required/> 
            <span></span>
            <label>Username </label>
        </div>
        <div className="txt_field">   
            <input type="password" name="password" onChange={handleChange} required/> 
            <span></span> 
            <label>Password </label>  
        </div>
        <div>
            <span className="validationMsg">{validationMsg}</span>
        </div>  
        <div className='loginDiv'>
        <button className='loginbtn' type="button" onClick={passToDShowAndHideMenu}>Login</button> 
        </div> 
        <div className='mt-20'>
        </div>
    </form>     
    </div>   
</body>  
</html>


    </div>
}