import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";
   
    const handleLoginEmail = event =>{
        setEmail(event.target.value)
    }
    const handleLoginPassword = event=>{
        setPassword(event.target.value)

    }
    const handleLoginSubmit = event =>{
        event.preventDefault();
       signInWithEmailAndPassword(email, password)
        // console.log(user)
    }
    useEffect(()=>{
        if(user){
            navigate(from)
        }
    },[user])

    return (
        <div className='w-25 mx-auto mt-5'>
            <Form onSubmit={handleLoginSubmit}>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleLoginEmail} type="email" placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleLoginPassword} type="password" placeholder="Password" required />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don't you have account? <Link className='text-primary text-decoration-none pe-auto' to='/register'>Please Register</Link></p>
        </div>
    
    );
};

export default Login;