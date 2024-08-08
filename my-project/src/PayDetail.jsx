import { GiRaspberry } from "react-icons/gi";

const PayDetail = () => {
  return (
    <>
    <div className="w-full flex flex-col justify-start gap-2 p-4 bg-slate-300 shadow-lg rounded-xl h-[300px] ">
      <div className="flex justify-start flex-row-reverse items-center gap-2 "> 
        <GiRaspberry className="text-[#0c4058] text-[24px] "/>
        <h2 className="text-[20px] md:text-[22px] text-[#0c4058] font-bold">اطلاعات پرداخت</h2>

         </div>
         <div className="w-full bg-blue-900/30 h-[1px]">
         </div>
         <div className="w-full h-full flex justify-evenly flex-col bg-white">
            <div className="flex justify-between"></div>
            <div className="flex justify-between"></div>
         </div>
    </div>
            
            {/* payment button */}
            <div className="w-full shadow-xl group rounded-lg   transition-all ease-in delay-300 box-border h-[90px] relative  overflow-hidden ">
              <div className=" w-[50%] group-hover:w-[100%]  h-full  inline-block   justify-center transition-all ease-in delay-300 items-center bg-darkBlue">
                <div className="w-full h-full group flex justify-center items-center">
                  <div className=" bg-[#dceeff] shadow-[-2px_1px_7px_2px_rgba(30,27,50,1)] w-[70px] group-hover:slide-top  transition-all delay-500  flex justify-evenly flex-col  rounded-[6px] h-[46px] ">
                    <div className="bg-[#09294d] w-[86%] mx-auto h-3"></div>
                    <div className=" flex justify-start gap-1 pl-2 ">
                      <div className="rounded-full w-2 h-2 bg-cyan-700 "></div>
                      <div className="rounded-full w-2 h-2 bg-sky-900 "></div>
                      <div className="rounded-full w-2 h-2 bg-blue-950 "></div>
                    </div>
                  </div>
                </div>
                <div className="bg-black w-full  flex justify-center h-[75px] ">
                    <div className="poze">
                    <div className="bg-[#dddde0] z-20  w-[65px] relative  h-[75px] group-hover:slide-out rounded-[6px] overflow-hidden flex flex-col items-center  justify-start gap-1">
                        <div className="bg-zinc-800 w-[80%] rounded-lg  h-[25px]">
                     <div className="bg-zinc-600 w-full h-[50%] "></div>
                        </div>
                        <div className="bg-white w-[80%] h-[20px]"></div>
                        <div className=" absolute -bottom-2 w-[80%] grid gap-1 grid-cols-3 grid-rows-2">
                            <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                            <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                            <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                            <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                            <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                            <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className=" absolute w-[50%]   h-full  inline-block  text-center leading-[75px] text-[22px] text-[#0c4058] transition-all ease-linear delay-600 justify-center items-center bg-white font-bold">
                پرداخت
              </div>
            </div>
    </>    

)
}

export default PayDetail