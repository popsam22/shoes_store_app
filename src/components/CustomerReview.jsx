import { reviews } from ".";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-3xl">
        What Our <span className="text-coral-red">Customers</span> Say
      </h3>
      <p className="text-center info-text m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers.
      </p>
      <div className="flex flex-1 justify-evenly items-center mt-24 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imageUrl={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
