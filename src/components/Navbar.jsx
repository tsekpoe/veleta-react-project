const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img src="src/assets/svg/veleta-logo.svg" alt="veleta-logo" />
      </div>

      <div>
        <ul className="list-none flex">
          <li className="m-5 mt-0 cursor-pointer">Home</li>
          <li className="m-5 mt-0 cursor-pointer">About</li>
          <li className="m-5 mt-0 cursor-pointer">Services</li>
          <li className="m-5 mt-0 cursor-pointer">Blog</li>
          <li className="m-5 mt-0 cursor-pointer">Contact</li>
        </ul>
      </div>

      <div>
        <a href="tel:+34 918 602 921">+34 918 602 921</a>
      </div>
    </div>
  );
};

export default Navbar;
