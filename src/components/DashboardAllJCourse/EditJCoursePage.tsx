"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditCoursePage = ({ id }: { id: string }) => {
  const [courseInfo, setCourseInfo] = useState<null | any>({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/course/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setCourseInfo(result);
        } else {
          toast.error("Course data failed to get");
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

    const courseData = {
      title,
      company,
      type,
      location,
      salary,
      description,
    };

    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/course/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Course data updated success");
        } else {
          toast.error("Course data update failed");
        }
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-4 mb-6">
        Update Course
      </h1>
      <div className="card shadow-xl bg-base-200">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Course Title
                </span>
              </label>
              <input
                defaultValue={courseInfo?.title}
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
                defaultValue={courseInfo?.company}
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
                defaultValue={courseInfo?.location}
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Course Type
                </span>
              </label>
              <input
                defaultValue={courseInfo?.type}
                type="text"
                name="type"
                placeholder="Course Type"
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
                defaultValue={courseInfo?.salary}
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
                defaultValue={courseInfo?.description}
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
                value="Update Course"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCoursePage;