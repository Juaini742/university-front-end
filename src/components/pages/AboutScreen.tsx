import {Container, Paragraph} from "../atoms";
import {Footer} from "../templates/Footer";
import {Navbar} from "../templates/Navbar";

export const AboutScreen = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-10">
        <div className="my-10">
          <Paragraph variant="title">Welcome to our University</Paragraph>
        </div>
        <div className="overflow-hidden rounded-xl lg:h-[600px] flex items-center">
          <img src="../images/activity3.jpg" alt="hero" />
        </div>
        <div className="">
          <h2 className="font-prociono text-3xl my-3">
            Ukom University Indonesia
          </h2>
          <div className="flex gap-4">
            <span className="font-bold text-sm">Dr. Muhammad Abdullah</span>
          </div>
          <div className="text-sm flex flex-col gap-3">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              architecto! Quia et earum excepturi nobis labore consequatur amet
              quisquam dolore praesentium quo rem, ut blanditiis facere non
              velit eaque impedit magni obcaecati inventore mollitia in soluta
              eum? Tempora, dignissimos maiores! Ratione dolores veritatis,
              obcaecati animi exercitationem maiores? Sequi, tempora.
              Recusandae.
            </p>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              architecto! Quia et earum excepturi nobis labore consequatur amet
              quisquam dolore praesentium quo rem, ut blanditiis facere non
              velit eaque impedit magni obcaecati inventore mollitia in soluta
              eum? Tempora, dignissimos maiores! Ratione dolores veritatis,
              obcaecati animi exercitationem maiores? Sequi, tempora.
              Recusandae.
            </p>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              architecto! Quia et earum excepturi nobis labore consequatur amet
              quisquam dolore praesentium quo rem, ut blanditiis facere non
              velit eaque impedit magni obcaecati inventore mollitia in soluta
              eum? Tempora, dignissimos maiores! Ratione dolores veritatis,
              obcaecati animi exercitationem maiores? Sequi, tempora.
              Recusandae.
            </p>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              repudiandae molestiae! Illo optio nisi possimus beatae illum.
              Obcaecati impedit, ullam beatae consequatur veniam ducimus minima,
              consequuntur earum, nemo sint ipsa temporibus quae? Beatae at
              saepe suscipit quae necessitatibus consequuntur nemo corrupti sunt
              laborum sed voluptates, optio id, repudiandae cupiditate nihil.
              Quam, ipsum numquam dolor eos cumque quod voluptates dolorem
              pariatur quisquam iusto unde molestiae officia in possimus sed
              inventore? Sint eveniet animi officia nam facere possimus est eum,
              tempore fugit. Temporibus numquam ratione sit, magnam eaque
              voluptatibus recusandae, veritatis ea sunt, praesentium totam.
              Veniam voluptates illo assumenda ut consequatur impedit.
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
