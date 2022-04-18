import React from 'react';
import sectionImg from '../../../images/section/section.png'

const Sections = () => {
    return (
        <div className='container my-5 pt-2'>
            <h1 className='my-5'>Decide Commit Succeed.</h1>
            <div className='row'>
                <div className='col-lg-6 '>
                    <p className='p-3'>At Leslie I. Snyder P.A., I advocate for clients in Business-Based Immigration, Citizenship and Deportation Defense cases. Based in Miami, I am familiar with the courts throughout all of Florida. I draw on my skill and experience to help you resolve your legal problem, and no matter what your case involves, I am focused on a successful result. Please read my profile to learn more about my professional background.Finding the right lawyer to handle a legal issue can be the difference between a positive result and continued frustration. At the Law Offices of Michael A. Cervini, P.C., in Queens, I have been helping New York residents achieve their objectives for more than 30 years. I represent clients in a range of civil matters, including personal injury, accident litigation, falls, construction related injuries, police brutality, civil rights, workers' compensation, negligence, accidents, animal attacks, auto accidents, bicycle accidents, slip and fall, school bus accidents, severe burns, wrongful death, premises liability, </p>
                </div>
                <div className='col-lg-6'>
                    <img src={sectionImg} className="w-100 rounded-2 p-2" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sections;