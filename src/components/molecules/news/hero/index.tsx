import {Link} from "react-router-dom";
import {Button, Container} from "../../../atoms";

export const HeroNewsScreen = () => {
  return (
    <Container
      className="mt-10 h-[500px] rounded-xl overflow-hidden"
      style={{
        background: "url(../images/activity3.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full bg-black/25 flex items-end">
        <div className=" pb-10 px-5">
          <h1 className="text-white text-3xl font-prociono">
            Breaking Into Products Design: Afvice from unititled Founder
          </h1>
          <p className="text-sm text-white leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            labore incidunt aliquam praesentium enim voluptates aliquid. Placeat
            eos, adipisci ducimus perspiciatis rem natus mollitia quibusdam
            illum debitis illo tempora iste.
          </p>
          <Link to={`/news/2`}>
            <Button variant="primary" className="px-5 py-1 mt-2 text-sm">
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
