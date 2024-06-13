"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ViewCoursePage = ({ id }: { id: string }) => {
  const [courseInfo, setCourseInfo] = useState<null | any>({});

  const { title, duration, instructor, price, description } = courseInfo;

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
    <div className="m-2">
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
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoursePage;
