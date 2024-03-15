export default function CandidateCardAdmin({ candidate }) {

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 ml-auto mr-auto mt-12">

      <form>
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-center md:text-left">
              {candidate.lastName + " " + candidate.firstName + ":"}
            </h4>
            <div className="rating mt-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <input
                  key={value}
                  type="radio"
                  id={`assessmentGrade-${value}`}
                  value={value}
                  className="mask mask-star-2 bg-orange-400 mr-1"
                  name="assessmentGrade"
                />
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
