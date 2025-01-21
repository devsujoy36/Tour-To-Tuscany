import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProviders";
const Signup = () => {
    const { user, createUser } = useContext(AuthContext)
    console.log("User from signup",user);
    const navigate = useNavigate()
    const hangleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("name email pass", name, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate("/login")
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co.com/7S1bjwg/hero.png)` }} className="bg-cover bg-center font-baloo-2 ">
            <Helmet> <title>TOURS TO TUSCANY | SIGN UP</title> </Helmet>

            <div className="max-w-screen-2xl lg:mx-auto min-h-[100vh] flex justify-center items-center">

                <div className="bg-white p-10 rounded-2xl min-w-96 ">
                    <form onSubmit={hangleSubmit}>
                        <h1 className="text-4xl font-bold mb-5">Create Account</h1>

                        <div className="flex flex-col gap-1 text-gray-500 text-lg">
                            <label htmlFor="" className="text-xl font-medium">Name and Surname</label>
                            <input type="text" name="name" placeholder="Enter your name and surname" className="px-4 py-3 rounded-md border-2" required />
                            <label htmlFor="" className="text-xl font-medium">Email Adress</label>
                            <input type="email" name="email" placeholder="Enter your email adress" className="px-4 py-3 rounded-md border-2" required />
                            <label htmlFor="" className="text-xl font-medium">Password</label>
                            <input type="password" name="password" placeholder="Enter your Password" className="px-4 py-3 rounded-md border-2" required />
                            <div className="flex mt-2 justify-start items-center gap-1">
                                <input type="checkbox" required />
                                <label htmlFor="">I agree with <a href="" className="text-orange-400">Terms</a>  and <a href="" className="text-orange-400">Privacy</a></label>
                            </div>
                        </div>
                        <div className="text-center">

                            <input type="submit" value={"Sign Up"} className="border-2 w-full rounded-full cursor-pointer text-white bg-orange-500 py-2 text-xl mt-3 active:scale-95 hover:bg-transparent hover:text-orange-500 transition-all" />
                        </div>
                    </form>

                    <div className="text-center">
                        <h1 className="text-gray-400">or</h1>

                        <button className="border-2 w-full flex justify-center items-center rounded-full text-gray-500 text-lg  active:scale-95 transition-all">
                            <img className="w-12 rounded-full" src="https://i.ibb.co.com/b2Dx62N/google-icon.jpg" alt="" />
                            Sign Up with Google
                        </button>

                        <h1 className="mt-2">Already have an account? <Link to={"/login"} className="text-orange-400 font-medium">Log in</Link></h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup