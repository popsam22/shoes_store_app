import PopularProductsCard from "./PopularProductsCard";
import { products } from "./index";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div>
        <h2 className="font-bold text-4xl font-palanquin">
          Our <span className="text-coral-red">Hottest</span> Products
        </h2>
        <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selection. Discover a world of comfort, design, and value.
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
          {products.map((product) => (
            <PopularProductsCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
