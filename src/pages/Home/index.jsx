import landingImage from "../../assets/upcoming.webp";
import MainButton from "../../components/buttons/MainButton";
function Home() {
  return (
    <>
      <div className="landing relative">
        <img
          src={landingImage}
          alt="lacasa de papel seriece"
          className="w-full md:h-auto max-h-[calc(100vh-80px)]"
        />
        <div className="description w-full sm:w-3/5 md:w-3/5 lg:w-2/6 absolute top-1/2 left-0 md:left-12 px-3 md:px-8 -translate-y-1/2 md:translate-x-0 flex flex-col items-center bg-red-600/50 rounded-xl py-4 md:py-12">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold mb-8">
            Avatar2
          </h2>
          <p className="text-sm md:text-base mb-12 text-white">
            Neytiri, and their children — as their land becomes torn apart . Per
            an official synopsis, the Sully family endures danger, battles to
            the death, and tragedy throughout the film
          </p>
          <div className="buttons flex h-12 justify-center items-center gap-8">
            <MainButton title="Watch Now" />
            <button className="custom-btn inline-block">Watch Later</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
