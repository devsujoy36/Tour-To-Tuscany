/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Product = ({ tour }) => {
    const { id, name, img, price, day, details } = tour;
    const { numberOfGroup } = details;

    return (
        <div className="rounded-2xl p-3 bg-white text-left">
            <div
                className="md:h-[400px] h-[200px] border rounded-xl bg-center bg-cover"
                style={{ backgroundImage: `url(${img})` }}>
            </div>

            <div className="mt-3 grid md:gap-2">
                <h1 className="md:text-2xl font-semibold">{name}</h1>
                <h1 className="md:text-xl text-lg flex items-center gap-2">from <span className="text-[#FA8B02] font-bold text-2xl">{price}</span></h1>
                <div className="text-[#FA8B02] flex justify-between text-xs font-medium">
                    <p>{day}</p>
                    <p>{numberOfGroup} PP</p>
                </div>
                <div className="flex flex-col md:gap-2 gap-1">
                    <p className="md:text-lg text-xs">A tour of the city and its surroundings led by a professional guide ...</p>
                    <Link to={`/tourpackages/${id}`} className="text-[#FA8B02] underline text-xs hover:text-black transition-all">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Product