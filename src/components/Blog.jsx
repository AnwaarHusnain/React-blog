import BlogCard from "./BlogCard";
import blog1 from "/Images/blog1.png";
import blog2 from "/Images/blog2.png";
import blog3 from "/Images/blog3.png";

const Blog = () => {
  return (
    <div className="py-10 grid grid-cols-1 gap-10">
      <div className="flex flex-col gap-5 items-center justify-center text-center px-3">
        <span className="text-blue tracking-widest">Blogs</span>
        <h3 className="font-primaryfont text-2xl 2xl:text-5xl">
          Articles and Blogs
        </h3>
        <p className="text-gray">
          Lorem ipsum dolor sit amet consectetur. At nisi vel amet arcu
          pellentesque. Sem pellentesque duis scelerisque non ut cursus cursus
          at.
        </p>
      </div>

      <div className="flex flex-col gap-5  justify-center items-center text-center lg:flex-row lg:items-start">
        <div className="md:flex ">
          <BlogCard
            img={blog1}
            date={"September 28, 2023"}
            heading={"Address mental illness, Drug addiction in tandem"}
            desc={
              "Park is a mental health advocate and author of the memoir/self-help book “Bliss + Blues = Bipolar: A Memoir of my Ups and...........Read more"
            }
          />
          <BlogCard
            img={blog3}
            date={"May 5, 2021"}
            heading={
              "Memoir Bliss + Blues = Bipolar, a rollercoaster ride to recovery"
            }
            desc={
              "The new book Bliss + Blues = Bipolar chronicles the 20-year journey of mental health recovery for Jason W. Park, PhD............Read more"
            }
          />
        </div>
        <BlogCard
          img={blog2}
          date={"February 8, 2023"}
          heading={"Keep guns away from the mentally ill"}
          desc={
            "A mass shooting occurs every 8.3 days in California on average, according to the Gun Violence Archive. This past weekend,...........Read more"
          }
        />
      </div>
    </div>
  );
};

export default Blog;
