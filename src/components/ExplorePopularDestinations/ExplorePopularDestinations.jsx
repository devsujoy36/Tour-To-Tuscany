import Product from "./Product"

const ExplorePopularDestinations = () => {
  return (
    <div className="max-w-screen-2xl md:mx-auto mx-10 min-h-[90vh]">
      <div className="py-10">
        <h1 className="text-4xl py-16 font-bold">Explore Our Popular Destinations</h1>
        <div className="grid grid-cols-4 gap-10">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default ExplorePopularDestinations