const Contact = () => {
  return (
    <div className="grid grid-cols-1 place-items-center text-center gap-10 py-10 md:grid-cols-2 px-3 md:text-start">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <span className="text-blue text-sm">Contact</span>
          <h3 className="font-primaryfont text-2xl">Get in Touch</h3>
          <p className="text-gray text-sm">
            Lorem ipsum dolor sit amet consectetur. Ac ac pellentesque amet
            auctor rhoncus.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className=" flex flex-col gap-2">
            <h3 className="text-blue">Address</h3>
            <p className="text-gray text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="">
            <h3 className="text-blue">Email</h3>
            <p className="text-gray text-sm">jwriterp@gamil.com</p>
          </div>
          <div className="">
            <h3 className="text-blue">Phone</h3>
            <p className="text-gray text-sm">(310) 488-4570</p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-5 py-5">
        <div className="grid gap-5 md:grid md:grid-cols-2 ">
          <div className="">
            <h1 className="font-primaryfont text-sm">First Name</h1>
            <input type="text" className="bg-transparent border-b p-2 w-3/4 md:w-3/4" placeholder="John" />
          </div>
          <div className="">
            <h1 className="font-primaryfont text-sm">Last Name</h1>
            <input type="text" className="bg-transparent border-b p-2 w-3/4 md:w-3/4" placeholder="Doe"/>
          </div>
          <div className="">
            <h1 className="font-primaryfont text-sm">Email</h1>
            <input type="email" className="bg-transparent border-b p-2 w-3/4 md:w-3/4 " placeholder="Johndoe@gmail.com" />
          </div>
          <div className="">
            <h1 className="font-primaryfont text-sm">Phone</h1>
            <input type="number" className="bg-transparent border-b p-2 w-3/4 md:w-3/4" placeholder="1235456789"/>
          </div>
        </div>
        <h3 className="font-primaryfont">Messages</h3>
        <p className="text-gray text-sm 2xl:pr-24">
          Lorem ipsum dolor sit amet consectetur. Maecenas ipsum ultricies
          vivamus risus ultrices vestibulum. Quisque bibendum lectus tincidunt
          neque sed egestas gravida cras diam. Turpis placerat nec ullamcorper
          vitae elit eget elit aenean.
        </p>
        <button className="px-4 py-2 bg-black text-white w-max mx-auto">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
