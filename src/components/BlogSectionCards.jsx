const BlogSectionCards = ({ blogImage, alt, theme, topic, description }) => {
  return (
    <div className="w-1/2 box-border">
      <table>
        <tr>
          <td className="p-5">
            <img
              src={blogImage}
              alt={alt}
              className="h-60 object-cover rounded-lg"
            />
          </td>
          <td>
            <p className="text-xs text-blue-600 bg-sky-100 px-3 py-1 rounded-xl w-fit mb-5">
              {theme}
            </p>
            <a href="/" className="text-2xl font-medium">
              {topic}
            </a>
            <p className=" text-slate-600 mt-5">{description}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BlogSectionCards;
