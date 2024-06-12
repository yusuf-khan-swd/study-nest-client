"use client";
import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import SingleDashboardCourse from "./SingleDashboardCourse";

const DashboardMyCoursePage = () => {
  const [course, setCourse] = useState<null | any>([]);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/course`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleDeleteCourse = (id: string) => {
    setCourse(course.filter((course: any) => course._id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">All Course</h1>
      {!course || course?.length <= 0 ? (
        <h2 className="text-center text-2xl my-3">No course available</h2>
      ) : (
        <div className="mb-16 flex justify-center flex-wrap gap-4">
          {course.map((course: any) => (
            <SingleDashboardCourse
              key={course?.id}
              course={course}
              onDelete={handleDeleteCourse}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardMyCoursePage;
