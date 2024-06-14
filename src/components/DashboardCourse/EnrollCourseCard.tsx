import { getBaseUrl } from "@/helpers/getBaseUrl";
import { getTokenFromLocalStorage } from "@/helpers/token";
import Link from "next/link";
import toast from "react-hot-toast";

const EnrollCourseCard = ({
  enrollData,
  onDelete,
}: {
  enrollData: any;
  onDelete: any;
}) => {
  const token = getTokenFromLocalStorage();

  const { _id, title, duration, instructor, price, description } =
    enrollData?.course;

  const handleDelete = async () => {
    const proceedToDelete = confirm("Are sure you want to delete this Course ");

    if (proceedToDelete) {
      const baseUrl = getBaseUrl();

      const res = await fetch(`${baseUrl}/enroll/${enrollData?._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      console.log(result);

      if (result?.deletedCount > 0) {
        toast.success("Product deleted successfully");
      } else {
        toast.error("Product deleted failed");
        console.log("error: ", result);
      }

      onDelete(enrollData?._id);
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
            : description?.slice(0, 255) + "..."}
        </p>
        <div className="card-actions justify-end">
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
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

export default EnrollCourseCard;
