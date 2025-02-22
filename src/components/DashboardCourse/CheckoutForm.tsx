import { getBaseUrl } from "@/helpers/getBaseUrl";
import useAuth from "@/hooks/useAuth";
import { getTokenFromLocalStorage } from "@/utils/local-storage";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckOutForm = ({ course }: { course: any }) => {
  const { user } = useAuth();
  const router = useRouter();
  const token = getTokenFromLocalStorage();

  const [clientSecret, setClientSecret] = useState("");
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [cardError, setCardError] = useState<null | any>("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { _id, title, price } = course;

  const baseUrl = getBaseUrl();

  useEffect(() => {
    fetch(`${baseUrl}/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ productPrice: price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price, token, baseUrl]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[payment error]", error);
      setCardError(error?.message);
    } else {
    }

    setIsDataLoading(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      });

    setSuccess("");
    if (confirmError) {
      setCardError(confirmError.message);
      setIsDataLoading(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        price: price,
        transactionId: paymentIntent.id,
        email: user?.email,
        course: _id,
      };

      fetch(`${baseUrl}/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("Payment Done");
            setSuccess("Congrats!! Your payment completed.");
            setTransactionId(paymentIntent.id);
            setIsDataLoading(false);
            setCardError(false);
            router.push("/enroll-course");
          } else {
            toast.error("Payment Failed");
          }
        })
        .catch((error) => {
          console.log("payment error: ", error);
          setCardError(error.message);
          setIsDataLoading(false);
        });
    }
  };

  return (
    <div className="my-16">
      <h2 className="text-center my-8 mx-1 text-3xl font-bold">
        Payment for <span className="text-info">{title}</span> which price{" "}
        <span className="text-primary">${price}</span>{" "}
      </h2>
      <div className="m-2">
        <div className="card max-w-md bg-white mx-auto border shadow-md">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <button
                className="btn btn-sm btn-primary text-white mt-3"
                type="submit"
                disabled={!stripe || !clientSecret || isDataLoading}
              >
                Pay
              </button>
            </form>
            <p className="text-red-500 mt-2"> {cardError} </p>
            {success && (
              <div>
                <p className="text-green-500">{success}</p>
                <p className="font-semibold">
                  Your Transaction Id: {transactionId}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
