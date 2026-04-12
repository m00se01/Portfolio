import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "./Stack";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ImageCarousel } from "../Carousel/ImageCarousel";
import Carousel from "../Carousel/Carousel";

const ProjectDetails = ({
    title,
    description,
    screenshots,
    stack,
    onClose,
    codeLink,
}) => {
    // const items = [];

    const openInNewWindow = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    const formatDescription = () => {
        return description?.split("\n").map((line, index) => (
            <p key={index}>
                <br />
                {line}
            </p>
        ));
    };

    const ProjectDescription = () => {
        return (
            <div className="container p-4 h-fit md:mx-10 lg:mx-auto ">
                {/* Project Description */}
                <div className="lg:min-h-[50vh] flex flex-col lg:items-center gap-5 p-6 lg:mx-auto text-white bg-slate-700 rounded-md lg:w-[50vw]">
                    <div className="flex flex-col items-start w-full">
                        <div className="flex flex-wrap items-center gap-3 text-xl font-bold">
                            <span>Stack:</span>
                            <Stack stack={stack} />
                        </div>

                        <h2 className="py-2 font-bold text-left text-secondaryAccent lg:text-3xl md:text-2xl sm:text-xl">
                            Project Description:
                        </h2>

                        <div className="text-xl font-semibold">
                            {formatDescription()}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ProjectHeader = () => {
        return (
            <div className="relative flex flex-col items-center p-4 pt-4 mt-5 lg:pt-8 lg:flex-row lg:items-start">
                <button
                    className="w-full h-10 mb-4 font-bold transition-colors duration-200 rounded-lg bg-emerald-600 md:px-4 md:w-fit sm:inline md:mb-0 md:absolute md:left-8 font-poppins hover:bg-blue-500 md:hover:scale-110 focus:outline-none"
                    onClick={onClose}
                >
                    Close
                </button>

                <div className="flex flex-col items-center justify-center w-full gap-6">
                    <h1 className="px-4 text-3xl leading-tight text-center xl:text-6xl lg:text-5xl md:text-4xl font-quantico">
                        {title}
                    </h1>

                    <button
                        onClick={() => openInNewWindow(codeLink)}
                        className="flex items-center justify-center w-full max-w-[70vw] md:max-w-sm gap-4 p-4 font-bold transition-transform rounded-lg hover:bg-blue-500 bg-emerald-600 drop-shadow-md text-text hover:scale-105"
                    >
                        <span className="whitespace-nowrap">View Code</span>
                        <FontAwesomeIcon className="fa-xl" icon={faGithub} />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="container relative flex flex-col min-w-[80vw] max-h-fit min-h-screen mx-auto bg-primary font-sans font-bold text-text">
            <ProjectHeader />
            <Carousel>
                <ProjectDescription />
            </Carousel>
        </div>
    );
};

export default ProjectDetails;
