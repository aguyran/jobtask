type FeatureCard = {
  img: string;
  title: string;
  description: string;
};
const FeatureCard = function ({ img, title, description }: FeatureCard) {
  return (
    <div className="w-1/3 bg-owlBlack m-2 flex flex-col justify-center items-center py-4 shadow-md bg-owlLegend">
      <div className="flex justify-center items-center flex-col">
        <img src={img} alt={title} className="w-1/2 rounded-full" />
        <h1 className="my-4 text-2xl text-yellowOwl">{title}</h1>
        <p className="text-md text-white">{description}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
