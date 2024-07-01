import React from 'react';
import { Link } from 'react-router-dom';

const Mainpage = () => {
    return (
        <>
            <h4 className="text-center text-3xl font-bold text-red-400 my-8">
                ALL UI COMPONENTS
            </h4>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {[
                        { path: '/AllNavbars', label: 'All Navbars' },
                        { path: '/AllSidebars', label: 'All Sidebars' },
                        { path: '/AllCards', label: 'All Cards' },
                        { path: '/AllParallaxpage', label: 'All Parallax page' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-red-300 text-2xl font-bold text-center p-4 hover:bg-red-400 transition duration-200 rounded-lg"
                        >
                            <Link to={item.path} aria-label={item.label} className="block">
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Mainpage;
