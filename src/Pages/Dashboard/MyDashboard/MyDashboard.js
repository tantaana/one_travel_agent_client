import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../Assets/nav-logo.png'

const MyDashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='m-10 p-10'>

            <h2 className='text-3xl font-semibold text-blue-900 text-center mb-4'>Hello, <span className='font-normal'>{user?.displayName}</span></h2>
            <h2 className='text-4xl font-semibold text-center mb-2 flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-2 xl:gap-6'>Welcome to <span><img src={logo} className="w-28" alt="" srcset="" /></span> dashboard</h2>

            <div className='flex justify-center mt-10'>
                <div className="w-[600px] flex flex-col items-center gap-6 border border-sky-700 rounded-xl p-10">
                    <h2 className='text-3xl font-bold'>User Profile</h2>
                    <div className='avatar'>
                        <div className='w-52 rounded-full border-4 border-sky-800'>
                            {user?.photoURL ?
                                <img src={user.photoURL} alt="" /> :
                                <img src="https://www.pinkvilla.com/english/images/2022/10/1942600650_hrithik-roshan-fighter-main-final_640*360.jpg" alt="" />}
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-wrap items-center justify-center gap-2'>
                            <h2 className="text-2xl font-bold text-center">Name :</h2>
                            <h2 className="text-2xl font-semibold text-gray-600 text-center">{user?.displayName}</h2>
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-2'>
                            <h2 className="text-2xl font-bold text-center">Email :</h2>
                            <h2 className="text-2xl font-semibold text-gray-600 text-center">{user?.email}</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyDashboard;