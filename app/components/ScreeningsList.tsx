import { CinemaType } from "@/Types/Object-Interfaces";
import Icons from "./Icons";
import Ticket from "./Ticket";

interface ScreeningsListProps {
  showOnPage: string;
  filteredScreeningsArr: any[];
  cinema?: CinemaType;
}

const ScreeningsList = ({
  showOnPage,
  filteredScreeningsArr,
  cinema,
}: ScreeningsListProps) => {
  return (
    <div className="border-t border-black flex flex-col gap-8" style={{height: 500}}>
      {filteredScreeningsArr.map((date, index) => (
        <div className="border-b border-black flex flex-col gap-4" key={index}>
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

          <Ticket cinema={cinema} />
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
