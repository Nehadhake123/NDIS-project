import GroupComponent from "@/components/Info/GroupComponent";
import HomeContent from "@/components/HomeContent/HomeContent";
import BestServices from "@/components/OurServices/BestServices";
import Process from "@/components/WorkProsses/WorkProsses";
import JourneySupport from "@/components/Info/JorneySupport";
import Testimonial from "@/components/Info/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <HomeContent/>
    <Process/>
    <BestServices/>
    <GroupComponent/>
    <JourneySupport/>
    <Testimonial/>
    <Footer/>
    </>
  );
}
