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
    <div className="dark:bg-gray-900 dark:text-gray-100 ml-auto mr-auto mt-12">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-center md:text-left">
            {candidate.lastName + " " + candidate.firstName + ":"}
          </h4>
          <div className="rating mt-3">
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
              <div
                className={`h-4 ${color}`}
                style={{ width: `${averageRating * 10}%` }}
              ></div>
            </div>
          </div>
          <p className="mt-3.5">Rating: {averageRating.toFixed(2)}</p>
          <p className="mt-3.5">
            Anzahl der Bewertungen: {numericGrades.length}
          </p>
        </div>
      </div>
    </div>
  );
}
