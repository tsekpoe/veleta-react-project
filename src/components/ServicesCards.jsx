const ServicesCards = ({ image, title, content }) => {
  return (
    <div className="cardContainer text-center m-10">
      <img src={image} alt="" className="bg-sky-100 rounded-full p-3" />
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-slate-700">{content}</p>
    </div>
  );
};

export default ServicesCards;
