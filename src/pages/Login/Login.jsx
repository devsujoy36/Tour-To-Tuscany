import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
    const notify = (text) => toast(text);
    const navigate = useNavigate()
    const [success, setSuccess] = useState('')
    const [loginError, setLogError] = useState('')
    const { loginUser, loginGoogle } = useContext(AuthContext);

    const hangleSubmit = (e) => {
        e.preventDefault()
        setSuccess("")
        setLogError("")
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                notify('Log In SuccessFully')
                setSuccess('Log In SuccessFully')
                navigate("/profile")
            })
            .catch(error => {
                console.log(error.message);
                notify(error.message)
                setLogError(error.message)
            })
    }

    const loginGoogleHandler = (e) => {
        setSuccess("")
        setLogError("")
        loginGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/profile")
                notify('User Created Successfully')
                setSuccess('User Created Successfully')
                e.target.reset()
            })
            .catch(error => {
                console.log(error.message);
                notify(error.message)
                setLogError(error.message)
            })
    }

    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co.com/7S1bjwg/hero.png)` }} className="bg-cover bg-center font-baloo-2 ">
            <Helmet> <title>TOURS TO TUSCANY | LOGIN</title> </Helmet>
            <ToastContainer />
            <div className="max-w-screen-2xl lg:mx-auto min-h-[100vh] flex justify-center items-center">

                <div className="bg-white p-10 rounded-2xl min-w-96 ">
                    <form onSubmit={hangleSubmit}>
                        <h1 className="text-4xl font-bold mb-5">Login</h1>
                        <div className="flex flex-col gap-1 text-gray-500 ">
                            <label htmlFor="" className="text-xl font-medium">Email Adress</label>
                            <input type="email" name="email" placeholder="Enter your email adress" className="px-4 py-3 rounded-md border-2" />
                            {loginError && <p className="text-xs text-red-500">{loginError}</p>}
                            {success && <p className="text-xs text-emerald-500">{success}</p>}
                            <label htmlFor="" className="text-xl font-medium">Password</label>
                            <input type="password" name="password" placeholder="Enter your Password" className="px-4 py-3 rounded-md border-2" />
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
                        <button onClick={loginGoogleHandler} className="border-2 w-full flex justify-center items-center rounded-full text-gray-500 text-lg  active:scale-95 transition-all">
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