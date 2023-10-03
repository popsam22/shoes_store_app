import { star } from "../assets/icons"
const ReviewCard = ({imageUrl, rating, feedback, customerName}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imageUrl} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="flex gap-3 justify-center items-center">
        <img src={star} alt="ratings" className="w-[24px] h-[24px]"/>
        <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
      </div>
      <p className="mt-1 mb-8 font-palanquin text-center text-xl font-semibold">{customerName}</p>
    </div>
  )
}

export default ReviewCard