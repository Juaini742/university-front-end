import {ContentNewDetailScreen} from "../molecules/newsDetail/content";
import {RecommendNewDetailScreen} from "../molecules/newsDetail/recommend";
import {Footer} from "../templates/Footer";
import {Navbar} from "../templates/Navbar";

export const NewsDetailScreen = () => {
  return (
    <>
      <Navbar />
      <ContentNewDetailScreen />;
      <RecommendNewDetailScreen />;
      <Footer />
    </>
  );
};
