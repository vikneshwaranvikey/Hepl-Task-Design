import { RingLoader } from 'react-spinners';

function TransparentLoader() {
  return (
    <div className={`h-screen w-full flex justify-center items-center`}> <RingLoader size={80} speedMultiplier={2} color="#ef4641" className={" loader"} /></div>
  )
}

export default TransparentLoader