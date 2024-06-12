import ViewCoursePage from "@/components/Course/ViewCoursePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Details - Study Nest",
  description: "A Course Posting and Enroll Platform",
};

const ViewCourse = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  return (
    <div>
      <ViewCoursePage id={id} />
    </div>
  );
};

export default ViewCourse;
