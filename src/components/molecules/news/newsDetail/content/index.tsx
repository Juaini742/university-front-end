import {Link} from "react-router-dom";
import {FaAngleDoubleLeft} from "react-icons/fa";
import {Button, Container} from "../../../../atoms";

export const ContentNewDetailScreen = () => {
  return (
    <Container className="mt-10">
      <div className="mb-4 flex justify-end">
        <Link to="/news">
          <Button variant="secondary" className="px-5 py-2">
            <FaAngleDoubleLeft />
          </Button>
        </Link>
      </div>
      <div className="overflow-hidden rounded-xl lg:h-[600px] flex items-center">
        <img src="../images/hero.jpg" alt="hero" />
      </div>
      <div className="">
        <h2 className="font-prociono text-3xl my-3">
          Exciting Launch of New Technological Products at the Innovation Event
        </h2>
        <div className="flex gap-4">
          <span className="font-bold text-sm">Muhammad Abdullah</span>
          <span className="text-gray-400 text-sm">22 Februari 2024</span>
        </div>
        <div className="text-sm flex flex-col gap-3">
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
    </Container>
  );
};
