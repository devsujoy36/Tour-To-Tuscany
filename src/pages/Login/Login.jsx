import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"


const Login = () => {
    const hangleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co.com/7S1bjwg/hero.png)` }} className="bg-cover bg-center font-baloo-2 ">
            <Helmet> <title>TOURS TO TUSCANY | SIGN UP</title> </Helmet>

            <div className="max-w-screen-2xl lg:mx-auto min-h-[100vh] flex justify-center items-center">

                <div className="bg-white p-10 rounded-2xl min-w-96 ">
                    <form onSubmit={hangleSubmit}>
                        <h1 className="text-4xl font-bold mb-5">Login</h1>

                        <div className="flex flex-col gap-1 text-gray-500 ">
                            <label htmlFor="" className="text-xl font-medium">Email Adress</label>
                            <input type="email" placeholder="Enter your email adress" className="px-4 py-3 rounded-md border-2" />
                            <label htmlFor="" className="text-xl font-medium">Password</label>
                            <input type="password" placeholder="Enter your Password" className="px-4 py-3 rounded-md border-2" />
                            <div className="flex mt-2 justify-end items-center gap-1">
                                <Link to={"/forgotpass"} className="hover:underline ">Fotgot your password?</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" value={"Login"} className="border-2 w-full rounded-full cursor-pointer text-white bg-orange-500 py-2 text-xl mt-3 active:scale-95 hover:bg-transparent hover:text-orange-500 transition-all" />
                        </div>
                    </form>

                    <div className="text-center">
                        <h1 className="text-gray-400">or</h1>

                        <button className="border-2 w-full flex justify-center items-center rounded-full text-gray-500 text-lg  active:scale-95 transition-all">
                            <img className="w-12 rounded-full" src="https://i.ibb.co.com/b2Dx62N/google-icon.jpg" alt="" />
                            Login with Google
                        </button>

                        <h1 className="mt-2">Don&apos;t have an account? <Link to={"/signup"} className="text-orange-400 font-medium">Sign Up</Link></h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login