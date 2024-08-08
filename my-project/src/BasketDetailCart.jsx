import { FaBuffer } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { BsBookHalf } from "react-icons/bs";
//for the parent of any special type ,children would be hidden 
// {false?"hidden":"w-full flex flex-col items-end  gap-2 p-2 courses border" }

const BasketDetailCart = () => {
  return (
    <div className="  w-full p-5 bg-white shadow-lg rounded-2xl h-full">
        <div className="w-full flex flex-col items-end  gap-2 p-2 courses border">
            <div className="flex flex-row-reverse gap-2 border items-center">
                <FaBuffer className="text-[#0c4058] text-[18px]"/>
                <h2 className="text-[20px] md:text-[22px] text-[#0c4058] font-bold">دوره ها</h2>
                </div>
            <div className="w-full  border  flex flex-col justify-between p-1 items-end gap-2 h-full">
                <div className="w-full border flex justify-between flex-row-reverse">
                <div className="min-w-[126] h-[126px] rounded-md overflow-hidden">
                  <img className=" w-full h-full object-cover"  src="../course].webp" alt="" />
                </div >
                <h2 className="w-full h-full border border-blue-700 p-2">ssssddsa</h2>

                </div>
                <div className=" w-full h-fit flex justify-between p-2 ">
                  <button className="border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white transition-all ease-linear text-red-800 p-1">
                <FaRegTrashCan />
                  </button>
                  <h3>item price</h3>
                  </div>                
                 </div>
        </div>
    <div className="w-full flex flex-col items-end  gap-2 p-2 courses border">
    <div className="flex flex-row-reverse gap-2 border items-center">
                <BsBookHalf className="text-[#0c4058] text-[18px]"/>
                <h2 className="text-[20px] md:text-[22px] text-[#0c4058] font-bold">کتاب ها</h2>
                </div>
            <div className="w-full  border  flex flex-col justify-between p-1 items-end gap-2 h-full">
                <div className="w-full border flex justify-between flex-row-reverse">
                <div className="w-[126] h-[126px] rounded-md overflow-hidden">
                  <img className=" w-full h-full object-cover"  src="../book.webp" alt="" />
                </div >
                <h2 className=" h-full border border-blue-700 p-2">ssssddsa</h2>

                </div>
                <div className=" w-full h-fit flex justify-between p-2 ">
                  <button className="border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white transition-all ease-linear text-red-800 p-1">
                <FaRegTrashCan />
                  </button>
                  <h3>item price</h3>
                  </div>                
                 </div>
    </div>
    <div className="w-full flex flex-col items-end  gap-2 p-2 courses border">
            <div className="flex flex-row-reverse gap-2 border items-center">
                <FaBuffer className="text-[#0c4058] text-[18px]"/>
                <h2 className="text-[20px] md:text-[22px] text-[#0c4058] font-bold">کدها</h2>
                </div>
            <div className="w-full  border  flex flex-col justify-between p-1 items-end gap-2 h-full">
                <div className="w-full border flex justify-between flex-row-reverse">
                <div className="min-w-[126] h-[126px] rounded-md overflow-hidden">
                  <img className=" w-full h-full object-cover"  src="../course].webp" alt="" />
                </div >
                <h2 className="w-full h-full border border-blue-700 p-2">ssssddsa</h2>

                </div>
                <div className=" w-full h-fit flex justify-between p-2 ">
                  <button className="border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white transition-all ease-linear text-red-800 p-1">
                <FaRegTrashCan />
                  </button>
                  <h3>item price</h3>
                  </div>                
                 </div>
        </div>
        
    </div>
  )
}

export default BasketDetailCart