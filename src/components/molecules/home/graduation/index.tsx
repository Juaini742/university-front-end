import {Button, Container, Paragraph} from "../../../atoms";

export const GraduationHomeScreen = () => {
  return (
    <Container>
      <Paragraph variant="title" className="mt-10">
        Hot News
      </Paragraph>
      <div className="flex flex-col lg:flex-row gap-3 mt-5 items-center bg-yellow-50 px-4 py-5">
        <div className="md:h-96 overflow-hidden flex items-center rounded-lg ">
          <img
            src="../images/graduate.jpg"
            alt="graduate"
            className="w-full rounded-lg"
          />
        </div>
        <div className="lg:px-5">
          <h3 className="font-bold">Our Graduation</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim arcu. Elementum felis
            magna pretium in tincidunt.
          </p>
          <p className="text-sm leading-6 mt-3">
            Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus
            arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            nibh mauris, nec turpis orci lectus a pretium in tincidunt.
            Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus
            arcu.{" "}
            <Button variant="navbar" className="px-3">
              read more
            </Button>
          </p>
        </div>
      </div>
    </Container>
  );
};
