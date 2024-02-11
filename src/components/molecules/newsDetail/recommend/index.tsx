import {Link} from "react-router-dom";
import {news} from "../../content";
import {Container} from "../../../atoms";

export const RecommendNewDetailScreen = () => {
  return (
    <Container>
      <h2 className="font-prociono text-2xl mb-2">For You</h2>
      <div className="flex gap-3 justify-between">
        {news.slice(0, 3).map((item, index) => (
          <Link to={`/news/${index}`}>
            <div
              key={index}
              className="w-56 lg:w-80 p-3 rounded-lg hover:bg-yellow-100 trans-300"
            >
              <div className="rounded-lg overflow-hidden">
                <img src={item.img} alt="" />
              </div>
              <span className="text-gray-400 text-[10px]">
                12, Januari 2024
              </span>
              <h3 className="text-sm" style={{fontWeight: "500"}}>
                {item.title}
              </h3>
              <p className="text-sm text-[11px]">{item.slug}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
