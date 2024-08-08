import BasketDetailCart from "./BasketDetailCart";
import PayDetailCart from "./PayDetailCart";


const PayCart = () => {
  return (
    <>
      <div className="flex justify-center items-center py-[100px] bg-[#F4F6F8] w-full ">
        <div className="flex glass-card justify-evenly items-center max-md:flex-col flex-row-reverse  p-6 gap-3 w-[900px]  md:bg-white rounded-xl md:shadow-[3px_01px_50px_5px_rgba(184,184,224,0.5)]">
          <BasketDetailCart/>
          <PayDetailCart/>
          
        </div>
      </div>
    </>
  );
};

export default PayCart;
