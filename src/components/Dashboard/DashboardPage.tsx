"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const DashboardPage = () => {
  const { logout, user } = useAuth();

  const [userInfo, setUserInfo] = useState<null | any>({});

  useEffect(() => {
    const baseUrl = getBaseUrl();
    fetch(`${baseUrl}/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        if (result?.data) {
          setUserInfo(result?.data);
        } else {
          toast.error("User data failed to get");
        }
      });
  }, [user]);

  const handleLogout = async () => {
    await logout();
    toast.success("Logout success");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-semibold">Profile Information</h1>
        <Link href={`/profile/edit/${userInfo?._id}`} className="btn btn-info">
          Edit Profile
        </Link>
      </div>
      <div className="hero bg-base-200 p-8">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
