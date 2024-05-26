import Tables from "./Table/Tables";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import SidBar from "./Components/SidBar";
import NavBar1 from "./Components/NavBar1";
import NavBar2 from "./Components/NavBar2";
import Loader from "./loader/Loader";
function App() {
  const [Data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [click, setClick] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users")
      setData(result.data)
    }
    fetchData()
    setLoader(false)
  }, [])
  //SearchFiler
  const searchData = Data.filter(val =>
    val.name.toLowerCase().includes(search.toLowerCase()));

  const menuClick = () => {
    setClick(!click)
  }

  return (
    < >
      {loader ? <Loader /> : <div className="flex h-screen bg-blue-50 w-screen">
        <SidBar click={click} />
        <div className="w-9/12 mx-auto mt-8">
          <NavBar1 menuclick={menuClick} />
          <NavBar2 search={search} setSearch={setSearch} Data={Data} setData={setData} />
          <div className="mt-14">
            <Tables searchData={searchData} />
          </div>
        </div>
      </div >}
    </>
  );
}

export default App;
