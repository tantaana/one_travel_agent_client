import React, { useEffect, useState } from 'react';
import { AiFillCompass } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import heroImg from '../../../Assets/people.png'
import heroCircle from '../../../Assets/hero-circle.png'
import banner1 from '../../../Assets/img1.png'
import banner2 from '../../../Assets/img2.png'
import { Link } from 'react-router-dom';


const HomeHero = () => {
    const [banner, setBanner] = useState([]);
    const [loader, setLoader] = useState(false);
    console.log(banner)

    useEffect(() => {
        setLoader(true);
        fetch('https://one-travel-agent-server.vercel.app/bannerData')
            .then(res => res.json())
            .then(data => {
                setBanner(data);
                setLoader(false);
            })
    }, [])


    return (
        <div>
            {
                loader ?
                    <div className='flex justify-center my-16'>
                        {
                            loader ?
                                <div class="flex flex-col">
                                    <div class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"></div>


                                </div>
                                : ''
                        }
                    </div>

                    :

                    <div className='py-4 my-20 mx-4 xl:mx-10 bg-gradient-to-r from-sky-100 to-sky-50 rounded-xl'>
                        <div className='flex flex-col lg:flex-row items-center lg:justify-between xl:justify-around gap-10'>
                            <div className='lg:w-[500px]'>
                                <div className='flex justify-center lg:block'>
                                    <div className='bg-sky-200 hover:bg-sky-300 p-2 rounded-full w-[180px] flex justify-center mb-10'>
                                        <h2 className='flex items-center gap-10 text-3xl lg:text-4xl'>Visit <AiFillCompass className='text-sky-600' /></h2>
                                    </div>
                                </div>

                                <div className='mb-10'>
                                    {banner?.map(banner =>
                                        <div className='flex flex-wrap justify-center gap-3 lg:block'>
                                            <h2 className='text-5xl lg:text-6xl font-bold leading-snug text-center lg:text-left lg:mb-4'>{banner?.text1}</h2>
                                            <h2 className='text-5xl lg:text-6xl font-bold leading-snug text-center lg:text-left lg:mb-4 text-sky-700'>{banner?.text2}</h2>
                                            <h2 className='text-5xl lg:text-6xl font-bold leading-snug text-center lg:text-left lg:mb-4'>{banner?.text3}</h2>
                                        </div>
                                    )}
                                </div>


                                <div className='flex justify-center lg:justify-start '>
                                    <Link to='#'><h2 className='text-sky-700 border border-sky-700 p-4 rounded-lg font-semibold hover:bg-sky-600 hover:text-white'>Discover Now</h2></Link>
                                </div>
                            </div>

                            <div>
                                {
                                    banner?.map(banner =>
                                        <>
                                            <div className='relative'>
                                                <Link to="#"><div className='absolute bottom-[0px] left-[0px] md:left-[-40px] bg-sky-50 hover:bg-sky-100 rounded-xl py-0.5 cursor-pointer hover:scale-105 duration-300 ease-in-out'>
                                                    <img src={banner?.img1} className="w-[200px] h-[120px] object-cover" alt="" srcset="" />
                                                    <h2 className='text-center font-bold mb-2'>{banner?.img1_head}</h2>
                                                    <div className='flex justify-center items-center gap-2'>
                                                        <ImLocation2 className='text-sky-400' />
                                                        <h2 className='text-center text-gray-500 flex items-center gap-2'>{banner?.img1_location}</h2>
                                                    </div>
                                                </div></Link>

                                                <img src={banner?.mainImg} className="w-[450px] h-[450px] object-cover" alt="" srcset="" />

                                                <Link to='#'><div className='absolute top-[250px] left-[320px] bg-sky-50 hover:bg-sky-100 cursor-pointer rounded-xl p-1 hover:scale-110 duration-300 ease-in-out'>
                                                    <div className='flex justify-center'>
                                                        <img src={banner?.img2} className="w-[100px] h-[60px] object-cover" alt="" srcset="" />
                                                    </div>
                                                    <h2 className='text-[11px] text-center font-bold mb-1'>{banner?.img2_head}</h2>
                                                    <div className='flex justify-center items-center gap-1'>
                                                        <ImLocation2 className='text-[10px] text-sky-400' />
                                                        <h2 className='text-[10px] text-center text-gray-500 flex items-center gap-2'>{banner?.img2_location}</h2>
                                                    </div>
                                                </div> </Link>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default HomeHero;