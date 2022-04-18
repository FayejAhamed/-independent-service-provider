import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      let errorElement;

      const from = location.state?.from?.pathname || "/";
      if(loading || sending ){
        return <Loading></Loading>
    }
    if(user){
        navigate(from, { replace: true });
    }
     
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}
                </p>
            </div>
        
    }
    
    
    
    const handleLoginSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
       signInWithEmailAndPassword(email, password)
        // console.log(user)
    }
   

    const resetPassword =async() =>{
        const email = emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
           toast('Please enter your email address')
       }
    }
  

    return (
        <div className='w-25 mx-auto mt-5 mb-5'>
            <h1 className='text-center'>Login</h1>
            <Form onSubmit={handleLoginSubmit}>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
                </Form.Group>
          


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>


               <div className=''> <Button variant="primary w-100 mt-3" type="submit">
                    Submit
                </Button></div>
            </Form>
            {errorElement}
            <p className='pt-2 mt-2'>Don't you have account? <Link className='text-primary text-decoration-none pe-auto' to='/register'>Please Register</Link></p>
           {/* <div> <button className='btn btn-primary w-100'>Continue with Google</button></div> */}
          <div className='d-flex'>
          <p className='text-center'>Forget Password? <span className='btn btn-link text-primary text-decoration-none pe-auto mb-2' onClick={resetPassword}>Reset password</span></p>
          </div>
           <SocialLogin></SocialLogin>
           <ToastContainer/>

        </div>
    
    );
};

export default Login;