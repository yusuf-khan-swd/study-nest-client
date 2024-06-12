"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";
import Banner from "../ui/Banner";
import Features from "../ui/Features";
import Statics from "../ui/Statics";

const HomePage = () => {
  const [jobs, setJobs] = useState<null | any>([]);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/course`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <Banner />
      <div className="mt-12 container mx-auto">
        <div className="m-2">
          <h1 className="text-3xl font-bold mb-3 text-center">Recent Jobs</h1>
          <div className="grid grid-cols-1 gap-4">
            {jobs.slice(0, 2).map((job: any) => (
              <CourseCard key={job?.id} course={job} />
            ))}
          </div>
          <Features />
          <Statics />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
