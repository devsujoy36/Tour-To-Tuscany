import { useEffect, useState } from "react"
import Product from "./Product"

const ExplorePopularDestinations = () => {
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
    <div className="max-w-screen-2xl lg:mx-auto mx-10 py-20" >
      <div className="">
        <h1 className="text-4xl pb-10 text-orange-500 font-bold">Explore Our Popular Destinations</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {tours.map((tour, idx) => (<Product key={idx} tour={tour} />))}
        </div>
      </div>
    </div>
  )
}

export default ExplorePopularDestinations