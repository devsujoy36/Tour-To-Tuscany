
const BookNewBike = () => {
  const hangleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="bg-orange-300 py-16 ">

      <div className="md:max-w-screen-2xl md:mx-auto mx-10 flex flex-col md:flex-row justify-between items-end gap-10">

        <div className="md:w-1/2  w-full">

          <h1 className="text-4xl font-bold text-center mb-10">Book New Bike</h1>

          <form onSubmit={hangleSubmit} className="bg-orange-200 p-8 rounded-2xl ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 lg:gap-8">

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-lg">Name and Surname</label>
                <input type="text" placeholder="Enter your name and surname" className="px-4 py-3 rounded-md" />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-lg">Email Adress</label>
                <input type="email" placeholder="Enter your email adress" className="px-4 py-3 rounded-md" />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-lg">Telephone Number</label>
                <input type="number" placeholder="Enter your telephone number" className="px-4 py-3 rounded-md" />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-lg">Service Type</label>
                <input type="text" placeholder="Enter Your Service Type" className="px-4 py-3 rounded-md" />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-lg">Date</label>
                <input type="date" placeholder="Select The Date" className="px-4 py-3 rounded-md" />
              </div>


              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-lg">Time</label>
                <input type="time" placeholder="Select the time" className="px-4 py-3 rounded-md" />
              </div>

            </div>

            <div className="flex justify-center items-center mt-10">
              <input type="submit" value={"Book Now"} className="bg-[#fd9a4e] px-12 py-2 rounded-full text-white font-semibold border-2 border-transparent hover:border-white hover:bg-transparent active:scale-95 cursor-pointer transition-all text-xl" />
            </div>

          </form>

        </div>

        <div className="md:w-1/2">
          <img className="w-fit" src="https://i.ibb.co.com/GcwbkSX/bike-picture.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default BookNewBike