import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
      if(loading){
          return 'loading'
      }
    const handleRegisterName = event =>{
        setName(event.target.value)
    }
    const handleRegisterEmail = event =>{
        setEmail(event.target.value)
    }
    const handleRegisterPassword = event=>{
        setPassword(event.target.value)
    }
    const handleRegisterConfirmPassword = event=>{
        setConfirmPassword(event.target.value)
    }
    
    const handleRegisterSubmit = event =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        navigate('/about')
    }


    return (
        <div className='w-25 mx-auto mt-5'>
            <Form onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleRegisterName} type="text" placeholder="Enter name"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleRegisterEmail} type="email" placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleRegisterPassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleRegisterConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already have an account?<Link className='text-primary text-decoration-none pe-auto' to='/login'>Please login</Link></p>
        </div>
    );
};

export default Register;