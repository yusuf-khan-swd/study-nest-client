"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import { FirebaseError } from "firebase/app";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import GoogleLogin from "./GoogleLogin";

const RegisterPage = () => {
  const [passMatch, setPassMatch] = useState(true);
  const router = useRouter();

  const { createUser, user } = useAuth();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    console.log(email, password, confirm_password);

    if (password === confirm_password) {
      createUser(email, password)
        .then((data: any) => {
          if (data?.user?.email) {
            const email = data?.user?.email;
            const user = { email, name };

            const baseUrl = getBaseUrl();

            fetch(`${baseUrl}/users`, {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((result) => {
                if (result?.data) {
                  toast.success("Registration Success!");
                  localStorage.setItem("token", result?.data?.token);
                  router.push("/");
                } else {
                  toast.error("Login Failed!");
                }
              });
          }
        })
        .catch((error: FirebaseError) => {
          toast.error(error?.message);
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-[1040px] mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
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
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered"
                    name="confirm_password"
                    required
                  />
                </div>
                {!passMatch && (
                  <div className="my-2">
                    <p className="text-red-500">Passwords do not match!</p>
                  </div>
                )}
                <div className="form-control mt-6">
                  <input
                    className="btn bg-red-500 text-white"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <div className="mt-6">
                <GoogleLogin />
              </div>
              <div className="mt-6">
                <p>
                  Already have an account?{" "}
                  <Link href="/login" className="text-red-500">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
