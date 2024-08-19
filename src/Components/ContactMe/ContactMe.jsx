export const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.submit();
  };

  return (
    <div>
      <div className="container flex flex-col items-center justify-center p-8 mx-auto my-8 text-black rounded-lg ">
        <h1 className="font-[Indria] text-5xl font-bold text-center text-white lg:text-6xl sm:text-4xl">
          Get in touch with me
        </h1>

        <h2 className="text-3xl font-bold text-center text-accent">
          Thanks again for visiting!
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="text-black flex flex-col justify-center gap-4 p-4 mt-5 xl:w-[50%] w-[100%] sm:w-[90%] md:w-[90%]"
        >
          <input type="hidden" name="form-name" value="contact"></input>
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
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
