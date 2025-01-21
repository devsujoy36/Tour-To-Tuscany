import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers"

const AboutUs = () => {
    return (
        <div>
            <Helmet> <title>TOURS TO TUSCANY | ABOUT</title> </Helmet>

            {/* about hero section */}
            <div style={{ backgroundImage: `url(https://i.ibb.co.com/xKZvTC4/aboutherobg.png)` }} className="bg-cover bg-center min-h-[100vh] font-baloo-2 text-white ">
                <div className="md:min-h-[100vh] min-h-[100vh] mx-10 flex justify-center items-center flex-col text-center">
                    <h1 className="md:text-6xl text-4xl font-pacifico-regular">Our team cares about your full relax</h1>

                    <div className="lg:w-3/6  font-medium mt-5">
                        <h1 className="md:text-2xl ">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</h1>
                    </div>
                    <Link to={"/tourpackages"} className="md:text-xl border-2 px-5 hover:px-10 hover:border-transparent py-3 rounded-full mt-5 hover:bg-orange-400 font-medium active:scale-95 transition-all">View our Tour Packages</Link>
                </div>
            </div>

            {/* Welcome section */}
            <div className="py-28">
                <div className="max-w-screen-2xl lg:mx-auto mx-10 md:flex justify-between items-center">

                    <div className="md:w-1/2">
                        <img className="" src="https://i.ibb.co.com/X4yjJGn/aboutwlcmhero.png" alt="" />
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="font-semibold text-gray-500">WELCOME TO OUR SITE!</h1>
                        <h1 className="text-4xl  font-bold text-gray-700">We Are The Center Of Lucca To Offer You The Best</h1>

                        <p className="text-xl my-10">We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!</p>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4  lg:gap-10">

                                <div className="text-gray-500 text-xl grid gap-1">
                                    <h1 className="text-4xl font-bold text-[#FA8B02]">20+</h1>
                                    <p>Years</p>
                                    <p>Experience</p>
                                </div>

                                <div className="text-gray-500 text-xl grid gap-1">
                                    <h1 className="text-4xl font-bold text-[#FA8B02]">100+</h1>
                                    <p>Happy</p>
                                    <p>Customer</p>
                                </div>

                                <div className="text-gray-500 text-xl grid gap-1">
                                    <h1 className="text-4xl font-bold text-[#FA8B02]">15+</h1>
                                    <p>Choice</p>
                                    <p>of Services</p>
                                </div>

                                <div className="text-gray-500 text-xl grid gap-1">
                                    <h1 className="text-4xl font-bold text-[#FA8B02]">10+</h1>
                                    <p>Professional</p>
                                    <p>Guides</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* one more section */}
            <div className="bg-orange-300">
                <div className="max-w-screen-2xl grid md:grid-cols-2 lg:grid-cols-4 md:gap-20 gap-5 font-medium lg:mx-auto mx-10 md:py-20 py-10 text-center">

                    <div className="bg-orange-200 p-10 flex flex-col justify-center items-center text-xl rounded-2xl gap-5">
                        <img src="https://i.ibb.co.com/KyC0vXP/wishes.png" alt="" />
                        <h1>Complete Packages For <br /> All Your Wishes</h1>
                    </div>
                    <div className="bg-orange-200 p-10 flex flex-col justify-center items-center text-xl rounded-2xl gap-5">
                        <img src="https://i.ibb.co.com/yFkzyGP/icon-experience.png" alt="" />
                        <h1>Over 30 Years Of Experience</h1>
                    </div>
                    <div className="bg-orange-200 p-10 flex flex-col justify-center items-center text-xl rounded-2xl gap-5">
                        <img src="https://i.ibb.co.com/XjF6bw7/icon-guide.png" alt="" />
                        <h1>Expert Guides For You </h1>
                    </div>
                    <div className="bg-orange-200 p-10 flex flex-col justify-center items-center text-xl rounded-2xl gap-5">
                        <img src="https://i.ibb.co.com/CpcpsGj/pricelike.png" alt="" />
                        <h1>Guaranteed fun at the <br /> best price!</h1>
                    </div>
                </div>
            </div>

            <div className="py-20 mx-10">
                <HappyCustomers />
            </div>

        </div>
    )
}




export default AboutUs