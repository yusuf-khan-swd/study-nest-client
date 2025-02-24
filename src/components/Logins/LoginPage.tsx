"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import { setTokenToLocalStorage } from "@/utils/local-storage";
import { FirebaseError } from "firebase/app";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import GoogleLogin from "./GoogleLogin";

const LoginPage = () => {
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((data: any) => {
        if (data?.user?.email) {
          const email = data?.user?.email;
          const user = { email };

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
              console.log(result);
              if (result?.data) {
                toast.success("Login Success");
                setTokenToLocalStorage(result?.data?.accessToken);
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
  };

  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-[1040px] mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  defaultValue="user@studynest.com"
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
                  defaultValue="123456"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-red-500 text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div className="mt-6">
              <p>
                New here?{" "}
                <Link href="/register" className="text-red-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
