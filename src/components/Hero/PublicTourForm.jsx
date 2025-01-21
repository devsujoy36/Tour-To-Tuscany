

const PublicTourForm = () => {
  return (
    <div className="bg-white p-5 rounded-b-2xl rounded-r-2xl flex flex-col lg:flex-row gap-2 md:gap-5 justify-center items-center md:text-xl text-xs">

            <div className="md:border-r-2 md:border-t-0 border-t-2 pt-2 md:pt-0 md:pr-4 w-full">
              <h1 className="flex font-semibold gap-2 items-center text-lg"> <img src="https://i.ibb.co.com/PtqcQJV/icon-private-tours-1.png" alt="" /> Number of People</h1>
              <select className="pl-7 text-gray-500 md:py-2" name="" id="">
                <option value="" selected >Choose Number</option>
                <option value="8-20">8-20</option>
                <option value="10-20">10-20</option>
                <option value="10-25">10-25</option>
                <option value="12-30">12-30</option>
                <option value="15-30">15-30</option>
              </select>
            </div>

            <div className="md:border-r-2 md:border-t-0 border-t-2 pt-2 md:pt-0 md:pr-4 w-full">
              <h1 className="flex font-semibold gap-2 items-center "> <img src="https://i.ibb.co.com/N3L5dS0/system-uicons-calendar-month.png" alt="" /> Date</h1>
              <input type="date" className="text-gray-500 py-2"/>
            </div>

            <div className="md:border-r-2 md:border-t-0 border-t-2 pt-2 md:pt-0 md:pr-4 w-full">
              <h1 className="flex font-semibold gap-2 items-center "> <img src="https://i.ibb.co.com/s3G14mp/system-uicons-clock.png" alt="" /> Time</h1>
              <select className="pl-7 text-gray-500 md:py-2" name="" id="">
                <option value="" selected >Choose Time</option>
                <option value="1:00 am">1:00 am</option>
                <option value="2:00 am">2:00 am</option>
                <option value="3:00 am">3:00 am</option>
                <option value="4:00 am">4:00 am</option>
                <option value="5:00 am">5:00 am</option>
                <option value="6:00 am">6:00 am</option>
              </select>
            </div>

            <div className="md:border-r-2 md:border-t-0 border-t-2 pt-2 md:pt-0 md:pr-4 w-full">
              <h1 className="flex font-semibold gap-2 items-center "> <img src="https://i.ibb.co.com/gVYwNzz/icon-tour.png" alt="" /> Tour</h1>
              <select className="pl-7 text-gray-500 md:py-2" name="" id="">
                <option value="" selected >Choose Tour</option>
                <option value="Lucca Bike Tour">Lucca Bike Tour</option>
                <option value="Book a bike ">Book a bike </option>
                <option value="Tour in the outside of Lucca">the outside of Lucca</option>
                <option value="Wine Tasting in Tuscany">Wine Tasting in Tuscany</option>
                <option value="Cinque Terre Tour">Cinque Terre Tour</option>
                <option value="Siena and Surroundings">Siena and Surroundings</option>
                <option value="Pisa & Lucca">Pisa & Lucca</option>
                <option value="Italy Special Trips">Italy Special Trips</option>
              </select>
            </div>

            <div className="md:border-r-2 md:border-t-0 border-t-2 pt-2 md:pt-0 md:pr-4 w-full">
              <h1 className="flex font-semibold gap-2 items-center "> <img src="https://i.ibb.co.com/1fPJWcg/icon-car.png" alt="" /> Transportation</h1>
              <select className="pl-7 text-gray-500 md:py-2" name="" id="">
                <option value="" selected >Choose Transportation</option>
                <option value="Minivan and Bus">Minivan and Bus</option>
                <option value="Transfers & NCC">Transfers & NCC</option>
                <option value="Luxury Experience">Luxury Experience</option>
              </select>
            </div>

            <div className=" w-full  flex justify-center items-center ">
              <button className="w-fit bg-orange-400 md:p-4 px-4 hover:px-10 py-2 rounded-full md:rounded-lg active:scale-95 transition-all"><img className="w-5" src="https://i.ibb.co.com/yfsYHFL/akar-icons-search.png" alt="" /></button>
            </div>

          </div>
  )
}

export default PublicTourForm