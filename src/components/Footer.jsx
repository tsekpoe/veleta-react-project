const Footer = () => {
  return (
    <div>
      <img src="src/assets/svg/veleta-logo.svg" alt="veleta-logo" />

      <div className="flex justify-between my-10">
        <div className="list-none">
          <span className="text-xl font-medium">Book an Appointment</span>
          <li className="text-slate-600 my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className="text-blue-600 flex my-2 border-2 border-blue-600 px-3 py-2 rounded-lg w-fit cursor-pointer">
            Call Us Now
            <img
              src="src/assets/svg/phone.svg"
              alt="phone-icon"
              className="ml-2"
            />
          </li>
        </div>

        <div>
          <span className="text-xl font-medium">Menu</span>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Home</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">About</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Services</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Blog</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Blog Page</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Contact</span>
          </li>
        </div>

        <div>
          <span className="text-xl font-medium">Utility Page</span>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Styleguide</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Licenses</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Privacy Policy</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Changelog</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">Password Protected</span>
          </li>
          <li className="my-2 text-blue-600 text-lg">
            <span className="text-black">404 Not Found Page</span>
          </li>
        </div>

        <div className="list-none">
          <span className="text-xl font-medium">Contact Us</span>
          <li className="flex my-2">
            <img
              src="src/assets/svg/phone.svg"
              alt="phone-icon"
              className="mr-3"
            />
            <a href="tel:+34918602921">+34 918 602 921</a>
          </li>
          <li className="flex my-2">
            <img
              src="src/assets/svg/location.svg"
              alt="location-icon"
              className="mr-3"
            />
            <a href="https://www.google.es/maps/place/The+Mall,+New+York,+NY+10019,+EE.+UU./@40.7723562,-73.9737788,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258f2a23678c7:0x4f9cb8606d2545b6!8m2!3d40.7723522!4d-73.9715901?hl=es">
              The Mall, New York, NY 10019, United States
            </a>
          </li>
          <li className="flex my-2">
            <img
              src="src/assets/svg/mail.svg"
              alt="email-icon"
              className="mr-3"
            />
            <a href="mailto:info@veleta.com">info@veleta.com</a>
          </li>
        </div>
      </div>

      <div className="flex justify-between">
        <span>
          Made by <span className="font-medium">Michael Tovmach</span>
        </span>

        <div className="flex">
          <img
            src="src/assets/svg/twitter.svg"
            alt="twitter-icon"
            className="h-10 mx-5 rounded-full bg-sky-100 p-2"
          />
          <img
            src="src/assets/svg/facebook.svg"
            alt="facebook-icon"
            className="h-10 mx-5 rounded-full bg-sky-100 p-2"
          />
          <img
            src="src/assets/svg/instagram.svg"
            alt="instagram-icon"
            className="h-10 mx-5 rounded-full bg-sky-100 p-2"
          />
          <img
            src="src/assets/svg/linkedin.svg"
            alt="linkedin-icon"
            className="h-10 mx-5 rounded-full bg-sky-100 p-2"
          />
        </div>

        <span>
          Powered by <span className="font-medium">Webflow</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
