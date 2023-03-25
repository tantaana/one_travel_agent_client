import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const AddBanner = () => {
    const [loader, setLoader] = useState(false);

    const { user } = useContext(AuthContext);

    const imageHostKey = `061c1a4fa0eb8d13f19fae8396ba7694`;
    console.log(imageHostKey)

    const navigate = useNavigate();


    const addBanner = event => {
        event.preventDefault();
        setLoader(true);
        const bannerData = event.target;
        const text1 = bannerData.text1.value;
        const text2 = bannerData.text2.value;
        const text3 = bannerData.text3.value;
        const mainImg = bannerData.mainImg.files[0];
        const img1_head = bannerData.img1_head.value;
        const img1_location = bannerData.img1_location.value;
        const img2_head = bannerData.img2_head.value;
        const img2_location = bannerData.img2_location.value;

        // console.log(text1,
        //     text2,
        //     text3,
        //     mainImg,
        //     img1,
        //     img1_head,
        //     img1_location,
        //     img2,
        //     img2_head,
        //     img2_location)

        let formData = new FormData();
        formData.append('image', mainImg);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData)
                    const addBanner = {
                        text1: text1,
                        text2: text2,
                        text3: text3,
                        mainImg: imgData.data.url,
                        img1_head: img1_head,
                        img1_location: img1_location,
                        img2_head: img2_head,
                        img2_location: img2_location,
                    }




                    //save banner's information to the database
                    fetch(`https://one-travel-agent-server.vercel.app/bannerData/641e9414ee0fb07cbda321e2`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(addBanner)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.acknowledged) {
                                setLoader(false);
                                toast.success('Banner has been changed successfully')
                                setTimeout(() => {
                                    navigate('/');
                                }, 1500);
                            }
                        })

                }
            })
    }

    return (
        <div className='my-10 dashboardBg'>
            <h2 className='text-3xl font-bold text-center mb-20 text-sky-800'>Add a Banner</h2>
            <div className='flex flex-col xl:flex-col 2xl:flex-row items-center gap-4 mb-10 mx-4 bg-gray-300 p-2'>
                <h2 className='text-2xl font-semibold text-blue-900'>Logged In User: <span className='text-black font-normal'>{user?.displayName}</span></h2>
                <h2 className='text-2xl font-semibold text-teal-600'>User Email: <span className='text-black font-normal'>{user?.email}</span></h2>
            </div>
            <form onSubmit={addBanner} className='flex justify-center border-2 border-sky-600 mx-4 py-10 rounded-xl' action="">
                <div className='my-4 w-full mx-6'>

                    <div className='flex justify-center mb-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 xl:w-11/12 2xl:w-5/6'>
                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>1st Heading</h2>
                                <textarea name="text1" placeholder="Type banner 1st heading" className="textarea textarea-primary border-sky-600 w-full max-w-xs h-[30px]" required></textarea>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>2nd Heading</h2>
                                <textarea name="text2" placeholder="Type banner 2nd heading" className="textarea textarea-primary border-sky-600 w-full max-w-xs h-[30px]" required></textarea>

                            </div>
                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>3rd Heading</h2>
                                <textarea name="text3" placeholder="Type banner 3rd heading" className="textarea textarea-primary border-sky-600 w-full max-w-xs h-[30px]" required></textarea>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Image</h2>
                                <input type="file" name="mainImg" className="block w-full text-lg text-black border border-sky-600 rounded-lg
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-md file:font-semibold file-input-md
      file:bg-gradient-to-r file:from-sky-500 file:to-sky-300 hover:file:bg-gradient-to-r hover:file:from-sky-600 hover:file:to-sky-600 file:text-white max-w-xs" required />

                            </div>

                        </div>
                    </div>

                    <div className='flex justify-center mb-10 border border-sky-600 py-4 px-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 xl:w-11/12 2xl:w-5/6'>
                            {/* <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Side Image 1</h2>
                                <input type="file" name="img1" className="block w-full text-lg text-black border border-sky-600 rounded-lg
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-md file:font-semibold file-input-md
      file:bg-gradient-to-r file:from-sky-500 file:to-sky-300 hover:file:bg-gradient-to-r hover:file:from-sky-600 hover:file:to-sky-600 file:text-white max-w-xs" />

                            </div> */}

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Side Image 1 Title</h2>
                                <textarea name="img1_head" placeholder="Type 1st side image title" className="textarea textarea-primary border-sky-600 w-full max-w-xs h-[30px]" required></textarea>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Side Image 1 Location</h2>
                                <textarea name="img1_location" placeholder="Type 1st side image location" className="textarea textarea-primary border-sky-600 w-full max-w-xs h-[30px]" required></textarea>

                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center mb-10 border border-sky-600 py-4 px-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 xl:w-11/12 2xl:w-5/6'>
                            {/* <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Side Image 2</h2>
                                <input type="file" name="img2" className="block w-full text-lg text-black border border-sky-600 rounded-lg
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-md file:font-semibold file-input-md
      file:bg-gradient-to-r file:from-sky-500 file:to-sky-300 hover:file:bg-gradient-to-r hover:file:from-sky-600 hover:file:to-sky-600 file:text-white max-w-xs" />

                            </div> */}

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Side Image 2 Title</h2>
                                <textarea name="img2_head" placeholder="Type 2nd side image title" className="textarea textarea-primary border-sky-600 w-full max-w-xs h-[30px]" required></textarea>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Side Image 2 Location</h2>
                                <textarea name="img2_location" placeholder="Type 2nd side image location" className="textarea textarea-primary border-sky-600 w-full max-w-xs h-[30px]" required></textarea>

                            </div>
                        </div>
                    </div>


                    <div className='flex  flex-col justify-center items-center gap-6'>
                        <h2 className='mt-6'>
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
                        </h2>
                        <input className='btn glass btn-primary btn-lg bg-gradient-to-r from-sky-500 to-sky-300 hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-600 text-white font-semibold w-[200px] lg:w-[300px]' type="submit" value="Add Banner" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBanner;