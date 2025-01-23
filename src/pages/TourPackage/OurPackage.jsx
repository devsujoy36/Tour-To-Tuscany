/* eslint-disable react/prop-types */
import { useContext, } from "react"
import Product from "../../components/ExplorePopularDestinations/Product";
import { AuthContext } from "../../Providers/AuthProviders";


const OurPackage = () => {

  const {tours} = useContext(AuthContext)
  console.log(tours);

  return (
    <div className="max-w-screen-2xl lg:mx-auto mx-10 md:py-20 py-10" >
      <div className="">
        <h1 className="md:text-4xl text-3xl md:pb-10 pb-5 font-bold">Our Product</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {tours.map((tour, idx) => (<Product key={idx} tour={tour} />))}
        </div>
      </div>
    </div>
  )
}

export default OurPackage