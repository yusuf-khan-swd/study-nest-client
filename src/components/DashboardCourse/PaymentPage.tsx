"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../ui/LoadingSpinner";
import CheckOutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

const PaymentPage = ({ id }: { id: string }) => {
  const [courseInfo, setCourseInfo] = useState<null | any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/courses/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        if (result) {
          setCourseInfo(result);
        } else {
          toast.error("Course data failed to get");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.message);
        console.log("Error: ", error);
      });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <Elements stripe={stripePromise}>
        <CheckOutForm course={courseInfo}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
