import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    
    return (
        <div className='container-fluid bg-dark py-4 '>
          <h3 className='text-white text-center py-2'>Law Office of Fayej Ahamed</h3>
            <footer className='text-center'>
                <p className='text-white text-center'>7521 Broadway, #3ElmhurstNY11373</p>
                <p><small className='text-white'> &copy;copyright {year}</small></p>
            </footer>
        
    );
        </div>
    );
};

export default Footer;