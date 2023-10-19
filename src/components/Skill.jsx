import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center gap-10 bg-center bg-cover bg-skill-back-img py-10 md:grid-cols-2">
      <div className="flex flex-col gap-5 flex-1 items-center text-center md:order-2 md:items-start md:justify-normal md:text-start ">
        <span className="text-light-gray tracking-widest">My Skills</span>
        <h1 className="text-white font-primaryfont text-2xl leading-relaxed">Contemporary And Furry</h1>
        <p className="text-light-gray max-w-md">
          Lorem ipsum dolor sit amet consectetur. Vestibulum auctor posuere
          fringilla faucibus nulla.
        </p>
        <button className="py-2 px-4 bg-black text-white duration-200 hover:bg-white hover:text-black 2xl:px-10">Learn More</button>
      </div>
      <div className="flex flex-col flex-1 gap-5 ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center px-16 justify-between text-white text-sm max-w-[100%] sm:px-24 md:px-16 xl:px-28">
            <h3>Writing</h3>
            <span>90%</span>
          </div>
          <ProgressBar
            width="70%"
            height="5px"
            completed={90}
            bgColor="#2f93c9"
            labelSize="0px"
            className="flex items-center justify-center"
            />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center px-16 justify-between text-white text-sm max-w-[100%] sm:px-24 md:px-16 xl:px-28">
            <h3>AUTHOR</h3>
            <span>90%</span>
          </div>
          <ProgressBar
            width="70%"
            height="5px"
            completed={90}
            bgColor="#2f93c9"
            labelSize="0px"
            className="flex items-center justify-center"
            />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center px-16 justify-between text-white text-sm max-w-[100%] sm:px-24 md:px-16 xl:px-28">
            <h3>STORYLINE</h3>
            <span>90%</span>
          </div>
          <ProgressBar
            width="70%"
            height="5px"
            completed={90}
            bgColor="#2f93c9"
            labelSize="0px"
            className="flex items-center justify-center"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center px-16 justify-between text-sm text-white max-w-[100%] sm:px-24 md:px-16 xl:px-28">
            <h3>ENDING</h3>
            <span>90%</span>
          </div>
          <ProgressBar
            width="70%"
            height="5px"
            completed={90}
            bgColor="#2f93c9"
            labelSize="0px"
            className="flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
