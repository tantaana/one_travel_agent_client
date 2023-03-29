import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./BestPackages.css";


// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";



const BestPackages = () => {
    const [packageData, setPackageData] = useState([]);

    const [currentTab, setCurrentTab] = useState();

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch('https://one-travel-agent-server.vercel.app/bestPackages')
            .then(res => res.json())
            .then(data => {
                setPackageData(data);
                setLoader(false);
            })
    }, [])


    const handleTabClick = (event) => {
        setCurrentTab(event.target.id)
    }




    return (
        <div className="mx-10 xl:mx-24 2xl:mx-60 my-20 p-4 rounded-xl">
            <h2 className="text-4xl font-bold text-center mb-4">Best Packages For You</h2>
            <h2 className="text-center mx-16 lg:mx-28 xl:mx-48 2xl:mx-60 text-gray-600">This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</h2>

            <div className='flex justify-center my-8'>
                {
                    loader ?
                        <div class="flex flex-col">
                            <div class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"></div>


                        </div>
                        : ''
                }
            </div>

            <div className='flex items-center justify-center'>
                {packageData.map((packData, i) =>
                    <h2
                        key={i}
                        id={packData.package_id}
                        disabled={currentTab === `${packData.package_id}`}
                        onClick={handleTabClick}
                        className='border border-gray-400 hover:border-black flex justify-center text-lg md:text-xl text-sky-700 hover:bg-sky-700 hover:text-white ease-in-out duration-200 font-bold py-4 px-8 lg:px-16 xl:px-24 2xl:px-28'
                    >{packData.place}
                    </h2>

                )}

            </div>

            <div>
                {currentTab === undefined ?

                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        navigation={true}

                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}

                        modules={[Autoplay, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {packageData[0]?.info?.map((packData1, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="py-32 w-full">


                                        <div className="mb-6">
                                            <div className="w-full h-[400px] object-cover">
                                                <img src={packData1?.img} className="rounded-t-xl" alt="" />
                                            </div>
                                        </div>


                                        <div className="px-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <SlLocationPin />
                                                    <h2 className="text-2xl text-center font-semibold">{packData1?.package}</h2>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <AiFillStar className="text-sky-700 text-xl" />
                                                    <h2 className="font-bold text-xl">{packData1?.rating}</h2>
                                                </div>
                                            </div>

                                            <h2 className="text-left text-gray-600 text-base">{packData1?.details.slice(0, 120)}...</h2>

                                            <div className="flex justify-center mt-8">
                                                <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    :

                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        navigation={true}

                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}

                        modules={[Autoplay, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {packageData.map((packDatas, i) =>
                            <div key={i}>
                                {currentTab === `${packDatas.package_id}` &&
                                    <div className='flex items-center justify-between gap-6'>
                                        {
                                            packDatas.info.map((packData2, i) => {
                                                return (
                                                    <SwiperSlide key={i}>
                                                        <div className="py-32 w-full">


                                                            <div className="mb-6">
                                                                <div className="w-full h-[400px] object-cover">

                                                                    <img src={packData2?.img} className="rounded-t-xl" alt="" />

                                                                </div>
                                                            </div>


                                                            <div className="px-6">
                                                                <div className="flex items-center justify-between mb-4">
                                                                    <div className="flex items-center gap-2">
                                                                        <SlLocationPin />
                                                                        <h2 className="text-2xl text-center font-semibold">{packData2?.package}</h2>
                                                                    </div>

                                                                    <div className="flex items-center gap-2">
                                                                        <AiFillStar className="text-sky-700 text-xl" />
                                                                        <h2 className="font-bold text-xl">{packData2?.rating}</h2>
                                                                    </div>
                                                                </div>

                                                                <h2 className="text-left text-gray-600 text-base">{packData2?.details.slice(0, 120)}...</h2>

                                                                <div className="flex justify-center mt-8">
                                                                    <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Book Now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            }
                                            )
                                        }
                                    </div>

                                }
                            </div>
                        )}
                    </Swiper>


                }
            </div>

            <div className="flex justify-center mt-10">
                <button className='btn btn-md bg-white hover:bg-sky-700 rounded-md border border-sky-700 text-sky-700 hover:text-white hover:border-sky-700 font-bold'>Discover More</button>
            </div>
        </div>
    );
};

export default BestPackages;