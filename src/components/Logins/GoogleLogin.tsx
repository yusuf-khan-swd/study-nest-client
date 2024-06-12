import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const router = useRouter();

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((data: any) => {
        if (data?.user?.email) {
          toast.success("Login success");
          const email = data?.user?.email;
          const name = data?.user?.displayName;
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
                toast.success("Google Login Success");
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
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
