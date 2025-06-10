import React from 'react';

const Front = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Background Image */}
            <img
                src="/src/Components/Assets/img/test-front.png"
                alt="forscom-logo"
                className="absolute inset-0 w-full h-full object-cover  pointer-events-none select-none"
                style={{zIndex: 0}}
            />
            {/* Main Text */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
                <h1 className="text-blue-700 text-6xl md:text-7xl font-bold text-center font-orbitron">FORCES COMMAND</h1>
                <p className="text-white text-xl font-bold md:text-2xl italic mt-2 text-center">"Freedom's Guardian"</p>
            </div>
        </div>
    );
};

export default Front;