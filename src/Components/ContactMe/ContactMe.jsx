import { useState } from "react";

export const ContactMe = () => {
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      <div className="container flex flex-col items-center justify-center p-8 mx-auto my-8 text-black rounded-lg bg-secondary/30">
        <h1 className="text-6xl font-bold text-center text-white">
          Get in touch with me
        </h1>

        <h2 className="my-8 text-3xl font-bold text-center text-accent">
          Thanks again for visiting!
        </h2>

        <form
          action="submit"
          onSubmit={handleSubmit}
          className="  text-black flex flex-col justify-center gap-4 p-8 my-4 w-[55%] "
        >
          <input type="checkbox" name="botcheck" className="hidden"></input>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required={true}
          />
          <input
            className="p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            type="email"
            name="email"
            placeholder="Enter your email"
            required={true}
          />

          <textarea
            name="message"
            className="h-40 p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Write your message here..."
            required={true}
          ></textarea>
          <button
            type="submit"
            className="p-3 font-bold text-black bg-accent rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
