/* eslint-disable react/prop-types */

const ProDetails = ({ tour }) => {
    const { name, price, description, img, imgGallery, details, gallery } = tour;
    const { detailsDescription, numberOfGroup, duration, departuringAndArrivingAreas, guideService, language, entryFees, entryTransportation } = details;

    return (
        <div>
            {/* packageDetails hero */}
            <div className="flex flex-col lg:flex-row gap-10 items-start ">
                <div className="lg:w-1/2 w-full">
                    <img src={img} className="rounded-xl" alt="" />
                    <div className="flex gap-2  lg:gap-5 mt-2 lg:mt-5">
                        {imgGallery.map((imgG, idx) => <img className="md:w-fit w-28" key={idx} src={imgG} alt="" />)}
                    </div>
                </div>
                <div className="lg:w-1/2 grid gap-5">
                    <h1 className="md:text-5xl text-3xl font-bold ">{name}</h1>
                    <h1 className="text-xl font-medium flex items-center gap-2">from <span className="text-orange-400 font-bold text-2xl md:text-4xl">{price}</span></h1>
                    <p className="md:text-xl text-gray-500">{description}</p>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-lg">Select a date</label>
                        <input type="date" placeholder="Select The Date" className="px-4 border-2  py-3 rounded-md md:w-96 w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-lg">Time</label>
                        <input type="time" placeholder="Select the time" className="px-4 border-2  py-3 rounded-md md:w-96 w-full" />
                    </div>
                    <div>
                        <div>
                            <button className="md:w-96 w-full bg-orange-400 text-white font-semibold px-6 py-2 rounded-full text-xl active:scale-95 hover:bg-transparent border-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-all">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className="my-16 grid gap-5 md:text-xl">
                <h1 className="md:text-4xl text-3xl font-bold">Details</h1>
                <p className="md:w-10/12  ">{detailsDescription}</p>
                <div className="grid gap-2">
                    <p className="flex items-center gap-2"><img src="https://i.ibb.co.com/CWYDGSC/icon-private-tours.png" alt="" /><span className="font-medium">Number of group:</span> {numberOfGroup}</p>
                    <p className="flex items-center gap-2"><img src="https://i.ibb.co.com/pzcM8dk/icon-duration.png" alt="" /><span className="font-medium">Duartion::</span> {duration}</p>
                    <p className="flex flex-wrap items-center gap-2"><img src="https://i.ibb.co.com/c8Mc2CZ/akar-icons-location.png" alt="" /><span className="font-medium">Departuring and arriving areas:</span> {departuringAndArrivingAreas}</p>
                    <p className="flex items-center gap-2"><img src="https://i.ibb.co.com/R6Bv0sP/icon-guide.png" alt="" /><span className="font-medium">Guide service:</span> {guideService}</p>
                    <span className="flex items-center gap-2"><img src="https://i.ibb.co.com/r4fJjYw/icon-language.png" alt="" /><span className="font-medium">Language:</span> {language.map((lang, idx) => <p key={idx}>{lang}</p>)}</span>
                    <p className="flex items-center gap-2"><img src="https://i.ibb.co.com/Hdxt9NT/icon-ticket.png" alt="" /><span className="font-medium">Entry Fees:</span> {entryFees}</p>
                    <p className="flex items-center gap-2"><img src="https://i.ibb.co.com/PFbfB0s/icon-bus.png" alt="" /><span className="font-medium">EntryTransportation:</span> {entryTransportation}</p>
                </div>
            </div>

            {/* Gallary */}
            <div className="my-16">
                <h1 className="text-4xl mb-10 font-bold">Gallery</h1>
                <div className="flex gap-5 flex-col w-full md:flex-row items-center">
                    <img src={gallery[0]} alt="" />
                    <div className="w-full flex gap-5 flex-col md:flex-row">
                        <div className="flex flex-col gap-5">
                            <img src={gallery[1]} alt="" />
                            <img src={gallery[2]} alt="" />
                        </div>
                        <img src={gallery[3]} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProDetails