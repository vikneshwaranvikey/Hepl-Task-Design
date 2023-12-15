import React from 'react'
import Avatar from "../assets/icons8-avatar-100.png"
function NavBar1({ menuclick }) {
    return (
        <div className="flex justify-between" >
            <div className="flex items-center font-bold text-2xl">Master Records</div>
            <div className='md:hidden mt-3'>
                <button onClick={menuclick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className="flex space-x-4">
                <ul >
                    <li className="font-bold pl-12">Robert</li>
                    <li className="font-bold text-gray-400">Super Admin</li>
                </ul>
                <button className="flex items-center bg-indigo-100 p-3 h-14 w-16 rounded-md"><img src={Avatar} alt="Your SVG" /></button>
            </div>
        </div>
    )
}

export default NavBar1