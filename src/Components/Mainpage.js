import React from 'react';
import { Link } from 'react-router-dom';

const Mainpage = () => {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-center text-3xl font-bold mb-8">
                ALL UI COMPONENTS
            </h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-full lg:w-9/12 mx-auto">
                {[
                    { path: '/AllNavbars', label: 'All Navbars' },
                    { path: '/AllSidebars', label: 'All Sidebars' },
                    { path: '/AllCards', label: 'All Cards' },
                    { path: '/AllParallaxpage', label: 'All Parallax page' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-red-300 text-2xl font-bold text-center p-4 hover:bg-red-400 transition duration-200"
                    >
                        <Link to={item.path} aria-label={item.label}>
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mainpage;
