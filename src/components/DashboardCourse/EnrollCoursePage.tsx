"use client";
import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import { getTokenFromLocalStorage } from "@/utils/local-storage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../ui/LoadingSpinner";
import EnrollCourseCard from "./EnrollCourseCard";

const EnrollCoursePage = () => {
  const { user } = useAuth();
  const [course, setCourse] = useState<null | any>([]);
  const token = getTokenFromLocalStorage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/enrolls`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourse(data?.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.message);
        console.log("Error: ", error);
      });
  }, [user, token]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleDeleteCourse = (id: string) => {
    setCourse(course.filter((course: any) => course._id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">Enroll Course</h1>
      {!course || course?.length <= 0 ? (
        <h2 className="text-center text-2xl my-3">No course available</h2>
      ) : (
        <div className="mb-16 flex justify-center flex-wrap gap-4">
          {course &&
            course?.length > 0 &&
            course?.map((course: any) => (
              <EnrollCourseCard
                key={course?.id}
                enrollData={course}
                onDelete={handleDeleteCourse}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default EnrollCoursePage;
