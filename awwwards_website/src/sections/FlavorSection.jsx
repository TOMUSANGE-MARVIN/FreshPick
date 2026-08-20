import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="lg:h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none py-16 lg:py-0 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="lg:h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;