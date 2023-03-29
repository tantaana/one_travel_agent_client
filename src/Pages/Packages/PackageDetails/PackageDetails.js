import React, { useState } from 'react';
import './PackageDetails.css'
import { SlMagnifier, SlCalender } from 'react-icons/sl';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { FiPlus, FiMinus } from 'react-icons/fi';
import AllTitle from '../../../Hooks/AllTitle';
import maldives from '../../../Assets/maldives.png'

const PackageDetails = () => {
    AllTitle('Packages')

    //////------Increament and decreament by button-----///////

    const [counter1, setCounter1] = useState(1);
    const incrementCounter1 = () => setCounter1(counter1 + 1);
    let decrementCounter1 = () => setCounter1(counter1 - 1);
    if (counter1 <= 1) {
        decrementCounter1 = () => setCounter1(1);
    }


    const [counter2, setCounter2] = useState(0);
    const incrementCounter2 = () => setCounter2(counter2 + 1);
    let decrementCounter2 = () => setCounter2(counter2 - 1);
    if (counter2 <= 0) {
        decrementCounter2 = () => setCounter2(0);
    }

    return (
        <div>
            <div className='packageImg mx-4 mb-32 lg:mx-10 py-40'>
                <h2 className='text-4xl md:text-5xl font-bold text-center my-10'>Maldives</h2>
                <div className='flex items-center justify-center gap-1 relative left-[20px]'>
                    <input type="text" placeholder="Type a destination" className="input input-md input-bordered rounded-full w-full max-w-xs border border-gray-400" />
                    <div className='p-2 rounded-full bg-sky-700 hover:bg-sky-600 cursor-pointer relative right-[40px]'>
                        <SlMagnifier className='text-2xl font-bold text-white' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-10 xl:gap-16 2xl:gap-10 mx-8 xl:mx-16 2xl:mx-20'>
                    <div className='xl:col-span-2 2xl:col-span-3'>
                        <div className='flex items-center gap-4 mb-6 mx-4'>
                            <h2 className='text-lg lg:text-xl text-gray-700 hover:text-gray-500 ease-in-out duration-300 font-semibold uppercase cursor-pointer border-sky-700 border-b-4 '>Overview</h2>
                            <h2 className='text-lg lg:text-xl text-gray-700 hover:text-gray-500 ease-in-out duration-300 font-semibold uppercase cursor-pointer hover:border-sky-700 hover:border-b-4 '>Itinerary</h2>
                            <h2 className='text-lg lg:text-xl text-gray-700 hover:text-gray-500 ease-in-out duration-300 font-semibold uppercase cursor-pointer hover:border-sky-700 hover:border-b-4 '>Additional Info</h2>
                        </div>

                        <div className='mb-10'>
                            <img src={maldives} className="xl:w-11/12 2xl:w-5/6 object-cover" alt="" srcset="" />
                        </div>

                        <h2 className='text-2xl lg:text-3xl font-semibold mb-10'>Package Overview</h2>

                        <h2 className='text-lg text-gray-500 xl:w-11/12 2xl:w-5/6 text-justify mb-14'>Experience World-class Service at Kandima Maldives - Escape the ordinary Located on the largest island in Dhaalu Atoll, Kandima Maldives has the longest outdoor swimming pool in the Maldives, an abundance of water-sports, the largest beach club and tennis and basketball courts. It offers a marine biology centre, an art studio and cooking classes. Located at a 30-minute flight from Male’ and followed by a 20-minute boat ride to the island, the resort offers studios and villas with a private terrace and private pool. They offer endless tropical views. For fitness lovers, Kandima Maldives has a gym with personal trainers and provides classes like anti-gravity yoga, Zumba, aqua-bike classes and POUND® fitness lessons. Guests can hire bikes or electric scooters. Guests can choose among the 10 restaurants and bars the property offers. Sea Dragon serves authentic Chinese cuisine while Forbidden Bar plays live music in the night. Start the day at Aroma with fresh beverages and baked goods. <br /><br /> For total relaxation, choose from massages, facials and a range of Signature local treatments. The Kandima Kids Club is run by a multilingual team of certified child care-givers. We speak your language! Kandima Maldives - Escape the ordinary</h2>

                        <div className='border border-gray-400 xl:w-11/12 2xl:w-5/6 mb-14'></div>

                        <div>
                            <h2 className='text-2xl lg:text-3xl font-semibold mb-6'>Day Wise Itineary</h2>

                            <div className='flex gap-20 xl:w-11/12 2xl:w-5/6 mb-16'>
                                <button className='btn bg-sky-700 hover:bg-sky-600 border-none text-white text-lg font-semibold flex justify-center px-10 rounded-md'><h2>Day 1</h2></button>

                                <div className='pt-6'>
                                    <h2 className='text-xl font-semibold mb-4 uppercase'>Arrival At Maldives</h2>

                                    <div className='border border-gray-400 mb-4'></div>

                                    <h2 className='text-lg text-gray-500'>On arrival at the Maldives International airport you will be met by the resort's airport representative and will be transferred to Vivanta By Taj Coral Reef by a speedboat ( shared basis ) . Afternoon free for relaxation . Overnight stay at the resort .</h2>
                                </div>
                            </div>

                            <div className='flex gap-20 xl:w-11/12 2xl:w-5/6 mb-16'>
                                <button className='btn bg-sky-700 hover:bg-sky-600 border-none text-white text-lg font-semibold flex justify-center px-10 rounded-md'><h2>Day 2</h2></button>

                                <div className='pt-6'>
                                    <h2 className='text-xl font-semibold mb-4 uppercase'>Maldives</h2>

                                    <div className='border border-gray-400 mb-4'></div>

                                    <h2 className='text-lg text-gray-500'>On arrival at the Maldives International airport you will be met by the resort's airport representative and will be transferred to Vivanta By Taj Coral Reef by a speedboat ( shared basis ) . Afternoon free for relaxation . Overnight stay at the resort .</h2>
                                </div>
                            </div>

                            <div className='flex gap-20 xl:w-11/12 2xl:w-5/6 mb-16'>
                                <button className='btn bg-sky-700 hover:bg-sky-600 border-none text-white text-lg font-semibold flex justify-center px-10 rounded-md'><h2>Day 3</h2></button>

                                <div className='pt-6'>
                                    <h2 className='text-xl font-semibold mb-4 uppercase'>Departure from Maldives</h2>

                                    <div className='border border-gray-400 mb-4'></div>

                                    <h2 className='text-lg text-gray-500'>On arrival at the Maldives International airport you will be met by the resort's airport representative and will be transferred to Vivanta By Taj Coral Reef by a speedboat ( shared basis ) . Afternoon free for relaxation . Overnight stay at the resort .</h2>
                                </div>
                            </div>

                        </div>

                        <div className='border border-gray-400 xl:w-11/12 2xl:w-5/6 mb-14'></div>

                        <div>
                            <h2 className='text-2xl lg:text-3xl font-semibold mb-6'>Additional Information</h2>

                            <div className='text-lg text-gray-500 p-4'>
                                <h2 className='uppercase text-xl font-semibold text-black'>Inclusions</h2>

                                <ul className='p-4' style={{ listStyleType: "disc" }}>
                                    <li>4 Nights’ accommodation in selected room category</li>
                                    <li>Meal Plan: Full Board (Breakfast, Lunch & Dinner)</li>
                                    <li>Dolphin Watching Tour with Lunch, Water & Soft Drinks</li>
                                    <li>Snorkelling Gear & Photography</li>
                                    <li>In-Room 500ml Bottled Mineral Water Per Day</li>
                                </ul>
                            </div>

                            <div className='text-lg text-gray-500 p-4'>
                                <h2 className='uppercase text-xl font-semibold text-black'>EXclusions</h2>

                                <ul className='p-4' style={{ listStyleType: "disc" }}>
                                    <li>4 Nights’ accommodation in selected room category</li>
                                    <li>Meal Plan: Full Board (Breakfast, Lunch & Dinner)</li>
                                    <li>Dolphin Watching Tour with Lunch, Water & Soft Drinks</li>
                                    <li>Snorkelling Gear & Photography</li>
                                    <li>In-Room 500ml Bottled Mineral Water Per Day</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='px-20 md:px-44 lg:px-80 xl:px-0 py-2'>
                        <div className='mb-10'>
                            <h2 className='text-center text-xl font-semibold mb-10'>Starting From <span className='text-2xl font-bold text-sky-700'>$50,999</span></h2>

                            <h2 className='text-xl font-semibold text-center mb-2'>Want to Go For A Memorable Holiday?</h2>
                            <h2 className='text-sm text-gray-600 text-center'>Provide Your Details to Know Best Holiday Deals</h2>
                        </div>

                        <div className='mb-6'>
                            <div className='flex items-center gap-2 mb-2'>
                                <h2 className='text-lg'>Package Name</h2>
                                <FaUmbrellaBeach className='text-lg' />
                            </div>
                            <input type="text" placeholder="Type here" value="Explore Maldives" className="input input-bordered border border-gray-500 w-full" />
                        </div>

                        <div className='mb-6'>
                            <div className='flex items-center gap-2 mb-2'>
                                <h2 className='text-lg'>City of Departure</h2>
                                <BiBuildingHouse className='text-lg' />
                            </div>
                            <input type="text" placeholder="Type here" value="Bangalore" className="input input-bordered border border-gray-500 w-full" />
                        </div>

                        <div className='mb-6'>
                            <div className='flex items-center gap-2 mb-2'>
                                <h2 className='text-lg'>Date of Departure</h2>
                                <SlCalender className='text-lg' />
                            </div>
                            <input type="number" placeholder="Date of Departure" value="" className="input input-bordered border border-gray-500 w-full" />
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <div>
                                <h2 className='text-lg mb-2'>Adult</h2>
                                <div className='flex items-center'>
                                    <button onClick={decrementCounter1} className='btn bg-white hover:bg-gray-300 text-black text-lg font-bold rounded-l-lg rounded-r-none border border-gray-500'><FiMinus /></button>
                                    <h2 className='text-xl px-4 py-2 font-semibold'>{counter1}</h2>
                                    <button onClick={incrementCounter1} className='btn bg-white hover:bg-gray-300 text-black text-lg font-bold rounded-r-lg rounded-l-none border border-gray-500'><FiPlus /></button>
                                </div>
                            </div>

                            <div>
                                <h2 className='text-lg mb-2'>Child</h2>
                                <div className='flex items-center'>
                                    <button onClick={decrementCounter2} className='btn bg-white hover:bg-gray-300 text-black text-lg font-bold rounded-l-lg rounded-r-none border border-gray-500'><FiMinus /></button>
                                    <h2 className='text-xl px-4 py-2 font-semibold'>{counter2}</h2>
                                    <button onClick={incrementCounter2} className='btn bg-white hover:bg-gray-300 text-black text-lg font-bold rounded-r-lg rounded-l-none border border-gray-500'><FiPlus /></button>
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className='flex items-center gap-2 mb-2'>
                                <h2 className='text-lg'>Contact Details</h2>
                                <div className='border border-gray-500 w-1/2'></div>
                            </div>
                            <input type="text" placeholder="Your Name" value="" className="input input-bordered border border-gray-500 w-full mb-3" />
                            <input type="email" placeholder="Your Email Address" value="" className="input input-bordered border border-gray-500 w-full mb-3" />
                            <input type="number" placeholder="Your Mobile Number" value="" className="input input-bordered border border-gray-500 w-full" />
                        </div>

                        <button className='btn bg-white hover:bg-sky-700 text-sky-700 hover:text-white border border-sky-700 hover:border-none w-full text-lg mb-6'>Send Query</button>

                        <div className='flex items-center gap-4 mb-6'>
                            <div className='border border-gray-400 w-full'></div>
                            <h2 className='text-xl font-semibold'>OR</h2>
                            <div className='border border-gray-400 w-full'></div>
                        </div>

                        <button className='btn bg-sky-700 hover:bg-sky-600 text-white border-none w-full text-lg mb-6'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;