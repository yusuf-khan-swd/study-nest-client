"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditJobsPage = ({ id }: { id: string }) => {
  const [jobInfo, setJobInfo] = useState<null | any>({});

  const token = localStorage.getItem("token");

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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;

    const title = form?.title?.value;
    const company = form?.company?.value;
    const type = form?.type?.value;
    const location = form?.location?.value;
    const salary = form?.salary?.value;
    const description = form?.description?.value;

    const jobData = {
      title,
      company,
      type,
      location,
      salary,
      description,
    };

    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Job data updated success");
        } else {
          toast.error("Job data update failed");
        }
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-4 mb-6">Update Job</h1>
      <div className="card shadow-xl bg-base-200">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Job Title
                </span>
              </label>
              <input
                defaultValue={jobInfo?.title}
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Company Name
                </span>
              </label>
              <input
                defaultValue={jobInfo?.company}
                type="text"
                name="company"
                placeholder="Company Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Location
                </span>
              </label>
              <input
                defaultValue={jobInfo?.location}
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Job Type
                </span>
              </label>
              <input
                defaultValue={jobInfo?.type}
                type="text"
                name="type"
                placeholder="Job Type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Salary
                </span>
              </label>
              <input
                defaultValue={jobInfo?.salary}
                type="text"
                name="salary"
                placeholder="Salary"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Description
                </span>
              </label>
              <textarea
                defaultValue={jobInfo?.description}
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered p-2"
                rows={6}
                required
              ></textarea>
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full btn-primary text-white p-4"
                type="submit"
                value="Update Job"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditJobsPage;
