const Newsletter = () => {
  return (
    <div className="py-10 border-y border-gray grid grid-cols-1 gap-10">
      <div className="flex flex-col gap-5 text-center px-5">
        <h3 className="font-primaryfont text-2xl 2xl:text-5xl">The Newsletter</h3>
        <p className="text-gray text-sm">
          Subscribe to our newsletter to hear the latest news
        </p>
      </div>
      <form className="flex flex-col gap-5 items-center justify-center ">
        <div className="w-3/4 flex flex-col gap-5 items-center justify-around md:flex-row md:gap-16">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-b p-2 w-4/5 md:w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b p-2 w-4/5 md:w-full"
          />
        </div>
        <button className="border py-2 px-4 md:px-8 duration-200 hover:bg-black hover:text-white hover:border-black 2xl:px-10">Send</button>
      </form>
    </div>
  );
};

export default Newsletter;
