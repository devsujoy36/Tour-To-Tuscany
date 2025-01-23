
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProviders'

const CheckYourMail = () => {
    const { user, emailVarification } = useContext(AuthContext)
    const openGmail = () => {
        emailVarification()
        window.open('https://mail.google.com', '_blank');
    };

    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co.com/7S1bjwg/hero.png)` }} className="bg-cover bg-center font-baloo-2 ">
            <Helmet> <title>TOURS TO TUSCANY | CHECK YOUR MAIL</title> </Helmet>

            <div className="max-w-screen-2xl lg:mx-auto min-h-[100vh] flex justify-center items-center">

                <div className="bg-white p-10 rounded-2xl min-w-96 ">
                    <div >
                        <div className='flex justify-center items-center mb-5'>
                            <img className='bg-orange-200 p-4 rounded-full' src="https://i.ibb.co.com/pZNL9xL/mail.png" alt="" />
                        </div>
                        <h1 className="text-4xl text-center font-bold mb-3">Check your email</h1>
                        <div className='grid my-6'>
                            <h1 className="text-center ">We sent a password reset link to</h1>
                            <h1 className="text-center font-semibold">{user?.email}</h1>
                        </div>

                        <div className="text-center">
                            <button onClick={openGmail} className="border-2 w-full rounded-full cursor-pointer text-white bg-orange-500 py-2 text-xl mt-4 active:scale-95 hover:bg-transparent hover:text-orange-500 transition-all">Open email app</button>
                        </div>
                    </div>
                    <h1 className="mt-2">Don&apos;t receive the email? <button  onClick={openGmail} className="text-orange-400 font-medium active:text-black hover:underline transition-all">Click to resend</button></h1>

                    <div className="text-center mt-3 flex justify-center  items-center gap-1">
                        <BsArrowLeft className='text-gray-400' />
                        <Link to={"/profile"} className="hover:underline text-gray-400 hover:text-black transition-all ">back to profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckYourMail