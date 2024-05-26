import ClipLoader from 'react-spinners/ClipLoader';

function Loader() {
  return (
    <div className="h-screen w-full flex justify-center items-center"> <ClipLoader size={80} speedMultiplier={.5} color="#ef4641" className='loader' /></div>
  )
}

export default Loader