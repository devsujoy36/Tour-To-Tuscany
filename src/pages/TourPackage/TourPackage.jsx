import { Helmet } from "react-helmet-async"
import OurPackage from "./OurPackage"
const TourPackage = () => {
    return (
        <div className="font-baloo-2 ">
            <Helmet>
                <title>TOURS TO TUSCANY | TOUR PACKAGES</title>
            </Helmet>
            <div className="min-h-screen pt-16 flex justify-center items-center ">
                <OurPackage/>
            </div>
        </div>
    )
}

export default TourPackage