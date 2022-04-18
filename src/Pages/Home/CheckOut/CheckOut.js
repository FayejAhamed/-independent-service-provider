import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className='w-50 mx-auto mb-5' style={{height:"80vh"}}>
            <h2 className='text-center py-5'>Get Your Appoinment here:</h2>
            <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>What is your name?</Form.Label>
                    <Form.Control type="text" placeholder="" />
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>What is your email address?</Form.Label>
                    <Form.Control type="email" placeholder="" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>What is your homen address?</Form.Label>
                    <Form.Control type="text" placeholder="" />
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>What is your phone number</Form.Label>
                    <Form.Control type="number" placeholder="" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and conditions" />
                </Form.Group>
                <Button variant="primary w-50 " type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;