import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// TODO: This file can be remove if not use

const EnrollCourseCard = ({ id }: { id: string }) => {
  const [courseInfo, setCourseInfo] = useState<null | any>({});

  const { user } = useAuth();

  const { _id, email, title, duration, instructor, price, description } =
    courseInfo;

  const token = localStorage.getItem("token");

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/course/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setCourseInfo(result);
        } else {
          toast.error("Course data failed to get");
        }
      });
  }, [id]);

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
          <Link href={`enroll-course/edit/${_id}`}>
            <button className="btn btn-accent">Enroll</button>
          </Link>

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
