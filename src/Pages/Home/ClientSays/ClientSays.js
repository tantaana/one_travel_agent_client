import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneStar } from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ClientSays.css";


// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";



const ClientSays = () => {
    const [userReviews, setUserReviews] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch('https://one-travel-agent-server.vercel.app/userReview')
            .then(res => res.json())
            .then(data => {
                setUserReviews(data);
                setLoader(false);
            })
    }, [])


    return (
        <div className="mx-10 xl:mx-24 2xl:mx-60 my-20 p-4 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center">What Our Clients Say<br />About Us</h2>

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
                {userReviews?.map((userReview, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className="py-20 w-full">
                                <div className="avatar mb-6">
                                    <div className="w-[200px] rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                                        <img src={userReview?.img} alt="" />
                                    </div>
                                </div>
                                <h2 className="text-2xl text-center font-semibold mb-2">{userReview?.name}</h2>
                                <h2 className="text-lg text-center text-gray-600 font-semibold mb-10">{userReview?.location}</h2>
                                <h2 className="text-gray-600 mx-6 h-[120px] text-center">{userReview?.details}</h2>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="flex items-center justify-center text-sky-700 text-3xl">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
                                    <h2 className="text-3xl text-gray-500 font-bold">{userReview?.rating}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ClientSays;