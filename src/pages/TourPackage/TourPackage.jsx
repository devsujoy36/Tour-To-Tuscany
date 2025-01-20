import { Helmet } from "react-helmet-async"
import ExplorePopularDestinations from "../../components/ExplorePopularDestinations/ExplorePopularDestinations"
const TourPackage = () => {
    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co.com/7S1bjwg/hero.png)` }} className="bg-cover bg-center min-h-[100vh] font-baloo-2 ">
            <Helmet>
                <title>TOURS TO TUSCANY | TOUR PACKAGES</title>
            </Helmet>
            <div className="min-h-screen pt-10 flex justify-center items-center ">
                
                <ExplorePopularDestinations/>
            </div>
        </div>
    )
}

export default TourPackage