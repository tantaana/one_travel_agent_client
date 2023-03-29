import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import cer1 from '../../../Assets/certificates/cer1.webp'
import cer2 from '../../../Assets/certificates/cer2.jpg'
import cer3 from '../../../Assets/certificates/cer3.jpg'
import cer4 from '../../../Assets/certificates/cer4.jpg'

const Certificate = () => {
    return (
        <PhotoProvider>
            <div className='my-28'>
                <h2 className='text-4xl font-semibold text-center mb-2'>Certificate</h2>
                <h2 className='text-lg md:text-xl text-center mx-2 mb-20'>Those are the certificates that our team members have gained recently.</h2>

                <div className='flex justify-center mx-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 lg:gap-x-20'>
                        <PhotoView src={cer1}>
                            <img src={cer1} className="w-[350px] lg:w-[400px] 2xl:w-[600px] h-[250px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-xl hover:brightness-75 cursor-zoom-in" alt="" srcset="" />
                        </PhotoView>
                        <PhotoView src={cer2}>
                            <img src={cer2} className="w-[350px] lg:w-[400px] 2xl:w-[600px] h-[250px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-xl hover:brightness-75 cursor-zoom-in" alt="" srcset="" />
                        </PhotoView>
                        <PhotoView src={cer3}>
                            <img src={cer3} className="w-[350px] lg:w-[400px] 2xl:w-[600px] h-[250px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-xl hover:brightness-75 cursor-zoom-in" alt="" srcset="" />
                        </PhotoView>
                        <PhotoView src={cer4}>
                            <img src={cer4} className="w-[350px] lg:w-[400px] 2xl:w-[600px] h-[250px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-xl hover:brightness-75 cursor-zoom-in" alt="" srcset="" />
                        </PhotoView>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default Certificate;