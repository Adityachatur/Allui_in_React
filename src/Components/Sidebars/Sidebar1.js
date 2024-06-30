import { faBars, faBriefcase, faCircleInfo, faHouse, faPhone, faTimes, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar1 = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const handleLinkClick = () => {
        setShowSidebar(false);
    };


    return (
        <div className='w-full h-[100vh] bg-gray-300'>
            <div className='w-full text-right p-5'>
                <button onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} className='text-3xl text-black' />
                </button>
            </div>

            < div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-500 ease-in-out transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='fixed inset-y-0 right-0 w-52  bg-black text-white z-50'>
                    <div className='flex justify-between p-5'>
                        {/* Close Icon */}
                        <button onClick={toggleSidebar} className='flex w-full text-2xl justify-end'>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <ul className='flex flex-col w-full space-y-8 p-5 text-2xl font-Anek Devanagari'>
                        <li>
                            <Link to={'/'} onClick={handleLinkClick} className={` animated-text hover:text-yellow-300`}> <FontAwesomeIcon icon={faHouse} className='mr-4 items-center' />Home</Link>
                        </li>

                        <li>
                            <Link to={'/about'} onClick={handleLinkClick} className={` animated-text hover:text-yellow-300`}><FontAwesomeIcon icon={faCircleInfo} className='mr-4 items-center' />About</Link>
                        </li>

                        <li>
                            <Link to={'/service'} onClick={handleLinkClick} className={`animated-text hover:text-yellow-300`}> <FontAwesomeIcon icon={faWrench} className='mr-4 items-center' />Service</Link>
                        </li>

                        <li>
                            <Link to={'/projects'} onClick={handleLinkClick} className={`animated-text hover:text-yellow-300`}><FontAwesomeIcon icon={faBriefcase} className='mr-4 items-center' />Projects</Link>
                        </li>

                        <li>
                            <Link to={'/contact'} onClick={handleLinkClick} className={`animated-text hover:text-yellow-300`}> <FontAwesomeIcon icon={faPhone} className='mr-4 items-center' />Contact</Link>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Sidebar1;
