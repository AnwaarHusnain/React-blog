import book from "/Images/Hero-book.png";

const Intro = () => {
  return (
    <div className="py-10 grid place-items-center grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
      <div className="flex flex-col items-center justify-center gap-5 text-center px-16 md:order-2 md:items-start md:justify-normal ">
        <span className="text-blue text-sm tracking-widest">
          February 26, 2021
        </span>
        <h3 className="text-2xl font-primaryfont 2xl:text-5xl">
          Bliss + Blues = Bipolar
        </h3>
        <p className="text-gray text-sm">
          A Memoir of My Ups and Down Living with Bipolar Disorder
        </p>
        <button className="py-2 px-4 bg-black text-white text-sm duration-200 hover:bg-blue 2xl:px-10">
          Order Now
        </button>
      </div>
      <img src={book} alt="book" className="w-64 xl:w-80 " />
    </div>
  );
};

export default Intro;
