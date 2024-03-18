import {Testimonial2CourseScreen} from "../molecules/course/carousel";
import {CategoriesCourseScreen} from "../molecules/course/categories";
import {ItemCourseScreen} from "../molecules/course/course";
import {HeroCourseScreen} from "../molecules/course/hero";
// import {TestimonialCourseScreen} from "../molecules/course/testimonial";
import {WhyCourseScreen} from "../molecules/course/why";
import {Footer} from "../templates/Footer";
import {Navbar} from "../templates/Navbar";

export const CourseScreen = () => {
  return (
    <>
      <Navbar />
      <HeroCourseScreen />
      <WhyCourseScreen />
      <CategoriesCourseScreen />
      <ItemCourseScreen />
      <Testimonial2CourseScreen />
      <Footer />
    </>
  );
};
