import { useState } from "react";
import Button from "./Button";
import ShoeCard from "./ShoeCard";
import { statistics, shoes } from "./index";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row min-h-screen border max-container justify-center gap-10 "
    >
      <div className="relative flex flex-col w-full items-start justify-center xl:w-2/5 max-xl:padding-x pt-20">
        <p className="text-xl font-montserrat text-coral-red">
          Fall Collections
        </p>
        <h1 className="font-palanquin font-bold text-8xl mt-10 max-sm:text-[72px] max-sm:leading-[82]">
          <span className="relative pr-10 xl:whitespace-nowrap xl:bg-white z-10">
            Latest Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-2">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-gray mt-6 mb-10 leading-8">
          Discover Stylish Nike arrivals, quality comfort, and innovation for
          your sports life.
        </p>
        <Button icon={arrowRight} label="Shop Now" />
        <div className="flex w-full flex-wrap justify-start items-start gap-12 mt-20">
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p className="font-palanquin font-bold text-2xl">{stats.value}</p>
              <p className="leading-10 font-montserrat text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="shoe"
          className="relative object-contain z-10"
          width={610}
          height={500}
        />
      </div>
      <div className="absolute flex gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6">
        {/* -bottom-[5%] */}
        {shoes.map((shoe) => (
          <div key={shoe.thumbnail}>
            <ShoeCard
              imageUrl={shoe}
              changeBigShoeImage={(shoe) => {
                setBigShoeImage(shoe);
              }}
              bigShoe={bigShoeImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
