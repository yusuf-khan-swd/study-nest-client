"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "@/utils/token";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../ui/LoadingSpinner";

const DashboardPage = () => {
  const { logout, user } = useAuth();
  const [userInfo, setUserInfo] = useState<null | any>({});
  const [loading, setLoading] = useState(true);
  const token = getTokenFromLocalStorage();

  useEffect(() => {
    const baseUrl = getBaseUrl();
    fetch(`${baseUrl}/users/profile?email=${user?.email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        if (result?.data) {
          setUserInfo(result?.data);
        } else {
          toast.error("User data failed to get");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.message);
        console.log("Error: ", error);
      });
  }, [user, token]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleLogout = async () => {
    await logout();
    toast.success("Logout success");
    removeTokenFromLocalStorage();
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-xl md:text-3xl font-semibold">
          Profile Information
        </h1>
        <Link
          href={`/profile/edit/${userInfo?._id}`}
          className="btn btn-info btn-sm md:btn-md"
        >
          Edit Profile
        </Link>
      </div>
      <div className="hero bg-base-200 p-2 sm:p-8">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body p-6 sm:p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                value={userInfo?.name}
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <input
                type="role"
                placeholder="role"
                className="input input-bordered"
                value={userInfo?.role}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleLogout}
                className="btn btn-error text-white"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
