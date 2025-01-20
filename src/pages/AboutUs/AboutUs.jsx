import { Helmet } from "react-helmet-async"

const AboutUs = () => {
    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co.com/7S1bjwg/hero.png)` }} className="bg-cover bg-center min-h-[100vh] font-baloo-2 text-white ">
            <Helmet>
                <title>TOURS TO TUSCANY | ABOUT</title>
            </Helmet>
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">About Page</h1>
                    <h1 className="text-xl mt-5">Still Working On This Pages</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutUs