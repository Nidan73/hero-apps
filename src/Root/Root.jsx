import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            
            <Navbar></Navbar>
            <main className="flex-grow">
            <Outlet></Outlet>
            </main>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default Root;