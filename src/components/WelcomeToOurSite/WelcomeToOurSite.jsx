

const WelcomeToOurSite = () => {
  return (
    <div className="py-10">
      <div className="max-w-screen-2xl lg:mx-auto mx-10 md:flex justify-between items-center">


          <div className="md:w-1/2">
            <img className="md:w-4/6" src="https://i.ibb.co.com/F6GQ3JQ/wlcmoursite.png" alt="" />
          </div>

          <div className="md:w-1/2">
            <h1 className="font-semibold text-gray-500">WELCOME TO OUR SITE!</h1>
            <h1 className="text-4xl  font-bold text-gray-700">We are the best company
              for your visit</h1>

            <p className="text-xl my-10">After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!</p>

            <div>
              <div className="grid grid-cols-2 md:grid-cols-4  gap-16">

                <div className="text-gray-500 text-xl grid gap-1">
                  <h1 className="text-4xl font-bold text-[#FA8B02]">20+</h1>
                  <p>Years</p>
                  <p>Experience</p>
                </div>

                <div className="text-gray-500 text-xl grid gap-1">
                  <h1 className="text-4xl font-bold text-[#FA8B02]">100+</h1>
                  <p>Happy</p>
                  <p>Customer</p>
                </div>

                <div className="text-gray-500 text-xl grid gap-1">
                  <h1 className="text-4xl font-bold text-[#FA8B02]">15+</h1>
                  <p>Choice</p>
                  <p>of Services</p>
                </div>

                <div className="text-gray-500 text-xl grid gap-1">
                  <h1 className="text-4xl font-bold text-[#FA8B02]">10+</h1>
                  <p>Professional</p>
                  <p>Guides</p>
                </div>

              </div>
            </div>

          </div>

      </div>
    </div>
  )
}

export default WelcomeToOurSite 