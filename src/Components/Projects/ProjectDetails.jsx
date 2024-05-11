import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "./Stack";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ImageCarousel } from "../Carousel/ImageCarousel";

const ProjectDetails = ({ title, description, img, stack, onClose }) => {
  const items = [
    "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg",
    "https://images.pexels.com/photos/4238994/pexels-photo-4238994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3769167/pexels-photo-3769167.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const openInNewWindow = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="container relative min-w-[80vw] flex flex-col justify-center bg-primary mx-auto min-h-screen ">
      <button
        className="bg-accent m-8 font-bold font-poppins text-black w-32 h-10 rounded-lg"
        onClick={onClose}
      >
        Close
      </button>

      <h1 className=" xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl p-8 text-center">
        {title}
      </h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <ImageCarousel items={items} />

        <button
          onClick={() => openInNewWindow("https://github.com/")}
          className="bg-secondaryRed text-text font-bold p-4 rounded-lg flex gap-4"
        >
          View Code <FontAwesomeIcon className={"fa-xl"} icon={faGithub} />
        </button>
      </div>

      <div className=" mx-auto p-8 font-poppins ">
        {/* Project Description Box */}
        <div className=" border p-16 mx-auto flex flex-col gap-5 items-center overflow-auto ">
          <div className="flex flex-col items-start">
            <div className="flex gap-3 items-center text-xl text-text font-bold">
              <span>Stack:</span>
              <Stack stack={stack} />
            </div>
            <h2 className="text-left text-secondaryAccent lg:text-3xl md:text-2xl sm:text-xl font-bold py-4">
              Project Description{" "}
            </h2>
            <p className=" text-text text-xl font-poppins overflow-y-auto ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
