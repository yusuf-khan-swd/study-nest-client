import EditJobsPage from "@/components/DashboardAllJobs/EditJobsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Jobs Profile - Career Nest",
  description: "A Job Posting Platform",
};

const EditJobs = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  return (
    <div>
      <EditJobsPage id={id} />
    </div>
  );
};

export default EditJobs;
