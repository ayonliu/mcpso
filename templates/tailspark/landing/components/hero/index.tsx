// import BgStar from "../../assets/imgs/bgstar.svg";
import Buttons from "./buttons";
import { Hero } from "@/types/landing";

export default ({ hero, count }: { hero: Hero; count?: number }) => {
  return (
    <section className="relatve">
      <div className="mx-auto w-full max-w-7xl px-4 mt-2 md:mt-12">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="text-primary leading-tight text-4xl font-bold md:text-4xl">
            {hero.title}
          </h1>
          <h2 className="mt-4 text-lg md:text-xl text-center">
            <span className="text-primary font-bold">{count}</span>{" "}
            {hero.description}
          </h2>
        </div>
      </div>
      {/* <img
        src={BgStar.src}
        alt=""
        className="absolute bottom-[auto] left-[auto] right-0 top-24 -z-10 inline-block max-[767px]:hidden"
      />
      <img
        src={BgStar.src}
        alt="bgstar"
        className="absolute bottom-[auto] right-[auto] left-0 top-60 -z-10 inline-block max-[767px]:hidden"
      />
      <Buttons /> 
      */}
    </section>
  );
};
