import {Button, Container} from "../../../atoms";
import {FaLightbulb} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {BsPersonWorkspace} from "react-icons/bs";

export const BannerCourseScreen = () => {
  return (
    <Container className="mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-4">
        <div className="w-[300px] lg:w-[400px] overflow-hidden rounded-lg flex items-end">
          <img src="../images/profile.jpg" alt="major" className="rounded-lg" />
        </div>
        <div className="md:w-[600px]">
          <div className="mb-3">
            <h3 className=" text-3xl text-primary font-prociono">
              The number one factor in
            </h3>
            <h3 className="font-prociono text-xl">
              relevance drives out resistance.
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex  items-center gap-2">
              <span className="text-primary text-xl">
                <FaLightbulb />
              </span>
              <span>Public Speaking</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">
                <MdWork />
              </span>
              <span>Work Relation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary text-xl">
                <BsPersonWorkspace />
              </span>
              <span>Smart</span>
            </div>
          </div>
          <div className="my-2">
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero
              itaque necessitatibus exercitationem quasi cupiditate iusto
              debitis, amet eius voluptas!
            </p>
          </div>
          <Button variant="secondary" className="px-5 py-2 text-sm">
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
};
