import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import toast from "react-hot-toast";

const SingleDashboardCourse = ({
  course,
  onDelete,
}: {
  course: any;
  onDelete: any;
}) => {
  const { user } = useAuth();

  const { _id, email, title, duration, instructor, price, description } =
    course;
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    const proceedToDelete = confirm("Are sure you want to delete this Course ");

    if (proceedToDelete) {
      const baseUrl = getBaseUrl();

      const res = await fetch(`${baseUrl}/course/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);

      if (data) {
        toast.success("Product deleted successfully");
      } else {
        toast.error("Product deleted failed");
      }

      onDelete(_id);
    }
  };

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
          {user?.email === email ? (
            <>
              <Link href={`all-course/edit/${_id}`}>
                <button className="btn bg-green-600 text-white">Edit</button>
              </Link>
              <button
                onClick={handleDelete}
                className="btn bg-red-500 text-white"
              >
                Delete
              </button>
            </>
          ) : (
            <button className="btn btn-accent">Enroll</button>
          )}
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

export default SingleDashboardCourse;
