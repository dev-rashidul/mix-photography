import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../images/error.png';

const Error = () => {
    return (
        <div className='w-50 mx-auto text-center py-5'>
            <Image className='w-100' src={error}></Image>
            <Link style={{background: "#c300b9", border:"none"}} className='btn btn-primary mt-4 py-2 px-4' to='/'>Go to Home</Link>
        </div>
    );
};

export default Error;