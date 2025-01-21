/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Product from "../../components/ExplorePopularDestinations/Product";


const OurPackage = () => {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("/tourPackages.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => setTours(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // console.log(tours);

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