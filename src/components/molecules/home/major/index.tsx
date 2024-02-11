import {Container, Paragraph} from "../../../atoms";
import {FaCircleCheck} from "react-icons/fa6";
import {majors} from "../../content";

export const MajorHomeScreen = () => {
  return (
    <Container className="mt-10">
      <Paragraph variant="title">Our Majors</Paragraph>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-4">
        <div className="w-[400px] lg:w-[500px] overflow-hidden rounded-lg flex items-end">
          <img src="../images/school3.jpg" alt="major" className="rounded-lg" />
        </div>
        <div className="md:w-[600px]">
          <h3 className="font-bold">
            Join to our university with your prefessional major
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            atque et quaerat quidem delectus necessitatibus
          </p>
          <div className="mt-5">
            {majors.map((item, index) => (
              <div key={index} className="flex items-start gap-2 mb-2">
                <span className="text-primary text-lg">
                  <FaCircleCheck />
                </span>{" "}
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
