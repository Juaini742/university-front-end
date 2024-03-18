import {Link, useParams} from "react-router-dom";
import {Button, Container} from "../../../atoms";
import {FaAngleDoubleLeft, FaPlus, FaStar} from "react-icons/fa";
import {useMutation, useQuery} from "react-query";
import {addMimberCourse, getOneCourse} from "../../../../utils";
import {CourseType} from "../../../../contents";
import Swal from "sweetalert2";

export const ContentCourseDetailScreen = () => {
  const {id} = useParams();
  const mutation = useMutation(addMimberCourse);
  const {data: course} = useQuery<CourseType>(["getOneCourse", id], () =>
    getOneCourse(id)
  );

  const handleAddCourse = async () => {
    try {
      await mutation.mutateAsync(id);
      Swal.fire("Success: User followed the course successfully");
    } catch (error) {
      Swal.fire("Error: User already follows this course");
    }
  };

  return (
    <Container className="mt-10">
      <div className="mb-4 flex justify-between">
        <Link to="/course">
          <Button variant="secondary" className="px-5 py-2">
            <FaAngleDoubleLeft />
          </Button>
        </Link>
        <Button
          variant="secondary"
          onClick={handleAddCourse}
          className="px-5 py-2 flex items-center gap-1"
        >
          <FaPlus /> Follow Course
        </Button>
      </div>
      <div className="overflow-hidden rounded-xl lg:h-[600px] flex items-center">
        <img src="../../images/computer.jpg" alt="hero" />
      </div>
      <div className="">
        <h2 className="font-prociono text-3xl my-3">{course?.title}</h2>
        <span className="text-xl flex items-center gap-1 font-bold mb-3">
          <FaStar className=" text-yellow-500" /> {course?.rate}
        </span>
        <div className="flex gap-4">
          <span className="font-bold text-sm">{course?.name}</span>
          <span className="text-gray-400 text-sm">22 Februari 2024</span>
        </div>
        <div className="text-sm flex flex-col gap-3">
          <p className="leading-7">{course?.description}</p>
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            architecto! Quia et earum excepturi nobis labore consequatur amet
            quisquam dolore praesentium quo rem, ut blanditiis facere non velit
            eaque impedit magni obcaecati inventore mollitia in soluta eum?
            Tempora, dignissimos maiores! Ratione dolores veritatis, obcaecati
            animi exercitationem maiores? Sequi, tempora. Recusandae.
          </p>
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            architecto! Quia et earum excepturi nobis labore consequatur amet
            quisquam dolore praesentium quo rem, ut blanditiis facere non velit
            eaque impedit magni obcaecati inventore mollitia in soluta eum?
            Tempora, dignissimos maiores! Ratione dolores veritatis, obcaecati
            animi exercitationem maiores? Sequi, tempora. Recusandae.
          </p>
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            repudiandae molestiae! Illo optio nisi possimus beatae illum.
            Obcaecati impedit, ullam beatae consequatur veniam ducimus minima,
            consequuntur earum, nemo sint ipsa temporibus quae? Beatae at saepe
            suscipit quae necessitatibus consequuntur nemo corrupti sunt laborum
            sed voluptates, optio id, repudiandae cupiditate nihil. Quam, ipsum
            numquam dolor eos cumque quod voluptates dolorem pariatur quisquam
            iusto unde molestiae officia in possimus sed inventore? Sint eveniet
            animi officia nam facere possimus est eum, tempore fugit. Temporibus
            numquam ratione sit, magnam eaque voluptatibus recusandae, veritatis
            ea sunt, praesentium totam. Veniam voluptates illo assumenda ut
            consequatur impedit.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-prociono text-3xl my-3">All Mimbers</h2>
        {course?.mimbers?.map((item) => (
          <ul key={item.id} className="list-disc pl-5">
            <li>{item.username}</li>
          </ul>
        ))}
      </div>
    </Container>
  );
};
