import {Paragraph} from "../../../atoms";
import {MdSchool} from "react-icons/md";
import {BsPersonWorkspace} from "react-icons/bs";
import {FaComputer} from "react-icons/fa6";

export const WhyCourseScreen = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-red-400 mt-10">
      <div className="container py-14">
        <Paragraph variant="title">Why learn with our courses?</Paragraph>
        <p className="text-sm text-center mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nobis
          est quasi, id quibusdam sunt.
        </p>
        <div className="flex sm:flex-row flex-col justify-between gap-5 mt-10 text-center text-white">
          <div className="border-r-2 flex flex-col items-center hover:bg-primary/20 trans-300 hover:rounded-lg p-3">
            <span className="text-6xl mb-3">
              <FaComputer />
            </span>
            <h3>01. Ability</h3>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus cum placeat expedita laudantium et voluptatibus.
            </p>
          </div>
          <div className="border-r-2 flex flex-col items-center hover:bg-primary/20 trans-300 hover:rounded-lg p-3">
            <span className="text-6xl mb-3">
              <MdSchool />
            </span>
            <h3>02. Learn</h3>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus cum placeat expedita laudantium et voluptatibus.
            </p>
          </div>
          <div className="border-r-2 flex flex-col items-center hover:bg-primary/20 trans-300 hover:rounded-lg p-3">
            <span className="text-6xl mb-3">
              <BsPersonWorkspace />
            </span>
            <h3>03. Work</h3>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus cum placeat expedita laudantium et voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
