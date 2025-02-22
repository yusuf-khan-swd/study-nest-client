import EditUserProfilePage from "@/components/Profile/EditUserProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update User Profile - StudyNest",
  description: "Learning Platform for students",
};

const EditUserProfile = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  return (
    <div>
      <EditUserProfilePage id={id} />
    </div>
  );
};

export default EditUserProfile;
