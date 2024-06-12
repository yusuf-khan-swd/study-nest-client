import EditCoursePage from "@/components/DashboardAllJCourse/EditJCoursePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Jobs Profile - Study Nest",
  description: "A Job Posting Platform",
};

const EditJobs = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  return (
    <div>
      <EditCoursePage id={id} />
    </div>
  );
};

export default EditJobs;
