import {Container, Paragraph} from "../../../atoms";
import {categories} from "../../content";

export const CategoriesCourseScreen = () => {
  return (
    <Container className="mt-10">
      <Paragraph variant="title">Most Popular Category</Paragraph>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 flex items-center gap-2  border rounded-lg hover:bg-primary hover:text-white trans-300"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};
