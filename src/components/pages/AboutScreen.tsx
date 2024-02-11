import {Container} from "../atoms";
import {Navbar} from "../templates/Navbar";

export const AboutScreen = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-10">
        <span>About Us</span>
      </Container>
    </>
  );
};
