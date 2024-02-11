import {Container, Paragraph} from "../../../atoms";

export const AboutHomeScreen = () => {
  return (
    <Container className="mt-10">
      <Paragraph variant="title">Welcome to our University</Paragraph>
      <div>
        <p className="text-center mt-3 leading-7">
          Explore your options and make informed decisions with our
          comprehensive guide to universities around the world. Discover
          top-ranked institutions, explore diverse programs, and connect with
          like-minded individuals to build your academic future. With
          easy-to-use search tools, in-depth profiles, and trusted ratings and
          reviews, we provide everything you need to make the right choice for
          your academic journey. Start your search today and find your perfect
          fit!
        </p>
      </div>
    </Container>
  );
};
