

const Footer = () => {
  return (
    <div className="bg-[#333333] text-white ">
      <div className="max-w-screen-2xl lg:mx-auto mx-10 pt-10 ">
        <div>
          <img className="my-b" src="https://i.ibb.co.com/dQ3twTX/navlogo.png" alt="" />
          <div id="footer-links" className="grid grid-cols-1 lg:grid-cols-5 gap-10 py-5 border-gray-500 border-t border-b">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold mb-2">Services</h1>
              <a href="#">Bike and Rickshaw rental</a>
              <a href="#">Guided Tours of Lucca</a>
              <a href="#">Guided Bike Tour of Lucca</a>
              <a href="#">Trip In The Tuscan Hills</a>
              <a href="#">Transportation With Luxury Cars</a>
              <a href="#">Transportation With Luxury Cars</a>
              <a href="#">Wine Tours By Bus With Guide</a>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold mb-2">Home</h1>
              <a href="/">Home</a>
              <a href="/aboutus">About Us</a>
              <a href="/tourpackages">Tour Package</a>
              <a href="/contactus">Contact Us</a>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold mb-2">Help</h1>
              <a href="#">Term of Use</a>
              <a href="#">Provicy Policy</a>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <h1 className="text-xl font-semibold mb-2">Contacts</h1>
              <div className="flex justify-center items-center gap-2">
                <img className="w-6" src="https://i.ibb.co.com/MVJsfLG/location.png" alt="" />
                <h1>Ganginar Par Rd, Mymensingh </h1>
              </div>
              <div className="flex justify-center items-center gap-1">
                <img className="w-6" src="https://i.ibb.co.com/R36Q5fS/phone.png" alt="" />
                <h1>+880 13034-36299 </h1>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img className="w-6" src="https://i.ibb.co.com/GvPJBtD/mail.png" alt="" />
                <h1>sdsujoy920243@gmail.com </h1>
              </div>
            </div>
            <div className="f">
              <h1 className="text-xl font-semibold mb-2 ml-3">Social Media</h1>
              <div className="flex items-center gap-2">
                <a href="#"><img className="w-11" src="https://i.ibb.co.com/Y2tJKKf/twiter.png" alt="" /></a>
                <a href="https://www.facebook.com/sujoydas36"><img className="w-10" src="https://i.ibb.co.com/FXY8Vhg/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/sdsujoy920243/"><img className="w-11" src="https://i.ibb.co.com/Tkv2nq7/insta.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="  py-5">
          <h1 className="text-center">Copyright © 2022.  All rights reserved. </h1>
        </div>
      </div>
    </div>
  )
}
export default Footer
