"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const AddJobsPage = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const proceedToAdd = confirm("Are sure you want to add this item");

    if (proceedToAdd) {
      const form = e.target;

      const title = form?.title?.value;
      const company = form?.company?.value;
      const type = form?.type?.value;
      const location = form?.location?.value;
      const salary = form?.salary?.value;
      const description = form?.description?.value;

      const email = user?.email;

      const data = {
        title,
        company,
        type,
        location,
        salary,
        description,
        email,
      };

      const baseUrl = getBaseUrl();

      const res = await fetch(`${baseUrl}/jobs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result) {
        toast.success("Jobs added successfully");
      } else {
        toast.error("Jobs added failed!");
      }

      form.reset();
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-4 mb-6">Add a Job</h1>
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
                value="Add This Job"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobsPage;
