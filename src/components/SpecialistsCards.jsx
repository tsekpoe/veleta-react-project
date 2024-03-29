const SpecialistsCards = ({ docImage, alt, role, name, description }) => {
  return (
    <div className="w-1/2 box-border">
      <table>
        <tr>
          <td className="p-5">
            <img src={docImage} alt={alt} className="" />
          </td>
          <td>
            <span className="text-xs text-blue-600 bg-sky-100 px-3 py-1 rounded-xl">
              {role}
            </span>
            <p className="text-2xl font-medium my-3">{name}</p>
            <p className="text-xs text-slate-600">{description}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SpecialistsCards;
