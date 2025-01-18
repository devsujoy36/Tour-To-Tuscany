import BookNewBike from "../../components/BookNewBike/BookNewBike"
import ExplorePopularDestinations from "../../components/ExplorePopularDestinations/ExplorePopularDestinations"
import Footer from "../../components/Footer/Footer"
import GetSpecialOffer from "../../components/GetSpecialOffer/GetSpecialOffer"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import MostPopularPackages from "../../components/MostPopularPackages/MostPopularPackages"
import WelcomeToOurSite from "../../components/WelcomeToOurSite/WelcomeToOurSite"

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <ExplorePopularDestinations/>
        <WelcomeToOurSite/>
        <GetSpecialOffer/>
        <BookNewBike/>
        <MostPopularPackages/>
        <Footer/>
    </div>
  )
}

export default Home