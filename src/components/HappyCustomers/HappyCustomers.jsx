import Review from "./Review"

const HappyCustomers = () => {
  return (
    <div>
        <div className="max-w-screen-2xl md:mx-auto ">
            <h1 className="font-bold mb-10 text-4xl">Happy Customers Says</h1>
            <div className="flex justify-between flex-col md:flex-row gap-10 items-center">
                <Review/>
                <Review/>
            </div>
        </div>
    </div>
  )
}

export default HappyCustomers