import React, { useEffect, useState } from 'react';
import { BsStarFill } from 'react-icons/bs'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useQuery } from '@tanstack/react-query';

const IslandStays = () => {
    const [islands, setIslands] = useState([]);
    const [loader, setLoader] = useState(false);

    // const { data: island = [] } = useQuery({
    //     queryKey: ['island'],
    //     queryFn: async () => {
    //         const res = await fetch('https://one-travel-agent-server.vercel.app/islandData');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    useEffect(() => {
        setLoader(true);
        fetch('https://one-travel-agent-server.vercel.app/islandData')
            .then(res => res.json())
            .then(data => {
                setIslands(data);
                setLoader(false);
            })
    }, [])

    return (
        <PhotoProvider>
            <div className='mt-20'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Island Stays</h2>
                <h2 className='text-center mx-16 lg:mx-28 xl:mx-48 2xl:mx-60 text-gray-600'>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
                    modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.
                </h2>

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

                <div className='flex justify-center mt-10 mx-20 sm:mx-28 md:mx-10 lg:mx-16 xl:mx-48 2xl:mx-60'>
                    <div className='grid md:grid-cols-2 2xl:grid-cols-3 gap-6'>
                        {
                            islands?.map(island =>
                                <div>
                                    <PhotoView src={island?.img}>
                                        <img src={island?.img} className="w-full h-[400px] mb-4 object-cover cursor-zoom-in hover:brightness-75 rounded-xl" alt="" srcset="" />
                                    </PhotoView>
                                    <h2 className='text-xl font-bold mb-2 mx-4'>{island?.name}</h2>
                                    <h2 className='mb-2 mx-4 text-gray-600'>{island?.details.slice(0, 180)}...</h2>
                                    <div className='flex justify-between items-center mx-4'>
                                        <div className='flex items-center gap-2'>
                                            <BsStarFill className='text-sky-700' />
                                            <h2 className='font-bold'>{island?.rating} <span className='font-normal'>({island?.review} Review)</span></h2>
                                        </div>
                                        <button className='btn btn-md bg-sky-700 hover:bg-sky-600 rounded-md border-none'>Explore More</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default IslandStays;