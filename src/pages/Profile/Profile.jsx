import { useContext, useState } from "react"
import { AuthContext } from "../../Providers/AuthProviders"


const Profile = () => {
  const { user } = useContext(AuthContext)
  const [profileError, setProfileError] = useState()
  const [success, setSuccess] = useState()

  const hangleSubmit = (e) => {
    e.preventDefault()

  }


  return (
    <div className='min-h-[100vh] pt-32 lg:text-2xl font-baloo-2'>
      <div className="max-w-screen-2xl md:mx-auto mx-10">
        <h1 className="text-5xl  font-medium mb-5">Profile</h1>

        <div className="flex items-start gap-10 flex-col md:flex-row">


          <div className="grid gap-8 lg:w-2/3">

            <figure className="border shadow-xl p-5 h-30 flex items-center gap-3  rounded-full ">
              <img className="w-28 h-28 border rounded-full" src={user?.photoURL} alt="" />
              <h1 className="font-medium text-3xl">{user?.displayName}</h1>
            </figure>

            <div className="md:mx-10 grid gap-3">
              <h1><span className="font-medium">Email: </span>{user?.email}</h1>
              <h1 className="flex items-center gap-1">
                <span className="font-medium">Varification Status:</span>
                {user?.emailVerified
                  ?
                  <span className="text-emerald-500 font-medium">Varified</span>
                  :
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-red-500 font-medium">Not Varified</span>
                    <button className="bg-red-500 font-medium md:px-4 px-2 md:py-1 md:hover:px-8 border-2 border-transparent hover:border-red-600 hover:text-red-500 active:scale-95 hover:bg-transparent transition-all rounded-full md:text-xl text-white ">Varify now</button>
                  </div>
                }
              </h1>
              <h1><span className="font-medium">Creation Time: </span>{user?.metadata.creationTime}</h1>
              <h1><span className="font-medium">Last Sign in Time: </span>{user?.metadata.lastSignInTime}</h1>

            </div>

          </div>

          <div className="lg:w-1/3 border p-10 rounded-xl">
            <form onSubmit={hangleSubmit}>
              <h1 className="text-4xl font-bold mb-5">Update Profile</h1>

              <div className="flex flex-col gap-1 text-gray-500 text-lg">
                <label htmlFor="" className="text-xl font-medium">Name and Surname</label>
                <input type="text" name="name" placeholder="Enter your name and surname" className="px-4 py-3 rounded-md border-2" required />
                <label htmlFor="" className="text-xl font-medium">Email Adress</label>
                <input type="email" name="email" placeholder="Enter your email adress" className="px-4 py-3 rounded-md border-2" required />
                {profileError && <p className="text-xs text-red-500">{profileError}</p>}
                {success && <p className="text-xs text-emerald-500">{success}</p>}
                <label htmlFor="" className="text-xl font-medium">Password</label>
                <input type="password" name="password" placeholder="Enter your Password" className="px-4 py-3 rounded-md border-2" required />
                <div className="flex mt-2 justify-start items-center gap-1">
                  <input id="checkbox" type="checkbox" required />
                  <label htmlFor="checkbox">I agree with <a href="" className="text-orange-400">Terms</a>  and <a href="" className="text-orange-400">Privacy</a></label>
                </div>
              </div>
              <div className="text-center">

                <input type="submit" value={"Sign Up"} className="border-2 w-full rounded-full cursor-pointer text-white bg-orange-500 py-2 text-xl mt-3 active:scale-95 hover:bg-transparent hover:text-orange-500 transition-all" />
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Profile