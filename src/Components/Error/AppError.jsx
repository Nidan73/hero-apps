import React from 'react';
import { Link } from 'react-router';
import appError from '../../assets/App-Error.png'
const AppError = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
        <img src={appError} alt="" />
      <h1 className="text-5xl font-bold">OPPS!! APP NOT FOUND</h1>
      <p className="py-6">
        The App you are requesting is not found on our system.  please try another apps
      </p>
      <Link to='/'>
      <button className="btn btn-primary">Go to Home</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppError;