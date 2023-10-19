const BlogCard = ({ date, img, desc, heading }) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-10 px-5" >
      <img src={img} alt="" className="w-64" />
      <span className="text-gray text-sm">{date}</span>
      <h3 className="text-2xl font-primaryfont">{heading}</h3>
      <p className="text-gray px-3 text-sm">{desc}</p>
    </div>
  );
};

export default BlogCard;
