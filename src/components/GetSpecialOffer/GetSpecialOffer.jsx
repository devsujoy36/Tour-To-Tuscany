
const GetSpecialOffer = () => {
  return (
    <div className="">

      <div className="mx-auto relative">
        <div className="max-w-screen-2xl lg:mx-auto mx-10 flex flex-col lg:flex-row justify-between items-end">

          <div className="bg-[#ffddb4] my-16 text-center md:p-10 p-6 rounded-xl">
            <h1 className="md:text-4xl text-2xl font-extrabold">Get Special Offers for <br /> Organizations</h1>
            <p className="text-gray-600 my-5 md:text-xl lg:w-[470px] ">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s.</p>
            <button className="bg-[#FA8B02] text-xl text-white px-8 py-2 rounded-full active:scale-95 transition-all">Contact Us</button>
          </div>

          <div className="">
            <img className="lg:w-[450px] " src="https://i.ibb.co.com/9hZB1VV/getspecial.png" alt="" />
          </div>


        </div>
      
      <div className="absolute bg-orange-300 bottom-0 lg:min-h-[475px] md:min-h-[465px] min-h-[400px] w-full -z-30"></div>
      </div>
    </div>
  )
}

export default GetSpecialOffer