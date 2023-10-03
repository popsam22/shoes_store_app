import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray leading-normal">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-palanquin">{name}</h3>
      <p className="mt-1 text-xl font-montserrat leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
