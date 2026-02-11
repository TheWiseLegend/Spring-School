import { FC } from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import About from '../../components/About';
import WhyChoose from '../../components/WhyChoose';
import Statistics from '../../components/Statistics';
import Testimonials from '../../components/Testimonials';
import Courses from '../../components/Courses';
import CallToAction from '../../components/CallToAction';

/**
 * Home Page
 * Landing page with all marketing sections
 */
const Home: FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <WhyChoose />
      <Statistics />
      <Testimonials />
      <Courses />
      <CallToAction />
    </>
  );
};

export default Home;
