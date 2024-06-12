import ViewJobsPage from "@/components/Jobs/ViewJobsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Jobs Profile - Career Nest",
  description: "A Job Posting Platform",
};

const ViewJobs = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  return (
    <div>
      <ViewJobsPage id={id} />
    </div>
  );
};

export default ViewJobs;
