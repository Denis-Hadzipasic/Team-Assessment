import { useForm } from "react-hook-form";
import axiosClient from "../utils/axiosClient";
import { useState } from "react";

export default function CandidateCard({ candidate, user }) {
  const [voteBtn, setVoteBtn] = useState("Bewerten");
  const [voteBtnStatus, setVoteBtnStatus] = useState(true);
  const [voteBtnClass, setVoteBtnClass] = useState(
    "bg-gray-400 border-2 border-gray-400 rounded-lg text-gray-600 px-4 py-1.5 mt-4 text-base cursor-not-allowed transition"
  );
  const [selectedGrade, setSelectedGrade] = useState({
    "--tw-bg-opacity": "0.2",
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axiosClient
      .put(`/candidate/update/${candidate._id}`, data, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkIfVoted = candidate.evaluator.includes(user._id);

  const handleVote = () => {
    setVoteBtn("Bestätigen");
    setVoteBtnStatus(false);
    setVoteBtnClass(
      "bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-4 py-1.5 mt-4 text-base hover:border-[#fff] cursor-pointer transition"
    );
    setSelectedGrade();
  };

  return (
    <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100 ml-auto mr-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="p-12 md:p-24">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-center md:text-left">
              {candidate.lastName + " " + candidate.firstName + ":"}
            </h4>
            <div className="rating mt-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <input
                  key={value}
                  onClick={handleVote}
                  type="radio"
                  id={`assessmentGrade-${value}`}
                  {...register("assessmentGrade")}
                  value={value}
                  className="mask mask-star-2 bg-orange-400 mr-1"
                  name="assessmentGrade"
                  style={selectedGrade}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          {!checkIfVoted && (
            <input
              type="submit"
              value={voteBtn}
              className={voteBtnClass}
              disabled={voteBtnStatus}
            />
          )}
          {!checkIfVoted && (
            <input
              type="submit"
              value={"Keine Meinung"}
              className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-4 py-1.5 mt-4 text-base hover:border-[#fff] cursor-pointer transition ml-3"
            />
          )}
          {checkIfVoted && (
            <input
              type="submit"
              value={"Schon bewertet"}
              className="bg-gray-400 border-2 border-gray-400 rounded-lg text-gray-600 px-4 py-1.5 mt-4 text-base cursor-not-allowed transition"
              disabled={true}
            />
          )}
        </div>
      </form>
    </div>
  );
}
