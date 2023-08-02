import Icons from "./Icons";

interface ScreeningsListProps {
  showOnPage: string;
  filteredScreeningsArr: any[];
}

const ScreeningsList = ({
  showOnPage,
  filteredScreeningsArr,
}: ScreeningsListProps) => {
  return (
    <div className="border-b-4 flex flex-col gap-8">
      {filteredScreeningsArr.map((date, index) => (
        <div className="border-t border-black flex flex-col gap-4" key={index}>
          <h3 className="text-xl border-b border-gray">{date.date}</h3>
          {showOnPage === "cinema"
            ? date.films.map((film: any, index: number) => (
                <div className="bg-slate-50 p-5" key={index}>
                  <ScreeningsInstance
                    screeningData={{
                      name: film.filmName,
                      screenings: film.screenings,
                    }}
                  />
                </div>
              ))
            : date.cinema.map((cinema: any, index: number) => (
                <div className="bg-slate-50 p-5" key={index}>
                  <ScreeningsInstance
                    screeningData={{
                      name: cinema.cinema,
                      screenings: cinema.screenings,
                    }}
                  />
                </div>
              ))}
        </div>
      ))}{" "}
    </div>
  );
};

interface ScreeningsInstanceProps {
  screeningData: { name: string; screenings: any[] };
}

const ScreeningsInstance = ({ screeningData }: ScreeningsInstanceProps) => (
  <>
    <h3 className="text-md font-bold mb-3">{screeningData.name}</h3>
    <div className="flex gap-2">
      {screeningData.screenings.map((screening, index) => (
        <div className="flex justify-center align-middle gap-2" key={index}>
          <h3> {screening.time}</h3>
          <Icons screening={screening} />
          {index !== screeningData.screenings.length - 1 && <h3>/</h3>}
        </div>
      ))}
    </div>
  </>
);

export default ScreeningsList;
