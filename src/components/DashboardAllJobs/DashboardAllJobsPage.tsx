"use client";
import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import SingleDashboardJob from "./SingleDashboardJob";

const DashboardAllJobsPage = () => {
  const [jobs, setJobs] = useState<null | any>([]);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleDeleteJob = (id: string) => {
    setJobs(jobs.filter((job: any) => job._id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">All Jobs</h1>
      <div className="mb-16 flex justify-center flex-wrap gap-4">
        {jobs.map((job: any) => (
          <SingleDashboardJob
            key={job?.id}
            job={job}
            onDelete={handleDeleteJob}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardAllJobsPage;
