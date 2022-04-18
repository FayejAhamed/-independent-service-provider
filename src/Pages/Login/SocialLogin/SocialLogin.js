import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    let errorElement;
    if(loading ){
        return <Loading></Loading>
    }
    if (error ) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}
               
                </p>
            </div>
        
    }
    if (user ) {
        navigate(from, { replace: true });

    }
    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
            </div>
            <div>
            <Button
                    onClick={() => signInWithGoogle()}
                    variant="primary  w-100 d-block mx-auto my-2">
                    
                    <span className='px-2'> Google sign In</span>
                </Button>
            </div>
            {errorElement}
        </div>
    );
};

export default SocialLogin;