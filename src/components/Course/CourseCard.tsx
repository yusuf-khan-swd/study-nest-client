import Link from "next/link";

const CourseCard = ({ course }: { course: any }) => {
  const { _id, title, duration, instructor, price, description } = course;

  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">Course Title: {title}</h2>
        <p>Duration: {duration}</p>
        <p className="font-semibold">Instructor: {instructor}</p>
        <p className="font-semibold">Price: ${price}</p>
        <p>
          Description:{" "}
          {description?.length < 250
            ? description
            : description.slice(0, 255) + "..."}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/course/view/${_id}`}>
            <button className="btn bg-indigo-500 text-white">
              See details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
