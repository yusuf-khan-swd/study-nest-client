"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const CoursePage = () => {
  const [course, setCourse] = useState<null | any>([]);
  const [prevCourse, setPrevCourse] = useState<null | any>([]);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/course`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setPrevCourse(data);
      });
  }, []);

  // Search is case sensitive
  const handleSearch = (value: any) => {
    if (value) {
      const filteredJobs = course.filter((course: any) =>
        course.title.toUpperCase().includes(value.toUpperCase())
      );
      setCourse(filteredJobs);
    } else {
      setCourse(prevCourse);
    }
  };

  return (
    <div className="m-2 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">All Jobs</h1>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Search</span>
        </label>
        <input
          type="text"
          placeholder="e.g Software"
          className="input input-bordered"
          onChange={(e: any) => handleSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {course.map((course: any) => (
          <CourseCard key={course?.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
