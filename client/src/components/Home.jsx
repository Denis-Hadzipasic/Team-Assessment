import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useForm } from "react-hook-form";
import CandidateCard from "./CandidateCard";
import CandidateCardAdmin from "./CandidateCardAdmin";

export default function Home() {
  const { user, logout, login, candidates } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
    setTimeout(() => {
      window.location.reload();
    }, 350);
  };

  return (
    <>
      {!user ? (
        <>
          <div className="navbar bg-black text-white flex justify-center items-center h-full">
            <a className="btn btn-ghost text-xl">
              Team Assessment | Rent Group München
            </a>
          </div>

          <div className="hero flex justify-center items-center h-2/6 w-2/6 bg-cover bg-center ml-auto mr-auto">
            <img
              src="https://d2nk66epwbpimf.cloudfront.net/images/345249fd-0959-4762-bfbc-80ca4247abbb/54ad38e7-f4b4-4dc6-9e80-21e06958a192.png"
              alt="logo"
            />
          </div>

          <div className="hero flex justify-center items-center h-2/6 w-2/6 bg-cover bg-center ml-auto mr-auto text-center">
            <div className="max-w-md">
              <p>
                Nehmen Sie sich einen Moment Zeit, um Ihre Kollegen zu bewerten.
                Melden Sie sich mit den Zugangsdaten an, die Sie von Ihrer
                Personalabteilung erhalten haben.
              </p>
            </div>
          </div>
          <div className="bg-white lg:w-3/12 md:7/12 w-8/12 shadow-3xl rounded-xl ml-auto mr-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
              <div className="flex items-center text-lg mb-6 md:mb-8 ">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                <input
                  {...register("logInID", { required: true })}
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Anmelde-ID"
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                </svg>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Kennwort"
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <input
                type="submit"
                value={"Anmelden"}
                className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded cursor-pointer"
              />
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="navbar bg-black text-white flex justify-between items-center h-full px-4">
            <div></div>
            <div className="flex items-center">
              <a className="btn btn-ghost text-xl">
                Team Assessment | Rent Group München
              </a>
            </div>
            <div>
              <NavLink
                onClick={logout}
                className="bg-white text-black py-2 px-4 rounded font-bold"
              >
                Abmelden
              </NavLink>
            </div>
          </div>

          {!candidates ? (
            <p>Loading</p>
          ) : (
            <>
              {user.role === "user" ? (
                <>
                  <div className="flex justify-end">
                    <div></div>
                    <div className="hero flex justify-center items-center h-2/6 w-3/6 bg-cover bg-center ml-auto mr-auto text-center">
                      <div className="max-w-xl">
                        <p className="mt-12 ml-10">
                          Nehmen Sie sich einen Moment Zeit, um die Arbeit Ihrer
                          Kollegen zu bewerten. Seien Sie bitte ehrlich und
                          bewerten Sie sie danach, wie sie Ihrer Meinung nach zu
                          den Unternehmenszielen beitragen und wie Sie sich bei
                          der Zusammenarbeit mit diesen Menschen fühlen.
                        </p>

                        <p className="mt-6">
                          Beachten Sie, dass diese Anfrage völlig{" "}
                          <span className="font-bold">anonym</span> ist. Das
                          bedeutet, dass niemand, auch nicht die
                          Geschäftsführer, erfährt, welche Bewertungen Sie Ihren
                          Kollegen gegeben haben.
                        </p>
                        <p className="mt-10 mb-6 font-bold">
                          Skala der Bewertung
                        </p>
                      </div>
                    </div>

                    <p className="mr-3 mt-3 font-semibold">
                      Anmelde-ID: {user.logInID}
                    </p>
                  </div>

                  <div className=" ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <p>
                      <span className="font-bold">1 Stern:</span> Sehr Schlecht,
                      wird sich nicht verbessern / verändern
                    </p>
                    <p>
                      <span className="font-bold">2 bis 3 Sterne:</span>{" "}
                      Schlecht, etwas sollte sich rasch verbessern
                    </p>
                    <p>
                      <span className="font-bold">4 bis 5 Sterne:</span> Im
                      Moment nicht sehr gut, sollte sich verbessern
                    </p>
                    <p>
                      <span className="font-bold">6 bis 7 Sterne:</span>{" "}
                      Durchschnittlich, anderswo normal, mit Raum, sich zu
                      steigern
                    </p>
                    <p>
                      <span className="font-bold">8 bis 9 Sterne:</span> sehr
                      gut, überdurchschnittlich, mit etwas Luft nach oben
                    </p>
                    <p>
                      <span className="font-bold">10 Sterne:</span>{" "}
                      Herrvorrangender Wert, weit mehr als gefordert. Perfekt!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {candidates.map((candidate) => (
                      <CandidateCard
                        key={candidate._id}
                        candidate={candidate}
                        user={user}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-end">
                    <div className="hero flex justify-center items-center h-2/6 w-3/6 bg-cover bg-center ml-auto mr-auto text-center">
                      <p className="mt-10 mb-6 font-bold">
                        Skala der Bewertung
                      </p>
                    </div>

                    <p className="mr-3 mt-3 font-semibold">
                      Anmelde-ID: {user.logInID}
                    </p>
                  </div>

                  <div className=" ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <p>
                      <span className="font-bold">1 Stern:</span> Sehr Schlecht,
                      wird sich nicht verbessern / verändern
                    </p>
                    <p>
                      <span className="font-bold">2 bis 3 Sterne:</span>{" "}
                      Schlecht, etwas sollte sich rasch verbessern
                    </p>
                    <p>
                      <span className="font-bold">4 bis 5 Sterne:</span> Im
                      Moment nicht sehr gut, sollte sich verbessern
                    </p>
                    <p>
                      <span className="font-bold">6 bis 7 Sterne:</span>{" "}
                      Durchschnittlich, anderswo normal, mit Raum, sich zu
                      steigern
                    </p>
                    <p>
                      <span className="font-bold">8 bis 9 Sterne:</span> sehr
                      gut, überdurchschnittlich, mit etwas Luft nach oben
                    </p>
                    <p>
                      <span className="font-bold">10 Sterne:</span>{" "}
                      Herrvorrangender Wert, weit mehr als gefordert. Perfekt!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {candidates.map((candidate) => (
                      <CandidateCardAdmin
                        key={candidate._id}
                        candidate={candidate}
                        user={user}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
