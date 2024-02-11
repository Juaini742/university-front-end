import {Container, Paragraph} from "../../../atoms";

export const EventHomeScreen = () => (
  <Container className="mt-10">
    <Paragraph variant="title">Our Event</Paragraph>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8">
      <div
        className="h-72 col-span-2 overflow-hidden rounded-lg hover:scale-105 trans-300"
        style={{
          background: "url(../images/activity.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-black/35">
          <div className="text-white pl-5 pr-5 md:pr-0 pt-2  w-full md:w-52">
            <h5 className="">Our Approach</h5>
            <p className=" text-sm">
              I’m a paragraph Click her to add your own text and edit me, Let
              your users get to know you.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary  rounded-lg hover:scale-105 trans-300">
        <div className="text-white pl-5 pr-5 md:pr-0 pt-2  w-full md:w-52 hover:scale-105 trans-300">
          <h5 className="">Announcements</h5>
          <p className=" text-sm">
            I’m a paragraph Click her to add your own text and edit me, Let your
            users get to know you.
          </p>
        </div>
      </div>
      <div>
        <div
          className="h-72 col-span-2 overflow-hidden rounded-lg hover:scale-105 trans-300"
          style={{
            background: "url(../images/event2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-black/35">
            <div className="text-white pl-5 pr-5 md:pr-0 pt-2  w-full md:w-52">
              <h5 className="">Our Approach</h5>
              <p className=" text-sm">
                I’m a paragraph Click her to add your own text and edit me, Let
                your users get to know you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary rounded-lg hover:scale-105 trans-300"></div>
      <div>
        <div
          className="h-72 col-span-2 overflow-hidden rounded-lg hover:scale-105 trans-300"
          style={{
            background: "url(../images/event3.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-black/35"></div>
        </div>
      </div>
      <div className="bg-primary rounded-lg col-span-2 md:col-auto py-5 md:py-0 hover:scale-105 trans-300">
        <div className="text-white pl-5 pr-5 md:pr-0 pt-2  w-full md:w-52">
          <h5 className="">About School of Law</h5>
          <p className=" text-sm">
            I’m a paragraph Click her to add your own text and edit me, Let your
            users get to know you.
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <div
          className="h-72 col-span-2 overflow-hidden rounded-lg hover:scale-105 trans-300"
          style={{
            background: "url(../images/activity2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-black/35">
            <div className="text-white pl-5 pr-5 md:pr-0 pt-2  w-full md:w-52 ">
              <h5 className="">Our Approach</h5>
              <p className=" text-sm">
                I’m a paragraph Click her to add your own text and edit me, Let
                your users get to know you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
