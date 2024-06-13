"use client";
import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import SingleDashboardCourse from "./SingleDashboardCourse";

const MyCoursePage = () => {
  const { user } = useAuth();
  const [course, setCourse] = useState<null | any>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/my-course?email=${user?.email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [user, token]);

  const handleDeleteCourse = (id: string) => {
    setCourse(course.filter((course: any) => course._id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">My Course</h1>
      {!course || course?.length <= 0 ? (
        <h2 className="text-center text-2xl my-3">No course available</h2>
      ) : (
        <div className="mb-16 flex justify-center flex-wrap gap-4">
          {course &&
            course?.length > 0 &&
            course?.map((course: any) => (
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

export default MyCoursePage;
