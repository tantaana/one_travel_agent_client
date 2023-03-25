import React, { useEffect, useState } from 'react';

const OurTeam = () => {
    const [teamData, setTeamData] = useState([]);

    const [currentTab, setCurrentTab] = useState();

    useEffect(() => {
        // setLoader(true);
        fetch('http://localhost:5000/teamData')
            .then(res => res.json())
            .then(data => {
                setTeamData(data);
                // setLoader(false);
            })
    }, [])

    const handleTabClick = (event) => {
        setCurrentTab(event.target.id)
    }
    return (
        <div className='flex justify-center my-20'>
            <div className='container flex flex-col lg:flex-row justify-center gap-2'>
                <div className='tabs lg:w-[150px] flex flex-row lg:flex-col items-center justify-center gap-4'>
                    {teamData.map((team, i) =>
                        <img
                            src={team.img}
                            key={i}
                            id={team.team_id}
                            disabled={currentTab === `${team.team_id}`}
                            onClick={handleTabClick}
                            className="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] object-cover rounded-full border-4 border-sky-700 hover:brightness-90 cursor-pointer"
                            alt=""
                        />
                    )}

                </div>

                <div className='content p-6 w-full lg:w-[800px]'>
                    {teamData.map((team, i) =>
                        <div key={i}>
                            {currentTab === `${team.team_id}` &&
                                <div className='flex items-center justify-between gap-6'>
                                    <img src={team.img} className="w-[200px] lg:w-[300px] h-[300px] lg:h-[400px] object-cover rounded-xl" alt="" />
                                    <div>
                                        <h2 className='text-4xl font-semibold mb-2'>{team.name}</h2>
                                        <h2 className='text-xl font-semibold text-gray-600 mb-10'>{team.position}</h2>
                                        <h2 className='text-base font-semibold'>{team.details}</h2>
                                    </div>
                                </div>

                            }
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default OurTeam;