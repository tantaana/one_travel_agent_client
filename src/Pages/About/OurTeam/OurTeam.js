import React, { useEffect, useState } from 'react';
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'

const OurTeam = () => {
    const [teamData, setTeamData] = useState([]);
    const [loader, setLoader] = useState(false);

    const [currentTab, setCurrentTab] = useState();

    useEffect(() => {
        setLoader(true);
        fetch('https://one-travel-agent-server.vercel.app/teamData')
            .then(res => res.json())
            .then(data => {
                setTeamData(data);
                setLoader(false);
            })
    }, [])

    console.log(currentTab)

    const handleTabClick = (event) => {
        setCurrentTab(event.target.id)
    }
    return (
        <div className='my-20'>
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

            <div className='flex justify-center'>
                <div className='flex flex-col lg:flex-row justify-center gap-2'>
                    <div className='lg:w-[150px] flex flex-row lg:flex-col items-center justify-center gap-4'>
                        {teamData?.map((team, i) =>
                            <img
                                src={team?.img}
                                key={i}
                                id={team?.team_id}
                                disabled={currentTab === `${team?.team_id}`}
                                onClick={handleTabClick}
                                className="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] object-cover rounded-full border-4 border-sky-700 hover:brightness-90 cursor-pointer"
                                alt=""
                            />
                        )}

                    </div>


                    <div className='p-6 w-full lg:w-[800px]'>
                        {currentTab === undefined ?
                            <div className='flex items-center justify-between gap-6'>

                                {teamData[0]?.img && <img src={teamData[0]?.img} className="w-[200px] lg:w-[300px] h-[300px] lg:h-[400px] object-cover rounded-xl" alt="" />}

                                <div>
                                    <h2 className='text-4xl font-semibold mb-2'>{teamData[0]?.name}</h2>
                                    <h2 className='text-xl font-semibold text-gray-600 mb-10'>{teamData[0]?.position}</h2>
                                    <h2 className='text-base font-semibold mb-10'>{teamData[0]?.details}</h2>

                                    <div className='flex items-center gap-2'>
                                        {teamData[0]?.details &&
                                            <>
                                                <BsFacebook className='text-xl font-semibold text-gray-500' />
                                                <AiFillTwitterCircle className='text-2xl font-semibold text-gray-500' />
                                                <AiFillInstagram className='text-2xl font-semibold text-gray-500' />
                                            </>
                                        }
                                    </div>
                                </div>

                            </div>
                            :
                            <>{teamData?.map((team, i) =>
                                <div key={i}>
                                    {currentTab === `${team?.team_id}` &&
                                        <div className='flex items-center justify-between gap-6'>
                                            {team?.img && <img src={team?.img} className="w-[200px] lg:w-[300px] h-[300px] lg:h-[400px] object-cover rounded-xl" alt="" />}
                                            <div>
                                                <h2 className='text-4xl font-semibold mb-2'>{team?.name}</h2>
                                                <h2 className='text-xl font-semibold text-gray-600 mb-10'>{team?.position}</h2>
                                                <h2 className='text-base font-semibold mb-10'>{team?.details}</h2>

                                                {team?.details &&
                                                    <>
                                                        <div className='flex items-center gap-2'>
                                                            <BsFacebook className='text-xl font-semibold text-gray-500' />
                                                            <AiFillTwitterCircle className='text-2xl font-semibold text-gray-500' />
                                                            <AiFillInstagram className='text-2xl font-semibold text-gray-500' />
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        </div>

                                    }
                                </div>
                            )} </>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurTeam;