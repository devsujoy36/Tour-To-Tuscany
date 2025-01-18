import { Link } from "react-router-dom"

const Product = ({ tour }) => {
    const { id, name, img, price, day, details } = tour;
    const { numberOfGroup } = details;

    return (
        <div className="  rounded-2xl ">
            <div
                className="h-[420px] border rounded-xl bg-center bg-cover"
                style={{ backgroundImage: `url(${img})` }}>
            </div>

            <div className="mt-3 grid gap-2">

                <h1 className="text-2xl font-semibold">{name}</h1>

                <h1 className="text-xl flex items-center gap-2">from <span className="text-[#FA8B02] font-bold text-2xl">{price}</span></h1>

                <div className="text-[#FA8B02] flex justify-between font-medium">
                    <p>{day}</p>
                    <p>{numberOfGroup} PP</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-lg">A tour of the city and its surroundings led by a professional guide ...</p>
                    <Link className="text-[#FA8B02] underline  hover:text-black transition-all">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Product