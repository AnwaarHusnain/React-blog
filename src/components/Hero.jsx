const Hero = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center py-10 lg:flex-row" >
      <div className="flex flex-col items-center gap-10 md:flex-row-reverse lg:flex-row-reverse">
        <div className="flex flex-col gap-5 place-items-center text-sm px-3">
          <h1 className="text-4xl leading-10 font-primaryfont md:text-5xl xl:text-6xl xl:leading-snug">
            Bliss + <br /> <span className="ml-10 text-blue">Blues =</span>
            <br /> Bipolar
          </h1>
          <p className="max-w-md text-center text-gray md:text-base xl:text-lg">
            Bipolar disorder is a medical condition that adversely inflates a
            person’s emotional ups and downs. The author was diagnosed with it
            after attending Harvard, and spent over two decades battling it.
          </p>
          <button className="bg-black text-white py-2 px-4 text-sm duration-200 hover:bg-blue 2xl:px-10">
            Read More
          </button>
        </div>
        <img
          src="/Images/Hero.png"
          alt=""
          className="w-64 mb-5 xl:w-72"
        />
      </div>
      <img src="/Images/Hero-book.png" alt="" className="w-64 xl:w-72" />
    </div>
  );
};

export default Hero;
