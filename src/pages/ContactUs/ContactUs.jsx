import { Helmet } from "react-helmet-async"
const ContactUs = () => {
    const hangleSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <div className=" font-baloo-2 md:pt-24 ">
            <Helmet><title>TOURS TO TUSCANY | CONTACT US</title></Helmet>

            <div className="md:bg-orange-300 ">
                <div className="max-w-screen-2xl  lg:mx-auto  lg:py-16 py-20 ">
                    <div className="flex justify-between lg:flex-row flex-col items-center gap-8 md:gap-10 p-10">

                        <div className="grid md:gap-8  gap-3 text-xl font-medium  lg:w-1/2">
                            <h1 className="md:text-6xl text-4xl font-bold">Get In Touch!</h1>
                            <h1 className="text-xl">Fill up the form and our Team will get <br /> back to you within 24 hours.</h1>
                            <div className="flex items-center gap-2">
                                <img src="https://i.ibb.co.com/MVJsfLG/location.png" alt="" />
                                <h1>Ganginar Par, Mymensingh</h1>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <img src="https://i.ibb.co.com/R36Q5fS/phone.png" alt="" />
                                <h1>+01303-436299</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="https://i.ibb.co.com/GvPJBtD/mail.png" alt="" />
                                <h1>sujoydaspc2023@gmail.com</h1>
                            </div>
                        </div>

                        <form onSubmit={hangleSubmit} className="flex flex-col gap-1 w-full text-gray-500 text-lg md:bg-orange-200 shadow-2xl md:shadow-none md:border-none border rounded-2xl p-5 lg:p-10 lg:w-1/2">
                            <label htmlFor="" className="text-xl font-medium">Name and Surname</label>
                            <input type="text" placeholder="Enter your name and surname" className="px-4 md:py-3 py-2 rounded-md border-2" />
                            <label htmlFor="" className="text-xl font-medium md:mt-5 mt-1">Email Adress</label>
                            <input type="email" placeholder="Enter your email adress" className="px-4 md:py-3 py-2 rounded-md border-2" />
                            <label htmlFor="" className="text-xl font-medium md:mt-5 mt-1">Message</label>
                            <textarea type="email" rows={4} placeholder="Enter your message" className="px-4 md:py-3 py-2 rounded-md border-2" />
                            <div className="flex justify-center items-center md:mt-5 mt-3">
                                <button className="bg-orange-400 px-6 py-2 font-semibold text-white hover:text-orange-500 rounded-full border-2 border-transparent hover:border-orange-500 hover:bg-transparent active:scale-95 transition-all">Send Message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs