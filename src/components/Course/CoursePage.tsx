"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../ui/LoadingSpinner";
import CourseCard from "./CourseCard";

const CoursePage = () => {
  const [course, setCourse] = useState<null | any>([]);
  const [prevCourse, setPrevCourse] = useState<null | any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/course`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setPrevCourse(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.message);
        console.log("Error: ", error);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  // Search is case sensitive
  const handleSearch = (value: any) => {
    if (value) {
      const filteredCourse = course.filter((course: any) =>
        course.title.toUpperCase().includes(value.toUpperCase())
      );
      setCourse(filteredCourse);
    } else {
      setCourse(prevCourse);
    }
  };

  return (
    <div className="m-2 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">All Course</h1>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Search</span>
        </label>
        <input
          type="text"
          placeholder="e.g Python"
          className="input input-bordered"
          onChange={(e: any) => handleSearch(e.target.value)}
        />
      </div>
      {!Array.isArray(course) || !course || course?.length <= 0 ? (
        <h2 className="text-center text-2xl my-3">No course available</h2>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {course.map((course: any) => (
            <CourseCard key={course?.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursePage;
