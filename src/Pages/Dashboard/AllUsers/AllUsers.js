import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const AllUsers = () => {
    const { user } = useContext(AuthContext);

    const [searchData, setSearchData] = useState('');

    const url = `https://one-travel-agent-server.vercel.app/userData`;

    const { data: userData = [], isLoading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;

        }

    })

    if (isLoading) {
        return <Loader></Loader>
    }


    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;


        const searchEmail = userData.filter(user => user?.email === email);

        if (searchEmail) {
            setSearchData(searchEmail)
        }


        form.email.value = '';

    }

    const handleReset = event => {
        setSearchData(userData);
        refetch();
    }


    return (
        <div className='py-10'>
            <h2 className='text-3xl font-bold text-center mb-20 text-sky-800'>All Users</h2>
            <div className='flex flex-col xl:flex-col 2xl:flex-row items-center gap-4 mb-10 mx-4 bg-gray-300 p-2'>
                <h2 className='text-2xl font-semibold text-blue-900'>Logged In User: <span className='text-black font-normal'>{user?.displayName}</span></h2>
                <h2 className='text-2xl font-semibold text-teal-600'>User Email: <span className='text-black font-normal'>{user?.email}</span></h2>
            </div>


            <div className='flex flex-col xl:flex-row items-center gap-2'>
                <form onSubmit={handleSearch} className='mx-4 flex items-center gap-4'>
                    <input type="email" name='email' placeholder="🔎 Search user with email" className="input input-bordered border border-sky-700 w-full max-w-xs rounded-none" required />
                    <input type="submit" className='btn glass border-none bg-sky-400 hover:bg-sky-500 btn-md font-semibold hover:text-white text-black rounded-xl' value="Search 🔎" />
                </form>

                <input onClick={handleReset} type="submit" className='btn glass bg-teal-500 hover:bg-teal-600 btn-md font-semibold hover:text-white text-black rounded-xl' value="View All" />
            </div>

            <div className='border border-black mx-4 my-4'>
                <div className="overflow-x-auto w-full">
                    <table className="table active w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-blue-900'>User Image</th>
                                <th className='text-blue-900'>Full Name</th>
                                <th className='text-blue-900'>Email</th>
                                <th className='text-blue-900'>User Type</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                !searchData ?
                                    userData?.map((user, i) =>

                                        <tr className='hover:brightness-75'>
                                            <td className='text-xl font-bold'>{i + 1}</td>
                                            <td className=''>
                                                <div className="avatar">
                                                    <div className="mask w-14 h-14">
                                                        <img src={user?.doctorImg} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold text-lg">{user?.name}</div>
                                                </div>
                                            </td>
                                            <td className='text-lg font-semibold text-blue-600'>
                                                {user?.email}
                                            </td>
                                            <>
                                                {
                                                    user?.userType === 'Admin' ?
                                                        <td className='text-lg font-bold text-red-800'>{user?.userType}</td> :
                                                        <td className='text-lg font-semibold text-blue-900'>{user?.userType}</td>
                                                }
                                            </>

                                            {/* <th>
                                                {
                                                    patient.fees && !patient.paid && <Link to={`/dashboard/payment/${patient._id}`}><button onClick={startLoader} className="btn btn-secondary text-white btn-md font-bold mr-2">Pay Card </button></Link>
                                                }
                                                {
                                                    patient.fees && patient.paid && <span className='text-green-500'>Paid</span>
                                                }

                                                <button onClick={startLoader} className="btn btn-secondary text-white btn-md font-bold">Pay SSL</button>
                                            </th> */}
                                        </tr>
                                    ) :
                                    searchData?.map((user, i) =>

                                        <tr className='hover:brightness-75'>
                                            <td className='text-xl font-bold'>{i + 1}</td>
                                            <td className=''>
                                                <div className="avatar">
                                                    <div className="mask w-14 h-14">
                                                        <img src={user?.doctorImg} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold text-lg">{user?.name}</div>
                                                </div>
                                            </td>
                                            <td className='text-lg font-semibold text-blue-600'>
                                                {user?.email}
                                            </td>
                                            <>
                                                {
                                                    user?.userType === 'Admin' ?
                                                        <td className='text-lg font-bold text-red-800'>{user?.userType}</td> :
                                                        user?.userType === 'Patient' ?
                                                            <td className='text-lg font-semibold text-green-800'>{user?.userType}</td> :
                                                            <td className='text-lg font-semibold text-blue-900'>{user?.userType}</td>
                                                }
                                            </>

                                            {/* <th>
                                        {
                                            patient.fees && !patient.paid && <Link to={`/dashboard/payment/${patient._id}`}><button onClick={startLoader} className="btn btn-secondary text-white btn-md font-bold mr-2">Pay Card </button></Link>
                                        }
                                        {
                                            patient.fees && patient.paid && <span className='text-green-500'>Paid</span>
                                        }

                                        <button onClick={startLoader} className="btn btn-secondary text-white btn-md font-bold">Pay SSL</button>
                                    </th> */}
                                        </tr>
                                    )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;