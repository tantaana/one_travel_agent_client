import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center my-16'>

            <div class="flex flex-col">
                <div class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-sky-700 border-t-transparent shadow-md"></div>


            </div>

        </div>
    );
};

export default Loader;