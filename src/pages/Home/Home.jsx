import About from "../../components/About";
import Blog from "../../components/Blog";
import BookCollection from "../../components/BookCollection";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import Newsletter from "../../components/Newsletter";
import Skill from "../../components/Skill";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <BookCollection/>
      <Skill/>
      <Blog/>
      <Intro/>
      <Testimonial/>
      <Newsletter/>
    </div>
  );
};

export default Home;
