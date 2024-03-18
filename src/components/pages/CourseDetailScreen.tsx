import {ContentCourseDetailScreen} from "../molecules/courseDetails/content";
import {Footer} from "../templates/Footer";
import {Navbar} from "../templates/Navbar";

export const CourseDetailScreen = () => {
  return (
    <>
      <Navbar />
      <ContentCourseDetailScreen />;
      <Footer />
    </>
  );
};
