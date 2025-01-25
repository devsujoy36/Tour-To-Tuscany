
const BikeBusRental = () => {
    const bikeBuses = [
        {
            id: "1",
            name: "Bike and rickshaw rental",
            img: "https://i.ibb.co.com/sRzDmcq/bikebus1.png",
            description: "Live the real Lucchese experience by visiting the suburbs by bike!"
        },
        {
            id: "2",
            name: "Guided tour of the countryside",
            img: "https://i.ibb.co.com/WcyMTyJ/bikebus2.png",
            description: "Book your quality vehicle quickly for an hour or all day!"
        },
        {
            id: "3",
            name: "Taxi and NCC service",
            img: "https://i.ibb.co.com/fkjkwzb/bikebus3.png",
            description: "Do you need not only a bike but also a driver? Then you have found the right place!"
        },
        {
            id: "4",
            name: "Bus Package",
            img: "https://i.ibb.co.com/h9zjy1F/bikebus4.png",
            description: "Do you need not only a bike but also a driver? Then you have found the right place!"
        },
    ]
    return (
        <div className="max-w-screen-2xl md:mx-auto mx-10 md:my-20 my-14">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
                {bikeBuses.map((bikebus) => (
                    <div key={bikebus.id} className="flex flex-col justify-center items-center">
                        <div> <img src={bikebus.img} alt="" /></div>
                        <div>
                            <h1 className="text-2xl my-5 font-bold">{bikebus.name}</h1>
                            <h1>{bikebus.description}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BikeBusRental
