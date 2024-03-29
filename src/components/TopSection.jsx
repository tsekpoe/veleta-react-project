const TopSection = () => {
  return (
    <div className="flex justify-between mt-20">
      <div className="w-1/2">
        <p className="font-medium text-sky-600">PSYCHIATRIC CARE</p>
        <p className="text-5xl font-bold my-5">
          Your health is Our <br /> Priority
        </p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet consectetuer dolore.
        </p>
        <button className="border-solid border-2 border-sky-600 text-white bg-sky-600 rounded-md px-5 py-2 mr-5">
          Appointment
        </button>
        <button className="border-solid border-2 border-sky-600 text-sky-600 rounded-md px-5 py-2">
          Learn More
        </button>
      </div>

      <div>
        <img
          src="src/assets/images/nurse-first.jpg"
          alt="doc-image"
          className="h-80 rounded-tr-3xl rounded-bl-3xl"
        />
      </div>
    </div>
  );
};

export default TopSection;
