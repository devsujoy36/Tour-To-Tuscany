import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleGoBack =() =>{
        navigate(-1)
    }
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center flex-col">
                <h1 className="lg:text-7xl text-orange-400 font-bold mb-5">Page Not Found!</h1>
                <button onClick={handleGoBack} className="text-xl bg-orange-400 px-8 py-3 rounded-full border-2 border-transparent hover:bg-transparent hover:border-orange-400 active:scale-95 transition-all">Go Back</button>
            </div>
        </div>
    )
}

export default ErrorPage 