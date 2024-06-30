import BusinessSvg from '../Assets/Business-merger.svg';
import Button from '../Ui/Button';
import { HiArrowCircleRight } from 'react-icons/hi';
import Stribe from '../Assets/line-32.svg';
import Arrow53 from '../Assets/arrow-53.svg';


import { motion } from 'framer-motion';
import Hero from '../Features/LandingPage/Hero';
import Pricing from '../Features/LandingPage/Pricing';
import Footer from '../Features/LandingPage/Footer';
import FeautreRow from '../Features/LandingPage/Features';
import Testimonials from '../Features/LandingPage/Testimonials';
function LandingPage() {
  return (
    <main>
      <Hero />
      <FeautreRow/>
      <Testimonials/>
      <Pricing />
      <Footer/>
    </main>
  );
}

export default LandingPage;
