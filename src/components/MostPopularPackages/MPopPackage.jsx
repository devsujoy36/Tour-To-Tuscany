import React from 'react'

const MPopPackage = ({ popularPackage }) => {
    const { name, img, price, features } = popularPackage;
    return (
        <div className='border rounded-3xl p-5 shadow-lg'>
            <div>
                <img className='rounded-3xl' src={img} alt="" />
            </div>
            <div>
                <h1 className='text-2xl my-2 font-bold'>{name}</h1>
                <h1 className=''><span className='text-5xl text-orange-400 font-bold'>${price}</span>/day</h1>
                
                <div className='mt-5'> 
                    <h1 className='text-xl font-semibold text-orange-400 my-2'>Features:</h1>
                    <div className='ml-5 flex flex-col gap-2'>
                        {features.map((feature, idx) => <p key={idx}>{feature}</p>)}
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <button className='border-orange-400 text-orange-400 px-8 py-2 rounded-full text-xl font-semibold border-2 hover:bg-orange-400 hover:text-white active:scale-95 transition-all '>Booked Now</button>
                </div>
            </div>
        </div>
    )
}

export default MPopPackage