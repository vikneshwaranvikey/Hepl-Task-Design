
import pnd from "./svg/dot.png"
import title from "./assets/Sidebar-Title.png"
import Avatar from "./assets/icons8-avatar-100.png"
import Tables from "./Table/Tables";
import React, { useEffect, useState } from 'react'
import axios from "axios";
function App() {

  const [click, setClick] = useState(false);
  const [Data, setData] = useState([])
  const [search, setSerch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users")
      setData(result.data)
    }
    fetchData()
  }, [])

  const searchData = Data.filter(val =>
    val.name.toLowerCase().includes(search.toLowerCase()));


  const menuClick = () => {
    setClick(!click)
  }

  return (
    < >
      <div className="flex h-screen bg-blue-50 w-screen">
        {/*Sidebar*/}
        <div className={`md:block ${click ? "block" : "hidden"} w-72 bg-gray-800`} >
          <div className="flex items-center justify-center h-48 bg-white">
            <img className="w-64 h-36" src={title} alt="Your SVG" />
          </div>
          <h3 className="m-6 text-white text-sm">Masters</h3>
          <div className="flex items-center justify-center">
            <button className="flex items-center bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-500/50 p-2 h-14 w-60 rounded-md font-medium text-white text-base"><img className="w-1/12 mx-4" src={pnd} alt="Your SVG" />Master Records</button>
          </div>
        </div>
        {/*Sidebar End*/}

        <div className="w-9/12 mx-auto mt-8">
          {/*Nav 1*/}
          <div className="flex justify-between" >
            <div className="flex items-center font-bold text-2xl">Master Records</div>
            <div className='md:hidden mt-3'>
              <button onClick={menuClick}>
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
          {/*Nav 1 End*/}
          {/*Nav 2*/}
          <div className="lg:flex justify-between mt-16" >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-black top-4 left-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input type="text" value={search} onChange={(e) => setSerch(e.target.value)} className="bg-white h-14 w-96 px-12 rounded-lg outline-none focus:shadow-lg hover:cursor-pointer font-bold" placeholder="Search any Keyword" />
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
          {/*Nav 2 End*/}
          {/*Table 3*/}
          <div className="mt-14">
            <Tables Data={searchData} />
          </div>
          {/*Table 3 Eng*/}
        </div>

      </div >
    </>
  );
}

export default App;
