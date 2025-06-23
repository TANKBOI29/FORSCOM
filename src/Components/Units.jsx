import React from 'react';
import { FaGlobe, FaClock, FaShieldAlt, FaDiscord } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';
import '/src/index.css'

function Units() {

    const unitsData = [
        {
            name: "1st Infantry Division",
            shortName: "1ID",
            logo: "https://i.postimg.cc/9Qv5kkRx/Distinctive-unit-insignia-of-the-75th-Ranger-Regiment-svg-removebg-preview.png", // Placeholder, replace with actual path
            description: "The 1st Infantry Division is a battle-hardened unit known for discipline, tradition, and excellence in ground operations. They lead from the front with a focus on teamwork, realism, and operational effectiveness.",
            links: [
                { type: "Roblox Group", url: "https://www.roblox.com/groups/2750883/75th-Ranger-Regiment#!/about", icon: <SiRoblox /> },
                { type: "Discord", url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/240px-Discord_logo.svg.png", icon: <FaDiscord /> },
            ],
            badges: [
                { name: "Global Deployment", icon: <FaGlobe /> },
                { name: "Rapid Response", icon: <FaClock /> },
                { name: "Elite Unit", icon: <FaShieldAlt /> },
            ],
            battalions: [
                {
                    name: "Vanguard Brigade",
                    description: "The elite battalion within 75th, focused on wargames and scrim/raids. They are the first to engage with enemies, deploying the best personnel 75th can offer. The battalion is organized into two specialized companies."
                },
                {
                    name: "Demon Brigade",
                    description: "The scrim/game component of 1st Ranger Battalion."
                },
                {
                    name: "Raven Brigade",
                    description: "The wargames component of 1st Ranger Battalion."
                },
                {
                    name: "Army Infantry School",
                    description: "Comprised of the best personnel 75th can offer, they are the first to engage against enemy forces."
                }
            ]
        },
        {
            name: "82nd Airborne Division",
            shortName: "82nd",
            logo: "/path/to/asf-logo.png", // Placeholder, replace with actual path
            description: "The 82nd Airborne Division is a rapid deployment force built on speed, aggression, and elite airborne tactics. As America's Guard of Honor, they specialize in airborne assaults and high-risk operations behind enemy lines.",
            links: [
                { type: "Roblox Group", url: "#", icon: <SiRoblox /> },
                { type: "Discord", url: "#", icon: <FaDiscord /> },
            ],
            badges: [
                { name: "Airborne Operations", icon: <FaShieldAlt /> },
                { name: "Rapid Deployment", icon: <FaClock /> },
            ],
            battalions: []
        },
        {
            name: "101st Airborne Division",
            shortName: "101st",
            logo: "/path/to/jfkwscs-logo.png", // Placeholder, replace with actual path
            description: "Screaming Eagles of the 101st Airborne Division bring mobility and precision to the battlefield. Masters of air assault tactics, they strike fast, strike hard, and control the skies with unmatched coordination and combat skill.",
            links: [
                { type: "Roblox Group", url: "#", icon: <SiRoblox /> },
                { type: "Discord", url: "#", icon: <FaDiscord /> },
            ],
            badges: [
                { name: "Air Assault", icon: <FaShieldAlt /> },
                { name: "Precision Strikes", icon: <FaClock /> },
            ],
            battalions: []
        },
        {
            name: "1st Cavalry Division",
            shortName: "1CAV",
            logo: "/path/to/160th-soar-logo.png", // Placeholder, replace with actual path
            description: "The 1st Cavalry Division combines legacy and innovation. Known for versatility, speed, and armored dominance, we operate across multiple combat environments with confidence and cavalry spirit.",
            links: [
                { type: "Roblox Group", url: "#", icon: <SiRoblox /> },
                { type: "Discord", url: "#", icon: <FaDiscord /> },
            ],
            badges: [
                { name: "Armored Warfare", icon: <FaShieldAlt /> },
                { name: "Versatility", icon: <FaGlobe /> },
            ],
            battalions: []
        }
    ];

    return (
        <div className="max-h-screen h-full w-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8 items-center justify-center">
            <center className="mb-12">
                <h2 className="text-4xl font-extrabold text-white">
                    Our Elite Units
                </h2>
            </center>

            {/* Central Description */}
            <div className="max-w-4xl mx-auto mb-16">
                <p className="text-white text-center text-lg leading-relaxed p-6 border-l-4 border-blue-700 rounded" 
                   style={{background: "rgba(20, 71, 230, 0.05)"}}>
                    Forces Command is a combat-based unit within the military, equipped with 4 separate divisions with their own crucial specialties that contribute to the United States' success when deployed. With over 1,000 active serving personnel, Forces Command focuses on combat readiness for campaign-based combat at any moment, in any environment. Forces Command strives to maintain an atmosphere of discipline, nobility, and fortitude throughout all divisions beneath the unit.
                </p>
            </div>

            {/* Static Unit Buttons */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 1st Infantry Division */}
                <a href="/units/1id" className="block p-6 border-2 border-green-700 rounded-lg bg-black/60 hover:bg-green-700 hover:text-white transition-colors text-center shadow-lg">
                    <div className="text-2xl font-bold mb-2">1st Infantry Division</div>
                    <div className="mb-2 text-green-400">"The Big Red One"</div>
                    <div className="mb-2 text-sm">Ground operations, discipline, tradition, and excellence.</div>
                    <div className="text-xs text-green-300 underline">Learn more</div>
                </a>
                {/* 82nd Airborne Division */}
                <a href="/units/82nd" className="block p-6 border-2 border-red-700 rounded-lg bg-black/50 hover:bg-red-700 hover:text-white transition-colors text-center shadow-lg">
                    <div className="text-2xl font-bold mb-2">82nd Airborne Division</div>
                    <div className="mb-2 text-red-400">"All American"</div>
                    <div className="mb-2 text-sm">Rapid deployment, airborne assaults, high-risk ops.</div>
                    <div className="text-xs text-red-300 underline">Learn more</div>
                </a>
                {/* 101st Airborne Division */}
                <a href="/units/101st" className="block p-6 border-2 border-blue-700 rounded-lg bg-black/60 hover:bg-blue-500 hover:text-white transition-colors text-center shadow-lg">
                    <div className="text-2xl font-bold mb-2">101st Airborne Division</div>
                    <div className="mb-2 text-blue-400">"Screaming Eagles"</div>
                    <div className="mb-2 text-sm">Air assault, mobility, precision, and coordination.</div>
                    <div className="text-xs text-blue-600 underline">Learn more</div>
                </a>
                {/* 1st Cavalry Division */}
                <a href="/units/1cav" className="block p-6 border-2 border-yellow-500 rounded-lg bg-black/50 hover:bg-yellow-500 hover:text-white transition-colors text-center shadow-lg">
                    <div className="text-2xl font-bold mb-2">1st Cavalry Division</div>
                    <div className="mb-2 text-yellow-400">"First Team"</div>
                    <div className="mb-2 text-sm">Versatility, speed, and armored dominance.</div>
                    <div className="text-xs text-yellow-300 underline">Learn more</div>
                </a>
            </div>

            {/* Unit Details Section - This will be shown when a unit is selected */}
            <div className="max-w-7xl mx-auto mt-16">
                <div id="infantry" className="rounded-2xl max-w-300 w-280 mx-auto my-0 py-16 px-8 w-50 items-center justify-center" 
                     style={{background: 'rgba(0,0,0,0.3)', minHeight: '60vh', display: 'none'}}>
                    <div className="px-auto max-w-264 w-264 mx-auto rounded-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', minHeight: '60vh'}}>
                        <div className="flex items-center p-6">
                            <img className='h-20 w-auto' src='/src/Components/Assets/img/101st-logo-main.png' alt='101st img' />
                            <div className="ml-6">
                                <p className='text-3xl font-extrabold text-white'>101st Airborne Division</p>
                                <p className='text-sm text-white pl-2 font-bold'>Commanding Officer: <span className='text-gray-300'>MGen UseStarcode_Groven</span></p>
                            </div>
                        </div>
                        <div className="p-6 pl-11">
                            <p className='text-xl font-bold text-white'>About</p>
                            <p className='text-sm text-white pt-2'>Screaming Eagles of the 101st Airborne Division bring mobility and precision to the battlefield. Masters of air assault tactics, they strike fast, strike hard, and control the skies with unmatched coordination and combat skill.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Units;