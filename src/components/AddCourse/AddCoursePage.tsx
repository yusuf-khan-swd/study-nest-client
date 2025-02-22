"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import { getTokenFromLocalStorage } from "@/utils/local-storage";
import toast from "react-hot-toast";

const AddCoursePage = () => {
  const { user } = useAuth();
  const token = getTokenFromLocalStorage();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const proceedToAdd = confirm("Are sure you want to add this item");

    if (proceedToAdd) {
      const form = e.target;

      const title = form?.title?.value.trim();
      const duration = form?.duration?.value.trim();
      const instructor = form?.instructor?.value.trim();
      const price = form?.price?.value;
      const description = form?.description?.value.trim();

      const email = user?.email;

      const data = {
        title,
        duration,
        instructor,
        price,
        description,
        email,
      };

      const baseUrl = getBaseUrl();

      const res = await fetch(`${baseUrl}/courses`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result) {
        toast.success("Course added successfully");
      } else {
        toast.error("Course added failed!");
      }

      form.reset();
    }
  };

  return (
    <div>
      <h1 className="text-xl sm:text-3xl font-bold text-center mt-4 mb-6">
        Add a Course
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
                value="Add This Course"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;
