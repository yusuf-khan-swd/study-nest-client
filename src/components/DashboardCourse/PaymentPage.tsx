"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CheckOutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

const PaymentPage = ({ id }: { id: string }) => {
  const [courseInfo, setCourseInfo] = useState<null | any>({});

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

  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <Elements stripe={stripePromise}>
        <CheckOutForm course={courseInfo}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
