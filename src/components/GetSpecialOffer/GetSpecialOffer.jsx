import { Link } from "react-router-dom"

const GetSpecialOffer = () => {
  return (
    <div className="">

      <div className="mx-auto bg-orange-300 ">
        <div className="max-w-screen-2xl lg:mx-auto mx-10 flex flex-col lg:flex-row justify-between items-end">

          <div className="bg-[#ffddb4] my-16 text-center md:p-10 p-6 rounded-xl ">
            <h1 className="md:text-4xl text-2xl font-extrabold">Get Special Offers for <br /> Organizations</h1>
            <p className="text-gray-600 my-5 md:text-xl lg:w-[470px] ">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the  industrys standard dummy text ever since the 1500s.</p>

            <div>
              <Link to={'/contactus'} className="bg-orange-400 font-semibold px-6 py-2 rounded-full text-xl active:scale-95 hover:bg-transparent border-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-all">Contact Us</Link>
            </div>

          </div>

          <div className="-mt-28">
            <img className="lg:w-[450px] " src="https://i.ibb.co.com/9hZB1VV/getspecial.png" alt="" />
          </div>


        </div>

        
      </div>
    </div>
  )
}

export default GetSpecialOffer