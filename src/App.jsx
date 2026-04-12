import { Navbar } from "./Components/Navbar/Navbar";
import HeroPicture from "./assets/SkillsHoneyComb.png";
import GradPicture from "./assets/GraduationPicture.png";
import Footer from "./Components/Footer/Footer";
import { Socials } from "./Components/Socials";
import { SmallProjectCard } from "./Components/ProjectCard/SmallProjectCard";
import { CassetteTape } from "./Components/CassetteTape/CassetteTape";
import { ContactMe } from "./Components/ContactMe/ContactMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import {
    javaProject,
    reactProject,
    pokemonProject,
    drumMachineProject,
} from "./projects";

function App() {
    return (
        <>
            <div className="relative text-white bg-background !scroll-smooth">
                <Navbar />
                <Socials />

                <div className="container p-4 mx-auto border-none sm:border-red-500 md:border-green-500 lg:border-blue-500 xl:border-purple-500 sm:px-6 lg:px-16">
                    {/* Header Section */}
                    <header className="flex border items-center p-4 mb-16 font-inria sm:gap-x-4 md:gap-x-5 xl:gap-x-40 lg:h-[80vh]">
                        {/* Left Text */}

                        <div className="flex flex-col p-8 mx-auto">
                            <h1 className="mb-8 text-5xl font-bold text-white sm:text-4xl md:text-5xl lg:text-8xl ">
                                Hi there, my name is Brandon
                            </h1>

                            <h2 className="text-3xl lg:text-4xl sm:text-2xl">
                                I’m a Computer Science graduate from{" "}
                                <span className="font-bold text-secondaryAccent">
                                    Iowa State University
                                </span>
                            </h2>

                            <h3 className="mt-4 text-3xl lg:text-4xl">
                                I have an interest in <br />
                                Full-Stack Development and
                            </h3>

                            {/* <ChangingSign /> */}
                            <span className="block p-4 my-5 text-sm font-bold text-center text-black rounded-md bg-accent xl:text-3xl lg:text-xl md:text-lg sm:text-md">
                                Much Much More!
                            </span>
                        </div>

                        {/* Right Image */}
                        <img
                            src={HeroPicture}
                            alt="graduation picture"
                            className="p-4  hidden sm:block 2xl:max-w-fit lg:min-w-[300px] xl:min-w-[400px] md:max-w-[200px] sm:w-52 w-40 "
                        />
                    </header>

                    {/* Project Section */}
                    <section className="my-16 text-lg text-white font-inria ">
                        <h1
                            id="project-section"
                            className="text-5xl font-bold text-center 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl"
                        >
                            Projects
                        </h1>

                        {/* Project Grid */}

                        <div className="relative flex flex-col flex-wrap items-center justify-center px-2 py-8 my-8 overflow-auto rounded-md mx- auto md:pb-16 sm: lg:placeitemsce sm:place-items-center sm:grid place-items-start md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 lg:place-items-center ">
                            {/* Could probably clean this up with a map function, handle missing params*/}
                            <SmallProjectCard {...javaProject} />
                            <SmallProjectCard {...drumMachineProject} />
                            <SmallProjectCard {...pokemonProject} />
                            <SmallProjectCard {...reactProject} />

                            <p className="p-4 text-sm font-bold block max-w-[100vw]   sm:text-xl  text-secondaryAccent lg:absolute lg:bottom-2 lg:right-10 ">
                                Projects marked with:
                                <span className="text-lg text-white">
                                    {" "}
                                    <FontAwesomeIcon icon={faKeyboard} />{" "}
                                </span>
                                are still in development{" "}
                            </p>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about-section" className="mb-20 text-white ">
                        <h1 className="p-8 text-5xl font-bold text-center font-inria 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl">
                            About Me
                        </h1>

                        <div className="relative items-center max-h-screen p-4 mx-auto overflow-auto scroll-auto ">
                            <div className="ml-5 lg:flex ">
                                {/* Fix Dimensions */}
                                <div className="flex flex-col items-center p-8 bg-secondaryRed/90 sm:rounded-r-none sm:rounded-t-md md:rounded-l-md md:rounded-tr-none ">
                                    <img
                                        className="object-contain max-w-[200px] max-h-[300px] sm:max-w-[500px] sm:max-h-[300px] mb-8"
                                        src={GradPicture}
                                        alt="My Graduation Picture"
                                    />
                                    <p className="text-white sm:px-8 font-workSans md:text-lg xl:text-xl">
                                        Hi, My name is Brandon, I'm a new
                                        computer science graduate from Iowa
                                        State University, and I'm eager to
                                        finally get started working in a
                                        professional setting. <br /> <br />I
                                        have many interest both in computer
                                        science and outside of computer science.
                                        And writing software allows me to
                                        combine some of my interests and come up
                                        with flexible and creative solutions.{" "}
                                        <br /> <br /> Software is in almost
                                        everything we do now and with enough
                                        effort, time, and practice you can build
                                        almost anything. The barrier to entry is
                                        also smaller than many other
                                        disciplines, that's not to say that it's
                                        not challenging it can be extremely
                                        frustrating at times but that's also
                                        what makes it extremely rewarding.{" "}
                                        <br />
                                        <br /> I'm always trying to learn and
                                        improve so if you have any feedback
                                        please feel free to contact me anytime!
                                    </p>
                                </div>

                                <div className="hidden xs:block">
                                    <CassetteTape />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact-section" className="">
                        <ContactMe />
                    </section>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default App;
