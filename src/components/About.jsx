import CountUp from "react-countup";

const About = () => {
    return (
        <div className="py-10 grid  grid-cols-1border place-items-center gap-10 mb-5 ">
            <div className="flex flex-col gap-5 items-center justify-center text-center px-3 mb-5">
                <span className="text-blue text-sm tracking-widest md:text-lg">
                    About Me
                </span>
                <h3 className="text-2xl font-primaryfont 2xl:text-5xl">Jason W. Park</h3>
                <p className="text-gray text-sm md:text-lg">
                    Author of two memoirs, a number of short stories and personal essays,
                    a scientific research note and four Op-Ed pieces. His writings
                    typically revolve around the hero’s journey: overcoming seemingly
                    insurmountable obstacles, exerting heavy, strenuous effort, and
                    emphasizing the changed moral fiber of the protagonist. His lifelong
                    battle with mental illness, aimed at achieving recovery and wellness,
                    is the constant theme in his second memoir.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-10 place-items-center md:grid-cols-2">
                <div className="flex flex-col gap-10 items-center justify-center md:items-start md:justify-start md:order-2">
                    <div className="flex flex-col gap-5 items-center justify-center text-center px-3 md:text-start md:items-start">
                        <span className="text-blue tracking-widest text-sm md:text-lg">
                            About Publications
                        </span>
                        <h1 className="font-primaryfont leading-snug text-2xl 2xl:text-5xl md:pr-24 2xl:leading-normal">
                            Author With the Less Fattening Centers
                        </h1>
                        <p className="text-gray text-sm md:text-lg">
                            His more recent projects have shifted from the purely literary to
                            public policy debates.For example, one theme is what roles mental
                            illness and criminality play in predicting mass shootings. Another
                            topic is how dual diagnosis - the combination of mental illness
                            and substance abuse - leads to homelessness and incarceration. One
                            discussion focuses on how the state of California’s mental health
                            system can be improved upon - an issue touching close to home for
                            Jason.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 md:pl-4">
                        <div className="counter flex flex-col place-items-center md:place-items-start">
                            <CountUp
                                start={0}
                                end={25}
                                duration={5}
                                enableScrollSpy={"true"}
                                scrollSpyOnce={"true"}
                                className="font-primaryfont text-2xl"
                            />
                            <span className="text-gray text-sm">Years of Experience</span>
                        </div>
                        <div className="counter flex flex-col place-items-center md:place-items-start">
                            <CountUp
                                start={0}
                                end={5}
                                duration={5}
                                enableScrollSpy={"true"}
                                scrollSpyOnce={"true"}
                                className="font-primaryfont text-2xl"
                            />
                            <span className="text-gray text-sm">Books Published</span>
                        </div>
                        <div className="counter flex flex-col place-items-center md:place-items-start">
                            <CountUp
                                start={0}
                                end={100}
                                duration={5}
                                enableScrollSpy={"true"}
                                scrollSpyOnce={"true"}
                                className="font-primaryfont text-2xl"
                            />
                            <span className="text-gray text-sm">Awards Recognitions</span>
                        </div>
                        <div className="counter flex flex-col place-items-center md:place-items-start">
                            <CountUp
                                start={0}
                                end={120}
                                duration={5}
                                enableScrollSpy={"true"}
                                scrollSpyOnce={"true"}
                                className="font-primaryfont text-2xl "
                                suffix=" K"
                            />
                            <span className="text-gray text-sm">Happy Readers</span>
                        </div>
                    </div>
                    <button className="hidden py-2 px-4 bg-black duration-200 hover:bg-blue text-white w-max md:block 2xl:px-10">
                        Learn More
                    </button>
                </div>
                <img src="/Images/About.png" alt="" className="w-64 md:w-72 lg:w-80" />
            </div>
        </div>
    );
};

export default About;
