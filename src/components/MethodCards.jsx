const MethodCards = ({ image, title, content }) => {
  return (
    <div className="cardContainer">
      <img src={image} alt="" className="h-20" />
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-slate-700">{content}</p>
    </div>
  );
};

export default MethodCards;
