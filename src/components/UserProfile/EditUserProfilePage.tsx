"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditUserProfilePage = ({ id }: { id: string }) => {
  const [userInfo, setUserInfo] = useState<null | any>({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/users/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.data) {
          setUserInfo(result?.data);
        } else {
          toast.error("User data failed to get");
        }
      });
  }, [id, token]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = userInfo?.email;
    const number = form.number.value;

    const user = { email, name, number };
    console.log(user);

    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/users/profile/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.data) {
          toast.success("User data updated success");
        } else {
          toast.error("User data update failed");
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-4">
        Update Profile Information
      </h1>
      <div className="hero bg-base-200 p-8">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                defaultValue={userInfo?.name}
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={userInfo?.email}
                name="email"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="text"
                placeholder="Mobile"
                className="input input-bordered"
                defaultValue={userInfo?.number}
                name="number"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent text-white">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfilePage;
