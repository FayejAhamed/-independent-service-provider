import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    
    return (
        <div className='container-fluid bg-dark py-4'>
          
    
        
            <footer className='text-center'>
                <p><small className='text-white'> &copy;copyright {year}</small></p>
            </footer>
        
    );
        </div>
    );
};

export default Footer;