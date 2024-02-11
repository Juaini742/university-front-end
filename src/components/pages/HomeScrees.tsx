import {AboutHomeScreen} from "../molecules/home/about";
import {ExtracurricularHomeScrees} from "../molecules/home/ekstracuriiculars";
import {EventHomeScreen} from "../molecules/home/event";
import {GraduationHomeScreen} from "../molecules/home/graduation";
import {HeroHomeScreen} from "../molecules/home/hero";
import {MajorHomeScreen} from "../molecules/home/major";
import {Footer} from "../templates/Footer";
import {Navbar} from "../templates/Navbar";

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HeroHomeScreen />
      <AboutHomeScreen />
      <MajorHomeScreen />
      <EventHomeScreen />
      <GraduationHomeScreen />
      <ExtracurricularHomeScrees />
      <Footer />
    </>
  );
};
