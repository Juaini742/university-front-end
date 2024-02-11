import {ContentNewsScreen} from "../molecules/news/content";
import {HeroNewsScreen} from "../molecules/news/hero";
import {Footer} from "../templates/Footer";
import {Navbar} from "../templates/Navbar";

export const NewsScreen = () => {
  return (
    <>
      <Navbar />
      <HeroNewsScreen />
      <ContentNewsScreen />
      <Footer />
    </>
  );
};
