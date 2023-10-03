import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "./Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          <span className="text-coral-red inline-block mt-2">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a journey that redefined your experience with unbeatable
          deals. From premier selections to incredible savings, we offer
          unparalled value that sets us apart.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" icon={arrowRight} />
          <Button
            label="Learn more"
            borderColor="border-slate-gray"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
