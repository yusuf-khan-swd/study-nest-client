import PaymentPage from "@/components/DashboardCourse/PaymentPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment for Course - Study Nest",
  description: "A Course Posting and Enroll Platform",
};

const Payment = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  return (
    <div>
      <PaymentPage id={id} />
    </div>
  );
};

export default Payment;
