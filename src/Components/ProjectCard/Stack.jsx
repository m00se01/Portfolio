import React from "react";

export const Stack = ({ stack }) => {
    // Using Devicon's CDN
    const iconMap = {
        java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        javascript:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
        node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        reactjs:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        c: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000",
        cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        cplusplus:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    };

    return (
        <div>
            <ul className="flex items-center justify-center gap-4 fa-2xl text-accent">
                {stack.map((item, index) => (
                    <li className="flex flex-col" key={index}>
                        <img
                            className="w-[24px] h-[24px]  rounded-md"
                            src={iconMap[item.toLowerCase()]}
                            alt={item.toLowerCase()}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
