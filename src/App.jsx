import { Navbar } from "./Components/Navbar/Navbar";
import { useState } from "react";
import HeroPicture from "./assets/SkillsHoneyComb.png";
import GradPicture from "./assets/GraduationPicture.png";
import Footer from "./Components/Footer/Footer";
import { Socials } from "./Components/socials";
import { SmallProjectCard } from "./Components/Projects/SmallProjectCard";
import { CassetteTape } from "./Components/CassetteTape/CassetteTape";
import { ContactMe } from "./Components/ContactMe/ContactMe";
import Disassembler from "./assets/disassembler.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKeyboard,
  faPlantWilt,
  faSoap,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  const [interestText, setInterestText] = useState("Audio Programming");

  // Test:
  const javaProject = {
    image: Disassembler,
    imgAltDescription: "placeholder",
    title: "Assembly Dissasembler",
    finished: true,
    stack: ["java"],
    description:
      "For my computer architecture class we were tasked to write a dissasembler in java that takes some machine code and converts it to assembly instructions.",
  };

  const reactProject = {
    image:
      "https://img.freepik.com/free-photo/portrait-adorable-cavapoo-dog-holding-tennis-ball-park-sunny-day_181624-59516.jpg?t=st=1713199924~exp=1713203524~hmac=0c3853ead18e9ca1a3940aefb912055fbaf70a500f6976c79b18588d4e3d7801&w=1380",
    imgAltDescription: "placeholder",
    title: "Steam Roll",
    finished: false,
    stack: ["javascript", "react", "node"],
    description:
      "This project is currently still in development, but I am building a web app that chooses a random game from your steam library. Why? Well over the years many people probably have ammased a large collection of games in their steam library's from the mutliple steam sales in the year, so people can get analysis paralysis or too overwhelmed on what game to play that they don't play anthing.This project is currently still in development, but I am building a web app that chooses a random game from your steam library. Why? Well over the years many people probably have ammased a large collection of games in their steam library's from the mutliple steam sales in the year, so people can get analysis paralysis or too overwhelmed on what game to play that they don't play anthing.This project is currently still in development, but I am building a web app that chooses a random game from your steam library. Why? Well over the years many people probably have ammased a large collection of games in their steam library's from the mutliple steam sales in the year, so people can get analysis paralysis or too overwhelmed on what game to play that they don't play anthing. This project is currently still in development, but I am building a web app that chooses a random game from your steam library. Why? Well over the years many people probably have ammased a large collection of games in their steam library's from the mutliple steam sales in the year, so people can get analysis paralysis or too overwhelmed on what game to play that they don't play anthing This project is currently still in development, but I am building a web app This project is currently still in development, but I am building a web app.",
  };

  const pokemonProject = {
    title: "ASCII Pokemon Console Game",
    image: Disassembler,
    finished: false,
    stack: ["cpp", "c"],
  };

  return (
    <>
      <div className="bg-background text-text relative  ">
        <Navbar />
        <Socials />

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-16 ">
          <header className=" border flex p-8 items-center mt-8 mb-8 gap-x-80 font-inria 2xl:gap-x-80 xl:gap-x-80 lg:gap-x-56 md:gap-x-44 ">
            {/* Left Text */}

            <div className="flex flex-col max-w-[800px] mx-auto p-8 ">
              <h1 className=" mb-8 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl ">
                Hi there, my name is Brandon
              </h1>

              <h2 className="lg:text-3xl xl:text-4xl md:text-xl">
                I’m a Computer Science graduate from Iowa State University
              </h2>

              <h3 className="lg:text-3xl xl:text-4xl md:text-xl mt-4  ">
                I have an interest in <br />
                Full-Stack Development and{" "}
                <span className=" font-bold block mt-5 text-center rounded-md p-4 bg-accent text-black xl:text-3xl lg:text-xl md:text-lg sm:text-md">
                  {interestText}
                </span>
              </h3>
            </div>

            {/* Right Image */}
            <img
              src={HeroPicture}
              alt="graduation picture"
              className="py-4 lg:max-w-[300px] xl:max-w-[400px] md:max-w-[200px]"
            />
          </header>
          {/* Scroll Down */}
          {/* <div className="container mx-auto bg-accent rounded-sm motion-reduce:hidden animate-bounce ease-in-out  absolute bottom-[-50px] left-[45%] w-60 h-4 mb-5"></div> */}

          <section className="text-text text-lg my-16 font-inria  ">
            <h1 className="text-center 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl">
              Projects
            </h1>

            {/* Project Grid */}

            <div className=" relative grid xl:grid-cols-3 xl:gap-5 lg:grid-cols-2 md:grid-cols-1 md:place-items-center  my-8 p-16 rounded-md place-items-start bg-primary">
              <SmallProjectCard
                image={javaProject.image}
                title={javaProject.title}
                finished={javaProject.finished}
                stack={javaProject.stack}
                description={javaProject.description}
              />
              <SmallProjectCard
                finished={pokemonProject.finished}
                title={pokemonProject.title}
                image={pokemonProject.image}
                stack={pokemonProject.stack}
              />
              <SmallProjectCard
                image={reactProject.image}
                title={reactProject.title}
                finished={reactProject.finished}
                stack={reactProject.stack}
                description={reactProject.description}
              />
              {/* <SmallProjectCard
                image={reactProject.image}
                title={reactProject.title}
                finished={reactProject.finished}
                stack={reactProject.stack}
                description={reactProject.description}
              /> */}
              <p className="text-secondaryAccent text-xl font-bold p-4 absolute bottom-0 right-10 ">
                Projects marked with:
                <span className="text-white text-lg">
                  {" "}
                  <FontAwesomeIcon icon={faKeyboard} />{" "}
                </span>
                are still in development{" "}
              </p>
            </div>
          </section>

          {/* About Section */}
          <section className="items-center justify-centertext-white text-lg font-inria my-8  ">
            <h1 className="text-center  p-8 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl">
              About Me
            </h1>

            <div className="relative rounded-lg p-4 mx-auto bg-primary">
              <div className="flex justify-center items-center">
                <div className="">
                  {/* Fix Dimensions */}
                  <CassetteTape />
                </div>

                <div className="flex flex-col max-w-[800px] max-h-[628px] bg-[#9E1829]   my-8 p-8 items-center ">
                  <img
                    className="object-contain max-w-[300px] max-h-[300px] mb-8 rounded-lg "
                    src={GradPicture}
                    alt="My Graduation Picture"
                  />
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum exercitationem doloribus sunt aperiam accusamus, numquam
                    animi, odio ipsam nesciunt amet, eaque rerum facilis
                    praesentium voluptatem nemo vero obcaecati consequuntur
                    minus!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="my-16">
            <ContactMe />
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
