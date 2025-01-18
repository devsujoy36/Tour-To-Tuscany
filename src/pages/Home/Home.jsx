import { Helmet } from "react-helmet-async"
import BikeBusRental from "../../components/BikeBusRental/BikeBusRental"
import BookNewBike from "../../components/BookNewBike/BookNewBike"
import ExplorePopularDestinations from "../../components/ExplorePopularDestinations/ExplorePopularDestinations"
import GetSpecialOffer from "../../components/GetSpecialOffer/GetSpecialOffer"
import Hero from "../../components/Hero/Hero"
import MostPopularPackages from "../../components/MostPopularPackages/MostPopularPackages"
import WelcomeToOurSite from "../../components/WelcomeToOurSite/WelcomeToOurSite"

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>TOURS TO TUSCANY | HOME</title>
      </Helmet>
      <Hero />
      <ExplorePopularDestinations />
      <WelcomeToOurSite />
      <GetSpecialOffer />
      <BikeBusRental />
      <BookNewBike />
      <MostPopularPackages />
    </div>
  )
}

export default Home