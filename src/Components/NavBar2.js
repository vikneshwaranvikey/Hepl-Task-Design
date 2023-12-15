import React from 'react'


function NavBar2({ search, setSearch }) {

    return (
        <div className="lg:flex justify-between mt-16" >
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-black top-4 left-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-white h-14 w-96 px-12 rounded-lg outline-none focus:shadow-lg hover:cursor-pointer font-bold" placeholder="Search any Keyword" />
            </div>

            <div>
                <ul className="md:flex space-x-4">
                    <li className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 absolute text-teal-700 font-bold mt-0.5 top-4 left-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <button className="bg-white hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border h-12 w-52 rounded">
                            Sample Document
                        </button></li>
                    <li className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 absolute text-teal-700 font-bold mt-0.5 top-4 left-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <button className="bg-white hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border h-12 w-36 rounded">
                            Import
                        </button>
                    </li>
                    <li className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 absolute text-white text-sm font-bold mt-0.5 top-4 left-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <button className="bg-teal-600 text-white font-semibold py-2 px-4 border h-12 w-36 rounded">
                            Add
                        </button></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar2