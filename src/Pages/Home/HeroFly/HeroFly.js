import React from 'react';
import './HeroFly.css'
import { BsArrowLeftRight } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'

const HeroFly = () => {
    return (
        <div className=''>
            <div className='mx-32 md:mx-28 lg:mx-44 xl:mx-36 2xl:mx-64'>
                <h2 className='text-xl font-semibold mb-4'>Where are you flying?</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-10'>
                    <div>
                        <h2 className='font-semibold'>From - To</h2>
                        <div class="">
                            <select name='' className="select select-bordered block bg-white mt-2 border-gray-400 border rounded-none w-full" required>
                                <option value="" disabled selected>Select a route</option>
                                <option value="Lahore - Karachi">Lahore - Karachi</option>
                                <option value="Karachi - Lahore">Karachi - Lahore</option>
                                <option value="Ahmedabad - Lahore">Ahmedabad - Lahore</option>
                                <option value="Lahore - Ahmedabad">Lahore - Ahmedabad</option>
                                <option value="Kashmir - Islamabad">Kashmir - Islamabad</option>
                                <option value="Islamabad - Kashmir">Islamabad - Kashmir</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-semibold'>Trip</h2>
                        <div class="">
                            <select name='' className="select select-bordered block bg-white mt-2 border-gray-400 border rounded-none w-full" required>
                                <option value="" disabled selected>Select</option>
                                <option value="Return">Return</option>
                                <option value="Single">Single</option>
                                <option value="Double">Double</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-semibold'>Depart - Return</h2>
                        <div class="">
                            <select name='' className="select select-bordered block bg-white mt-2 border-gray-400 border rounded-none w-full" required>
                                <option value="" disabled selected>Select date</option>
                                <option value="07 Nov 23 - 13 Nov 23">07 Nov 23 - 13 Nov 23</option>
                                <option value="08 Nov 23 - 14 Nov 23">08 Nov 23 - 14 Nov 23</option>
                                <option value="09 Nov 23 - 15 Nov 23">09 Nov 23 - 15 Nov 23</option>
                                <option value="10 Nov 23 - 16 Nov 23">10 Nov 23 - 16 Nov 23</option>
                                <option value="11 Nov 23 - 17 Nov 23">11 Nov 23 - 17 Nov 23</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-semibold'>Passenger - Class</h2>
                        <div class="">
                            <select name='' className="select select-bordered block bg-white mt-2 border-gray-400 border rounded-none w-full" required>
                                <option value="" disabled selected>Select passenger & class</option>
                                <option value="1 Passenger, Economy">1 Passenger, Economy</option>
                                <option value="2 Passengers, Economy">2 Passengers, Economy</option>
                                <option value="3 Passengers, Economy">3 Passengers, Economy</option>
                                <option value="4 Passengers, Economy">4 Passengers, Economy</option>
                                <option value="5 Passengers, Economy">5 Passengers, Economy</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end items-center gap-2'>
                    <button className='btn border-none rounded-sm bg-white text-black hover:bg-sky-500 hover:text-white'>+ Add Promo Code</button>
                    <button className='btn bg-sky-700 hover:bg-sky-600 border-none rounded-sm flex items-center justify-center gap-2'><RiSendPlaneFill className='text-xl' /> Show Flights</button>
                </div>
            </div>
        </div>
    );
};

export default HeroFly;