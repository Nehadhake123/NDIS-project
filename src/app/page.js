import GroupComponent from "@/components/Home/HomeContent/Info/GroupComponent";
import HomeContent from "@/components/Home/HomeContent/HomeContent";
import BestServices from "@/components/Home/HomeContent/OurServices/BestServices";
import Process from "@/components/Home/HomeContent/WorkProsses/WorkProsses";
import JourneySupport from "@/components/Home/HomeContent/Info/JorneySupport";
import Testimonial from "@/components/Home/HomeContent/Info/Testimonial";
import Footer from "@/components/Footer";
import Resources from "@/components/Home/HomeContent/Resources/Resources";
import CityList from "@/components/Home/CityList/CityList";

export default function Home() {
  return (
    <>
    <HomeContent/>
    <Process/>
    <BestServices/>
    <GroupComponent/>
    <JourneySupport/>
    <Testimonial/>
    <Resources/>
    <CityList/>
    </>
  );
}
