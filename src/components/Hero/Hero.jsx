import { useState } from "react"
import PrivateTourForm from "./PrivateTourForm"
import PublicTourForm from "./PublicTourForm"

const Hero = () => {
  const publicTourActive = "bg-white rounded-tl-xl text-orange-400"
  const privateTourActive = "bg-white rounded-tr-xl text-orange-400"
  const tourDeactive = "text-white"

  const [tourForm, setTourForm] = useState(true)
  const [formVisible, setformVisible] = useState(true)

  const publicTourActiveHandler = () => {
    setTourForm(true)
  }
  const privateTourActiveHandler = () => {
    setTourForm(false)
  }

  const handleFormVisible = () => {
    setformVisible(!formVisible)
  }

  return (
    <div style={{ backgroundImage: `url(https://i.ibb.co.com/7S1bjwg/hero.png)` }} className="bg-cover bg-center ">
      <div className="md:min-h-[100vh] min-h-[100vh] mx-10 text-white flex gap-5 justify-center items-center flex-col">
        <div>
          <h1 className="md:text-6xl text-3xl font-pacifico-regular">Enjoy in the best way!</h1>
          <h1 className="md:text-3xl mt-2 md:mt-5">Enjoy our service for your trip anytime</h1>

        </div>
        {formVisible
          ?
          <div onClick={handleFormVisible} className="flex justify-center items-center font-baloo-2 ">
            <button className="hover:bg-orange-400 text-lg hover:px-8 px-4 py-1 rounded-full font-semibold border-2 hover:border-transparent border-white  active:scale-95 transition-all">Tour Form</button>
          </div>
          :
          <div className="text-black  bg-white bg-opacity-10 p-5 rounded-xl">
            <div className="bg-white bg-opacity-20 w-fit flex rounded-t-2xl ">
              <button onClick={publicTourActiveHandler} className={tourForm ? publicTourActive : tourDeactive}>
                <div className=" px-5 py-3  flex justify-center items-center gap-2 font-medium">
                  <img src="https://i.ibb.co.com/LSCcGZr/ic-baseline-public.png" alt="" />
                  <h1>Public Tour</h1>
                </div>
              </button>
              <button onClick={privateTourActiveHandler} className={!tourForm ? privateTourActive : tourDeactive}>
                <div className=" px-5 py-3  flex justify-center items-center gap-2  font-medium">
                  <img className="bg-orange-400 rounded-full p-1 w-6" src="https://i.ibb.co.com/YPNqdPb/icon-private-tours.png" alt="" />
                  <h1>Private Tour</h1>
                </div>
              </button>
            </div>
            <div>{tourForm ? <PublicTourForm /> : <PrivateTourForm />}</div>
          </div>
        }
      </div>
    </div>
  )
}

export default Hero
