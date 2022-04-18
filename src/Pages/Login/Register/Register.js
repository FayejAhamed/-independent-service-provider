import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => { 
    const [errorRegister, setErrorRegister] = useState('')
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
      let errorElement;
      
    if(loading ){
        return <Loading></Loading>
    }
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}
                </p>
            </div>
        
    }

    
    const handleRegisterSubmit = async event =>{
      
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            const confirmPassword = event.target.confirmPassword.value;
            // const agree = event.target.terms.checked;
         
        if(password === confirmPassword){
            await createUserWithEmailAndPassword(email, password)
          
        }
        if(password !== confirmPassword){
             setErrorRegister('password not match');

        }
        if(user){
            navigate('/home')
        }
    
    
        }
      
    


    return (
        <div className='w-25 mx-auto mt-5'>
            <h1 className='text-center'>Register</h1>
            <Form onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                </Form.Group>
               
              <div>
              <Button className='w-100' variant="primary" type="submit">
                    Register
                </Button>
              </div>
            </Form>
            <p className='text-danger text center'>{errorRegister}</p>
            {errorElement}
            <p>Already have an account?<Link className='text-primary text-decoration-none pe-auto' to='/login'>Please login</Link></p>
        </div>
    );
};

export default Register;