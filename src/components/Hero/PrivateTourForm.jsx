import { useState } from "react";


const PrivateTourForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("Chose Time");
    const [tour, setTour] = useState("");
    const [transport, setTransport] = useState("");

    return (
        <div className="bg-white p-5 rounded-b-2xl  flex md:gap-5 gap-2 flex-col lg:flex-row justify-center items-center md:text-xl text-xs">

            <div className="md:border-r-2 md:border-t-0 border-t-2 pt-2 md:pt-0 md:pr-4 w-full">
                <h1 className="flex font-semibold gap-2 items-center "> <img src="https://i.ibb.co.com/N3L5dS0/system-uicons-calendar-month.png" alt="" /> Date</h1>
                <input value={date} onChange={() => setDate(event.target.value)} type="date" placeholder="Choose Date" className="text-gray-500 pl-8 py-2 w-full" />
            </div>

            <div className="md:border-r-2 md:border-t-0 border-t-2 pt-2 md:pt-0 md:pr-4 w-full">
                <h1 className="flex font-semibold gap-2 items-center "> <img src="https://i.ibb.co.com/s3G14mp/system-uicons-clock.png" alt="" /> Time</h1>
                <select className="pl-7 text-gray-500 py-2 w-full" value={time} onChange={() => { setTime(event.target.value) }}>
                    <option value="choosenumber" selected >Choose Time</option>
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
                <select className="pl-7 text-gray-500 py-2 w-full" value={tour} onChange={() => { setTour(event.target.value) }}>
                    <option value="" selected >Choose Tour</option>
                    <option value="Lucca Bike Tour">Lucca Bike Tour</option>
                    <option value="Book a bike ">Book a bike </option>
                    <option value="Tour in the outside of Lucca">Tour in the outside of Lucca</option>
                    <option value="Wine Tasting in Tuscany">Wine Tasting in Tuscany</option>
                    <option value="Cinque Terre Tour">Cinque Terre Tour</option>
                    <option value="Siena and Surroundings">Siena and Surroundings</option>
                    <option value="Pisa & Lucca">Pisa & Lucca</option>
                    <option value="Italy Special Trips">Italy Special Trips</option>
                </select>
            </div>

            <div className="md:border-r-2 md:border-t-0 border-t-2 pt-2 md:pt-0 md:pr-4 w-full">
                <h1 className="flex font-semibold gap-2 items-center "> <img src="https://i.ibb.co.com/1fPJWcg/icon-car.png" alt="" /> Type</h1>
                <select className="pl-7 text-gray-500 py-2 w-full" value={transport} onChange={() => { setTransport(event.target.value) }}>
                    <option value="" selected >Choose Type</option>
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

export default PrivateTourForm