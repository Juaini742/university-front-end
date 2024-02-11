import {Container} from "../../../atoms";

export const HeroHomeScreen = () => {
  return (
    <Container>
      <div
        className=" h-[500px] lg:h-[600px] overflow-hidden"
        style={{
          background: "url(../images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/25 flex justify-center items-center">
          <div className="text-center text-white">
            <h2 className="font-prociono text-3xl mb-2">
              Becoming the <span className="bg-primary px-1">Best</span> in
              Education Worldwide
            </h2>
            <p className="px-3">
              Providing Quality Education and Shaping a Bright Future
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
