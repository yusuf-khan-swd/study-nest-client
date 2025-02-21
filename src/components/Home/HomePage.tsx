"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CourseCard from "../Course/CourseCard";
import Banner from "../ui/Banner";
import Features from "../ui/Features";
import LoadingSpinner from "../ui/LoadingSpinner";
import Statics from "../ui/Statics";

const HomePage = () => {
  const [course, setCourse] = useState<null | any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/course`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
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

  console.log("course result", course);

  return (
    <div>
      <Banner />
      <div className="mt-12 container mx-auto">
        <div className="m-2">
          <h1 className="text-3xl font-bold mb-3 text-center">Recent Course</h1>
          {!Array.isArray(course) || !course || course?.length <= 0 ? (
            <h2 className="text-center text-2xl my-3">No course available</h2>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {course?.slice(0, 2).map((course: any) => (
                <CourseCard key={course?.id} course={course} />
              ))}
            </div>
          )}
          <Features />
          <Statics />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
