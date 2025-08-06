import GallerySection from "../ui/GallerySection";
import Customers from "../ui/Customers";
import Location from "../ui/Localion";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#021d3d] to-[#043d70]">
      <GallerySection />
      <Customers />
      <Location />
    </div>
  );
};

export default Home;
