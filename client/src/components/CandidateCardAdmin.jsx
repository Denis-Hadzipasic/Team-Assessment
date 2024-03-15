export default function CandidateCardAdmin({ candidate }) {
  const numericGrades = candidate.assessmentGrade
    .map((grade) => parseFloat(grade))
    .filter((grade) => !isNaN(grade));

  const sumOfGrades = numericGrades.reduce((acc, curr) => acc + curr, 0);
  const averageRating = sumOfGrades / numericGrades.length;

  let color = "";
  if (averageRating < 3) {
    color = "bg-red-400";
  } else if (averageRating >= 3 && averageRating < 7) {
    color = "bg-yellow-400";
  } else if (averageRating >= 7 && averageRating < 10) {
    color = "bg-blue-400";
  } else {
    color = "bg-green-400";
  }

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 ml-auto mr-auto mt-12 p-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] min-w-96">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-center md:text-left">
            {candidate.lastName + " " + candidate.firstName + ":"}
          </h4>
          <div className="rating mt-3">
            <div className="min-w-80 bg-gray-200 rounded-lg overflow-hidden">
              <div
                className={`h-4 ${color}`}
                style={{ width: `${averageRating * 10}%` }}
              ></div>
            </div>
          </div>
          <p className="mt-3.5">Rating: <span className="font-bold">{averageRating.toFixed(2)}</span></p>
          <p className="mt-3.5">
            Anzahl der Bewertungen: <span className="font-bold">{numericGrades.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
