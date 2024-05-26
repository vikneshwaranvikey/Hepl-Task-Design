import React from 'react'
import pnd from "../svg/dot.png"
import title from "../assets/Sidebar-Title.png"


function SidBar({ click }) {


    return (
        <div className={`md:block ${click ? "block" : "hidden"} w-72 bg-gray-800`} >
            <div className="flex items-center justify-center h-48 bg-white">
                <img className="w-64 h-36" src={title} alt="Your SVG" />
            </div>
            <h3 className="m-6 text-white text-sm">Masters</h3>
            <div className="flex items-center justify-center">
                <button className="flex items-center bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-500/50 p-2 h-14 w-60 rounded-md font-medium text-white text-base"><img className="w-1/12 mx-4" src={pnd} alt="Your SVG" />Master Record</button>
            </div>
        </div>
    )
}

export default SidBar