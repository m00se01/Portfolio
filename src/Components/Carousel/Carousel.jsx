import { Children, useState } from "react";

const Carousel = ({ children }) => {
    const [currIndex, setCurrIndex] = useState(0);

    const handleNext = () => {
        if (currIndex + 1 > Children.count(children)) {
            setCurrIndex(0);
        } else {
            setCurrIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currIndex - 1 < 0) {
            setCurrIndex(Children.count(children) - 1);
        } else {
            setCurrIndex((prev) => prev - 1);
        }
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-[60vh] ">
                {Children.map(children, (child, index) => (
                    <div
                        className={index === currIndex ? "block " : "hidden"}
                        key={index}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div className="bottom-0 mx-auto my-2">
                <div
                    className={
                        Children.count(children) == 1
                            ? "hidden"
                            : "flex flex-row justify-between gap-2"
                    }
                >
                    {Children.map(children, (_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrIndex(index);
                            }}
                            className={
                                index === currIndex
                                    ? "w-2 h-2 bg-accent rounded-full"
                                    : "w-2 h-2 rounded-full bg-white"
                            }
                        ></button>
                    ))}
                </div>
                <span
                    className={
                        Children.count(children) == 1
                            ? "hidden"
                            : "block my-2 text-md"
                    }
                >
                    {currIndex + 1}/{Children.count(children)}
                </span>
            </div>
        </>
    );
};

export default Carousel;
