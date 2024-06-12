"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const JobsPage = () => {
  const [jobs, setJobs] = useState<null | any>([]);
  const [prevJobs, setPrevJobs] = useState<null | any>([]);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setPrevJobs(data);
      });
  }, []);

  // Search is case sensitive
  const handleSearch = (value: any) => {
    if (value) {
      const filteredJobs = jobs.filter((job: any) =>
        job.title.toUpperCase().includes(value.toUpperCase())
      );
      setJobs(filteredJobs);
    } else {
      setJobs(prevJobs);
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
        {jobs.map((job: any) => (
          <JobCard key={job?.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
