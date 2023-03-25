import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AllPackages = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-center mb-20 text-sky-800'>All Packages</h2>
            <div className='flex flex-col xl:flex-col 2xl:flex-row items-center gap-4 mb-10 mx-4 bg-gray-300 p-2'>
                <h2 className='text-2xl font-semibold text-blue-900'>Logged In User: <span className='text-black font-normal'>{user?.displayName}</span></h2>
                <h2 className='text-2xl font-semibold text-teal-600'>User Email: <span className='text-black font-normal'>{user?.email}</span></h2>
            </div>
        </div>
    );
};

export default AllPackages;