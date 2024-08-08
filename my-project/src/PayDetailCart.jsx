import BlurCard from "./BlurCard"
import PayDetail from "./PayDetail"


const PayDetailCart = () => {
  return (
    <div className=" overflow-hidden bg-white shadow-xl rounded-2xl  p-7 flex flex-col gap-3  justify-between w-full md:w-[80%]  h-full">
            {true?<PayDetail/>:<BlurCard/>}
            
          </div>
  )
}

export default PayDetailCart