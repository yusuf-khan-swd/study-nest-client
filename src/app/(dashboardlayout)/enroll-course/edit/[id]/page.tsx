import EnrollCourseCard from "@/components/DashboardCourse/EnrollCourseCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Course - Study Nest",
  description: "A Course Posting and Enroll Platform",
};

const EditCourse = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  return (
    <div>
      <EnrollCourseCard id={id} />
    </div>
  );
};

export default EditCourse;
