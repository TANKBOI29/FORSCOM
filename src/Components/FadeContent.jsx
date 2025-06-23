import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import '/src/index.css';

function FadeContent() {
    const [activeTab, setActiveTab] = useState('contact');

    return (
        <div className="w-full h-screen flex items-center justify-center bg-neutral-900/90">
            <div className="bg-neutral-900 rounded-2xl shadow-2xl w-[90vw] h-[90vh] flex p-0 border border-neutral-800">
                {/* Left: Profile Section */}
                <div className="w-1/3 flex flex-col items-center justify-start py-12 px-8 border-r border-neutral-800">
                    <div className="relative w-40 h-40 mb-6">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Profile"
                            className="w-40 h-40 object-cover rounded-xl border-4 border-neutral-800 shadow-lg"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-white">Fade</h2>
                        <p className="text-neutral-400 mt-1">Commanding General</p>
                    </div>
                </div>

                {/* Right: Info Section */}
                <div className="w-2/3 flex flex-col py-12 px-10">
                    <h3 className="text-xl font-semibold text-white mb-2">About Me</h3>
                    <p className="text-neutral-300 mb-6">
                        Solutionist, pro-consumer, pro-competition, pro-innovation, anti-monopoly/oligopoly and anti-regulation
                    </p>

                    {/* Tabs */}
                    <div className="flex border-b border-neutral-700 mb-4">
                        <button
                            className={`px-4 py-2 text-sm font-medium focus:outline-none transition ${activeTab === 'contact' ? 'border-b-2 border-blue-500 text-white' : 'text-neutral-400'}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            Contact Info
                        </button>
                        <button
                            className={`px-4 py-2 text-sm font-medium focus:outline-none transition ${activeTab === 'additional' ? 'border-b-2 border-blue-500 text-white' : 'text-neutral-400'}`}
                            onClick={() => setActiveTab('additional')}
                        >
                            Additional Info
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-y-auto">
                        {activeTab === 'contact' && (
                            <div className="space-y-2 text-neutral-200">
                                <div><span className="font-semibold">Email:</span> steven.mcain@email.com</div>
                                <div><span className="font-semibold">Discord</span> fade297 | 603440838831374336</div>
                                
                            </div>
                        )}
                        {activeTab === 'additional' && (
                            <div className="space-y-2 text-neutral-200">
                                <div><span className="font-semibold">Join date:</span> 22334455</div>
                                <div><span className="font-semibold">Starting division:</span> 101st</div>
                                <div><span className="font-semibold">Other positions:</span> Head Quartermaster</div>
                                <div><span className="font-semibold">Status:</span> Single</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FadeContent;