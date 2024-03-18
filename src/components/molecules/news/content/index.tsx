import {Link} from "react-router-dom";
import {Container, Paragraph} from "../../../atoms";
import {news} from "../../content";

export const ContentNewsScreen = () => {
  return (
    <Container className="mt-10">
      <Paragraph variant="title">See our news</Paragraph>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-wrap justify-between mt-5">
        {news.map((item, index) => (
          <Link key={index} to={`/news/${index}`}>
            <div className="p-3 rounded-lg hover:bg-yellow-100 trans-300">
              <div className="rounded-lg overflow-hidden">
                <img src={item.img} alt="" />
              </div>
              <span className="text-gray-400 text-[10px]">
                12, Januari 2024
              </span>
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className=" text-[11px]">{item.slug}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
