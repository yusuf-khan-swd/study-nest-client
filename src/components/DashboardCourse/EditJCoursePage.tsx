"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditCoursePage = ({ id }: { id: string }) => {
  const [courseInfo, setCourseInfo] = useState<null | any>({});

  const { title, duration, instructor, price, description } = courseInfo;

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

    const title = form?.title?.value.trim();
    const duration = form?.duration?.value.trim();
    const instructor = form?.instructor?.value.trim();
    const price = form?.price?.value;
    const description = form?.description?.value.trim();

    const courseData = {
      title,
      duration,
      instructor,
      price,
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
        if (result?.data) {
          toast.success("Course data updated success");
        } else {
          toast.error("Course data update failed");
          console.log("error: ", result);
        }
      });
  };
  return (
    <div>
      <h1 className="text-xl sm:text-3xl font-bold text-center mt-4 mb-6">
        Update Course
      </h1>
      <div className="card shadow-xl bg-base-200 m-2">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Course Title
                </span>
              </label>
              <input
                defaultValue={title}
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
                  <span className="text-red-500 mr-1">*</span>Duration
                </span>
              </label>
              <input
                defaultValue={duration}
                type="text"
                name="duration"
                placeholder="Duration"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Price
                </span>
              </label>
              <input
                defaultValue={price}
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Instructor
                </span>
              </label>
              <input
                defaultValue={instructor}
                type="text"
                name="instructor"
                placeholder="Instructor"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <span className="text-red-500 mr-1">*</span>Description
                </span>
              </label>
              <textarea
                defaultValue={description}
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
                value="Update This Course"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCoursePage;
