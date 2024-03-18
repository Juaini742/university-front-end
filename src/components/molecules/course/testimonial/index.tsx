import {Container, Paragraph} from "../../../atoms";
import {testimonial} from "../../content";
import {FaStar} from "react-icons/fa";

export const TestimonialCourseScreen = () => {
  return (
    <Container className="mt-10">
      <Paragraph variant="title">Words</Paragraph>
      <div className="mt-10 flex gap-5 overflow-hidden">
        {testimonial.map((item, index) => (
          <div key={index} className="p-5">
            <div className="flex gap-3 items-end mb-5">
              <div className="w-10 overflow-hidden">
                <img src={item.img} alt={item.name} className="rounded-full" />
              </div>
              <h6 className="text-sm">{item.name}</h6>
            </div>

            <p className="text-[11px] text-gray-500">{item.desk}</p>
            <div className="flex gap-2 text-primary mt-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
