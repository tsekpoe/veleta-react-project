import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import MethodCards from "./components/MethodCards";
import Navbar from "./components/Navbar";
import ServicesCards from "./components/ServicesCards";
import Specialists from "./components/Specialists";
import TopSection from "./components/TopSection";

export default function App() {
  return (
    <div className="mb-20">
      <div className="m-10 mt-5">
        <Navbar />
        <TopSection />
      </div>

      <div className="bg-sky-100 bg-opacity-65 py-10 my-20">
        <div className="text-center mb-20">
          <p className="font-medium text-sky-600 mb-5">METHOD</p>
          <p className="text-3xl font-medium">Our Work Process</p>
        </div>
        <div className="flex justify-between text-center">
          <MethodCards
            image="src/assets/images/diagnostic.png"
            title="Diagnostic"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse."
          />
          <MethodCards
            image="src/assets/images/treatment.png"
            title="Treatment"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse."
          />
          <MethodCards
            image="src/assets/images/therapy.png"
            title="Therapy"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse."
          />
        </div>
      </div>

      <Specialists />

      <div className="flex bg-sky-100 bg-opacity-65 p-20 justify-between">
        <div className="w-3/5">
          <p className="text-3xl font-medium mb-2">
            Pathologies that we treat in our center
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
        </div>

        <div className="flex">
          <ul className="mx-5">
            <li className="my-2 mx-5 check-circle-item">Anxiety</li>
            <li className="my-2 mx-5 check-circle-item">Depression</li>
            <li className="my-2 mx-5 check-circle-item">OCD</li>
            <li className="my-2 mx-5 check-circle-item">PTSD</li>
          </ul>

          <ul className="mx-5">
            <li className="my-2 mx-5 check-circle-item">Eating Disorders</li>
            <li className="my-2 mx-5 check-circle-item">Bipolar Disorder</li>
            <li className="my-2 mx-5 check-circle-item">Schizophrenia</li>
            <li className="my-2 mx-5 check-circle-item">Alzheimer</li>
          </ul>
        </div>
      </div>

      <div className="my-10">
        <div className="flex justify-between">
          <ServicesCards
            image="src/assets/svg/shield-check.svg"
            title="Consultation in Clinic"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse."
          />
          <ServicesCards
            image="src/assets/svg/emoji-happy.svg"
            title="Psychiatric Admission"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse."
          />
          <ServicesCards
            image="src/assets/svg/location.svg"
            title="Walk and Talk"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse."
          />
        </div>
        <p className="flex justify-center cursor-pointer">
          <span className="m-2 text-blue-600 font-medium">Learn More</span>
          <img src="src/assets/svg/right-arrow.svg" alt="right-arrow" />
        </p>
      </div>

      <div className="text-center bg-sky-100 bg- p-20 mx-20">
        <span className="text-2xl font-semibold m-10">
          Contact us now and get an appointment with our specialist!
        </span>
        <button className="bg-blue-500 text-white rounded-lg py-3 px-10">
          Call Now
        </button>
      </div>

      <div className="m-10 mt-5">
        <BlogSection />

        <Footer />
      </div>
    </div>
  );
}
