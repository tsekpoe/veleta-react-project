import SpecialistsCards from "./SpecialistsCards";

const Specialists = () => {
  return (
    <div className="">
      <div className="text-center">
        <p className="font-medium text-sky-600 my-5">THEME</p>
        <p className="text-3xl font-medium">Meet Our Specialists</p>
      </div>

      <div className="mx-40 my-10 flex flex-wrap">
        <SpecialistsCards
          docImage="src/assets/images/doc-male1.png"
          alt="doc-male1"
          role="Psychiatrist"
          name="Ignacio Ortega"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum."
        />

        <SpecialistsCards
          docImage="src/assets/images/doc-female-1.png"
          alt="doc-female1"
          role="Psychologist"
          name="Binna Zambrano"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum."
        />

        <SpecialistsCards
          docImage="src/assets/images/doc-male2.png"
          alt="doc-male2"
          role="Psychologist"
          name="Enrique Molina"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum."
        />

        <SpecialistsCards
          docImage="src/assets/images/doc-female-2.png"
          alt="doc-female2"
          role="Nurse"
          name="Cristina Gonzalez"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum."
        />
      </div>
    </div>
  );
};

export default Specialists;
