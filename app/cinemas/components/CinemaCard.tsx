import theLexiInteriorImage from "../../../public/assets/cinema-images/the-lexi-interior-2.jpeg"

const CinemaCard = () => {
    return (
    <div 
        className="relative w-5/6 bg-cover bg-center rounded-2xl" 
        style={{ backgroundImage: `url(${theLexiInteriorImage.src})` }}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl" />
        <div className="p-10 relative text-white">
            <h2 className="text-2xl font-bold">THE LEXI CINEMA</h2>
            <h3 className="mb-10">Kensal Rise</h3>
            <p>
                The Lexi is London’s only social enterprise cinema, a volunteer-run picture palace with strong links not just to our local community, but to a unique charity project thousands of miles away in South Africa.
            </p>
        </div>
    </div>
    )
}

export default CinemaCard