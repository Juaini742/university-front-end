import {Button} from "../atoms";
import {sosmed} from "../molecules/content";

export const Footer = () => {
  return (
    <footer className="mt-10 bg-primary py-8">
      <div className="container">
        <div className="text-center border-b-2 pb-10">
          <h5 className="font-bold mb-2">Subscribe to our newsletter</h5>
          <p>
            Get expert advice for your journey to university delivered to your
            inbox each month. It's short, and worthwhile – we promise!
          </p>
        </div>
        <div className="mt-5">
          <div className="flex gap-5 justify-center">
            {sosmed.map((item, index) => (
              <Button
                variant="navbar"
                key={index}
                className="text-2xl px-2 py-2"
              >
                {item.icon}
              </Button>
            ))}
          </div>
          <p className="text-center mt-5">
            Copyright © 2024 - <span className="italic">Juaini</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
