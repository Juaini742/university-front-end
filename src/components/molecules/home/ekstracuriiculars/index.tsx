import {Button, Container, Paragraph} from "../../../atoms";
import {extracurriculars} from "../../content";
import {FaAngleRight} from "react-icons/fa";

export const ExtracurricularHomeScrees = () => {
  return (
    <Container>
      <Paragraph variant="title" className="mt-10">
        Top Ranking Extracurriculars
      </Paragraph>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3  gap-4">
        {extracurriculars.map((item, index) => (
          <div
            key={index}
            className="hover:bg-yellow-50 px-2 py-2 rounded-lg hover:shadow-sm shadow-yellow-100"
          >
            <div className="overflow-hidden rounded-lg ">
              <img src={item.img} alt="" />
            </div>
            <div className="">
              <h6 className="font-bold mt-3">{item.name}</h6>
              <Button variant="navbar" className=" pr-5 text-sm">
                See extracurriculars
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="secondary"
          className="px-10 py-2 mt-5 flex items-center gap-3"
        >
          See All
          <span className="text-lg">
            <FaAngleRight />
          </span>
        </Button>
      </div>
    </Container>
  );
};
