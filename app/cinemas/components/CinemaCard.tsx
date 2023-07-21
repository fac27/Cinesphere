const CinemaCard = ({cinema}) => {
    return (
    <div 
        className="relative w-5/6 bg-cover bg-center rounded-2xl" 
        style={{ backgroundImage: `url(${cinema.images.Interior2}`}}    
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl" />
        <div className="p-10 relative text-white">
            <h2 className="text-2xl font-bold">{cinema.cinemaName}</h2>
            <h3 className="mb-10">{cinema.area}</h3>
            <p>{cinema.about}</p>
        </div>
    </div>
    )
}

export default CinemaCard