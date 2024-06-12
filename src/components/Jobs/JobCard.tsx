import Link from "next/link";

const JobCard = ({ job }: { job: any }) => {
  const { _id, title, company, location, type, salary, description } = job;

  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">Job Title: {title}</h2>
        <p>Company: {company}</p>
        <p className="font-semibold">Location: {location}</p>
        <p>Job Type: {type}</p>
        <p className="font-semibold">Salary: {salary}</p>
        <p>
          Description:{" "}
          {description?.length < 250
            ? description
            : description.slice(0, 255) + "..."}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/jobs/view/${_id}`}>
            <button className="btn bg-indigo-500 text-white">
              See details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
