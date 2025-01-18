import MPopPackage from "./MPopPackage"

const MostPopularPackages = () => {
  const popularPackages = [
    {
      "id": 1,
      "name": "BIKE / RICKSHAW",
      "img": "https://i.ibb.co.com/1G3GXHS/mostpopularpackage1.png",
      "price": 20,
      "features": [
        "Your bike for a day",
        "City App",
        "Discount on Rickshaw",
        "Guaranteed Support"
      ]
    },
    {
      "id": 2,
      "name": "BIKE TOURS",
      "img": "https://i.ibb.co.com/k6yKqsf/mostpopularpackage2.png",
      "price": 30,
      "features": [
        "A Mountain Bike Included",
        "A Guide For You",
        "Bottle of water",
        "Guaranteed Support"
      ]
    },
    {
      "id": 3,
      "name": "BUS TRIPS",
      "img": "https://i.ibb.co.com/mC54sZ3/mostpopularpackage3.png",
      "price": 20,
      "features": [
        "Park ticket",
        "Return bus",
        "Companion",
        "Guaranteed Support"
      ]
    },
    {
      "id": 4,
      "name": "TRANSFER",
      "img": "https://i.ibb.co.com/R9cdYjT/mostpopularpackage4.png",
      "price": 20,
      "features": [
        "Personal Driver",
        "Wherever You Want",
        "At the best price",
        "Guaranteed Support"
      ]
    }
  ]


  return (
    <div>
      <div className="max-w-screen-2xl lg:mx-auto mx-10 my-20">
        <h1 className="text-4xl font-bold text-center mb-10">The Most Popular Packages</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          { popularPackages.map((popularPackage)=><MPopPackage key={popularPackage.id} popularPackage={popularPackage}/>)}
        </div>
      </div>
    </div>
  )
}

export default MostPopularPackages