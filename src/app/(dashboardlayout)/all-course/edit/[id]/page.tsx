import EditCoursePage from "@/components/DashboardAllJCourse/EditJCoursePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Course - Study Nest",
  description: "A Course Posting and Enroll Platform",
};

const EditCourse = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  return (
    <div>
      <EditCoursePage id={id} />
    </div>
  );
};

export default EditCourse;
