import React from 'react';
import img1 from '../../../Assets/island/1.png'
import img2 from '../../../Assets/island/2.png'
import img3 from '../../../Assets/island/3.png'
import img4 from '../../../Assets/island/4.png'
import img5 from '../../../Assets/island/5.png'
import img6 from '../../../Assets/island/6.png'
import { BsStarFill } from 'react-icons/bs'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const IslandStays = () => {
    return (
        <PhotoProvider>
            <div>
                <h2 className='text-3xl font-semibold text-center mb-4'>Island Stays</h2>
                <h2 className='text-center'>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
                    modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</h2>

                <div className='flex justify-center mt-10 mx-20 sm:mx-28 md:mx-10 lg:mx-16 xl:mx-48 2xl:mx-60'>
                    <div className='grid md:grid-cols-2 2xl:grid-cols-3 gap-6'>
                        <div className='border border-black'>
                            <PhotoView src={img1}>
                                <img src={img1} className="w-full h-[400px] mb-4 object-cover cursor-zoom-in hover:brightness-75 rounded-xl" alt="" srcset="" />
                            </PhotoView>
                            <h2 className='text-xl font-bold mb-2 mx-4'>Kavaratti</h2>
                            <h2 className='border border-black mb-2 mx-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium culpa ullam aspernatur dolorem veritatis, earum assumenda iure in deleniti commodi eveniet neque aperiam necessitatibus fugiat impedit consectetur doloribus incidunt iste qui ut quibusdam! Id saepe ratione, consequuntur modi itaque necessitatibus nesciunt sint pariatur! Aliquam sint velit adipisci magni facere!</h2>
                            <div className='flex justify-between items-center mx-4'>
                                <div className='flex items-center gap-2'>
                                    <BsStarFill className='text-sky-700' />
                                    <h2 className='font-bold'>4.5 <span className='font-normal'>(1.5k Review)</span></h2>
                                </div>
                                <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Explore More</button>
                            </div>
                        </div>
                        <div className='border border-black'>
                            <PhotoView src={img1}>
                                <img src={img1} className="w-full h-[400px] mb-4 object-cover cursor-zoom-in hover:brightness-75 rounded-xl" alt="" srcset="" />
                            </PhotoView>
                            <h2 className='text-xl font-bold mb-2 mx-4'>Kavaratti</h2>
                            <h2 className='border border-black mb-2 mx-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium culpa ullam aspernatur dolorem veritatis, earum assumenda iure in deleniti commodi eveniet neque aperiam necessitatibus fugiat impedit consectetur doloribus incidunt iste qui ut quibusdam! Id saepe ratione, consequuntur modi itaque necessitatibus nesciunt sint pariatur! Aliquam sint velit adipisci magni facere!</h2>
                            <div className='flex justify-between items-center mx-4'>
                                <div className='flex items-center gap-2'>
                                    <BsStarFill className='text-sky-700' />
                                    <h2 className='font-bold'>4.5 <span className='font-normal'>(1.5k Review)</span></h2>
                                </div>
                                <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Explore More</button>
                            </div>
                        </div>
                        <div className='border border-black'>
                            <PhotoView src={img1}>
                                <img src={img1} className="w-full h-[400px] mb-4 object-cover cursor-zoom-in hover:brightness-75 rounded-xl" alt="" srcset="" />
                            </PhotoView>
                            <h2 className='text-xl font-bold mb-2 mx-4'>Kavaratti</h2>
                            <h2 className='border border-black mb-2 mx-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium culpa ullam aspernatur dolorem veritatis, earum assumenda iure in deleniti commodi eveniet neque aperiam necessitatibus fugiat impedit consectetur doloribus incidunt iste qui ut quibusdam! Id saepe ratione, consequuntur modi itaque necessitatibus nesciunt sint pariatur! Aliquam sint velit adipisci magni facere!</h2>
                            <div className='flex justify-between items-center mx-4'>
                                <div className='flex items-center gap-2'>
                                    <BsStarFill className='text-sky-700' />
                                    <h2 className='font-bold'>4.5 <span className='font-normal'>(1.5k Review)</span></h2>
                                </div>
                                <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Explore More</button>
                            </div>
                        </div>
                        <div className='border border-black'>
                            <PhotoView src={img1}>
                                <img src={img1} className="w-full h-[400px] mb-4 object-cover cursor-zoom-in hover:brightness-75 rounded-xl" alt="" srcset="" />
                            </PhotoView>
                            <h2 className='text-xl font-bold mb-2 mx-4'>Kavaratti</h2>
                            <h2 className='border border-black mb-2 mx-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium culpa ullam aspernatur dolorem veritatis, earum assumenda iure in deleniti commodi eveniet neque aperiam necessitatibus fugiat impedit consectetur doloribus incidunt iste qui ut quibusdam! Id saepe ratione, consequuntur modi itaque necessitatibus nesciunt sint pariatur! Aliquam sint velit adipisci magni facere!</h2>
                            <div className='flex justify-between items-center mx-4'>
                                <div className='flex items-center gap-2'>
                                    <BsStarFill className='text-sky-700' />
                                    <h2 className='font-bold'>4.5 <span className='font-normal'>(1.5k Review)</span></h2>
                                </div>
                                <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Explore More</button>
                            </div>
                        </div>
                        <div className='border border-black'>
                            <PhotoView src={img1}>
                                <img src={img1} className="w-full h-[400px] mb-4 object-cover cursor-zoom-in hover:brightness-75 rounded-xl" alt="" srcset="" />
                            </PhotoView>
                            <h2 className='text-xl font-bold mb-2 mx-4'>Kavaratti</h2>
                            <h2 className='border border-black mb-2 mx-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium culpa ullam aspernatur dolorem veritatis, earum assumenda iure in deleniti commodi eveniet neque aperiam necessitatibus fugiat impedit consectetur doloribus incidunt iste qui ut quibusdam! Id saepe ratione, consequuntur modi itaque necessitatibus nesciunt sint pariatur! Aliquam sint velit adipisci magni facere!</h2>
                            <div className='flex justify-between items-center mx-4'>
                                <div className='flex items-center gap-2'>
                                    <BsStarFill className='text-sky-700' />
                                    <h2 className='font-bold'>4.5 <span className='font-normal'>(1.5k Review)</span></h2>
                                </div>
                                <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Explore More</button>
                            </div>
                        </div>
                        <div className='border border-black'>
                            <PhotoView src={img1}>
                                <img src={img1} className="w-full h-[400px] mb-4 object-cover cursor-zoom-in hover:brightness-75 rounded-xl" alt="" srcset="" />
                            </PhotoView>
                            <h2 className='text-xl font-bold mb-2 mx-4'>Kavaratti</h2>
                            <h2 className='border border-black mb-2 mx-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium culpa ullam aspernatur dolorem veritatis, earum assumenda iure in deleniti commodi eveniet neque aperiam necessitatibus fugiat impedit consectetur doloribus incidunt iste qui ut quibusdam! Id saepe ratione, consequuntur modi itaque necessitatibus nesciunt sint pariatur! Aliquam sint velit adipisci magni facere!</h2>
                            <div className='flex justify-between items-center mx-4'>
                                <div className='flex items-center gap-2'>
                                    <BsStarFill className='text-sky-700' />
                                    <h2 className='font-bold'>4.5 <span className='font-normal'>(1.5k Review)</span></h2>
                                </div>
                                <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default IslandStays;