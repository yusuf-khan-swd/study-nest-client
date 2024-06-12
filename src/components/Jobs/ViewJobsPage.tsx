"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ViewJobsPage = ({ id }: { id: string }) => {
  const [jobInfo, setJobInfo] = useState<null | any>({});

  const { title, company, location, type, salary, description } = jobInfo;

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setJobInfo(result);
        } else {
          toast.error("Job data failed to get");
        }
      });
  }, [id]);

  return (
    <div className="m-2">
      <div className="card w-full bg-base-100 shadow-xl border">
        <div className="card-body">
          <h2 className="card-title">Job Title: {title}</h2>
          <p>Company: {company}</p>
          <p className="font-semibold">Location: {location}</p>
          <p>Job Type: {type}</p>
          <p className="font-semibold">Salary: {salary}</p>
          <p>Description: {description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobsPage;
