import GallerySection from "../ui/GallerySection";
import Customers from "../ui/Customers";
import Location from "../ui/Localion";

const Home = () => {
  return (
    <div className="bg-primary">
      <GallerySection />
      <Customers />
      <Location />
    </div>
  );
};

export default Home;
