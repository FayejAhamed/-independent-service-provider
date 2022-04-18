import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('serviceData.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='container'>
            <h1 className='text-center py-5 '>My Service</h1>
           <div className='row g-lg-4'>
           {
                services.map(service=> <ServiceCard key={service.id} service={service}></ServiceCard>
                )
            }
           </div>
        </div>
    );
};

export default Services;