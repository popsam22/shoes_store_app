const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoe }) => {
  const handleclick = () => {
    if (bigShoe !== imageUrl.bigShoe) {
      changeBigShoeImage(imageUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoe === imageUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleclick}
    >
      <div className="flex justify-center items-center bg-card bg-center  bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imageUrl.thumbnail} alt="shoe" width={127} height={103} className="object-contain"/>
      </div>
    </div>
  );
};

export default ShoeCard;
