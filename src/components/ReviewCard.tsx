type ReviewCard = {
  img: string;
  title: string;
  description: string;
};
const ReviewCard = function ({ img, title, description }: ReviewCard) {
  return (
    <div className="w-full m-2 flex flex-col justify-center items-center py-4  bg-owlLegend  overflow-hidden">
      <div className="flex justify-center items-center flex-col">
        <img src={img} alt={title} className="w-12 rounded-full" />
        <h1 className="my-4 text-2xl text-yellowOwl">Customer</h1>
        <p className="text-md text-white italic px-4">" {description} "</p>
      </div>
    </div>
  );
};
export default ReviewCard;
