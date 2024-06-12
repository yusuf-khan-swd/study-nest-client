"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ViewCoursePage = ({ id }: { id: string }) => {
  const [courseInfo, setCourseInfo] = useState<null | any>({});

  const { title, company, location, type, salary, description } = courseInfo;

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
          <p>Company: {company}</p>
          <p className="font-semibold">Location: {location}</p>
          <p>Course Type: {type}</p>
          <p className="font-semibold">Salary: {salary}</p>
          <p>Description: {description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoursePage;
