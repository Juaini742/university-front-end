import {Link} from "react-router-dom";
import {Button, Container, Paragraph} from "../../../atoms";
import {useQuery} from "react-query";
import {getAllCourse} from "../../../../utils";
import {CourseType} from "../../../../contents";
import {FaStar} from "react-icons/fa";

export const ItemCourseScreen = () => {
  const {data: courses} = useQuery<CourseType>("getAllCourse", getAllCourse);

  return (
    <Container className="mt-10">
      <Paragraph variant="title">Our Most Courses</Paragraph>
      <p className="text-sm mt-5 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
        praesentium?
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.isArray(courses) &&
          courses?.map((item: CourseType) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden hover:bg-primary group trans-300"
            >
              <div className="h-36 overflow-hidden">
                <img src="../images/computer.jpg" alt={item.title} />
              </div>
              <div className="mt-4 p-3">
                <div className="flex justify-between ">
                  <span className="text-[10px] flex items-center gap-1 font-bold">
                    <FaStar className=" text-yellow-600" /> {item.rate}
                  </span>
                  <span className="text-[10px] font-bold">
                    {item.mimber} Members
                  </span>
                </div>
                <h3 className="font-bold font-prociono text-sm">
                  {item.title}
                </h3>
                <div className="mt-5 border-t-2 flex justify-between pt-5">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-3">
                      <div className="w-10 overflow-hidden rounded-full">
                        <img src="../images/profile.jpg" alt={item.name} />
                      </div>
                      <div>
                        <h6 className="font-bold text-[11px]">{item.name}</h6>
                        <span className="text-[11px]">
                          Full-Stack Developer
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      className="text-[10px] px-5 group-hover:bg-yellow-600"
                    >
                      <Link to={`/detail/course/${item.id}`}>View</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};
