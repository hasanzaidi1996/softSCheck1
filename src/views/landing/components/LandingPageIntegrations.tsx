import Integrations from '../../../assets/img/Integrations.jpg';
import { motion } from 'framer-motion';
import LandingHeadings from './LandingHeadings';

/**
 * LandingPageIntegrations component
 *
 * This component renders the integrations page of the landing page.
 *
 * @returns {JSX.Element} The LandingPageIntegrations component
 */
const LandingPageIntegrations = () => {
  return (
    <div className="p-8 container">
      <div className=" flex flex-col gap-8 max-md:gap-4">
        <LandingHeadings heading=" Apply Cyber Integrations" />
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center">
          <motion.div
            initial={{
              // if odd index card,slide from right instead of left
              opacity: 0.5,
              x: -17.5
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1 // Animation duration
              }
            }}>
            <p className="lg:text-3xl md:text-2xl text-xl text-center font-medium p-8 capitalize">
              Apply Cyber Open API capabilities can now bring in the power and ease of no code.
            </p>
          </motion.div>
          <img src={Integrations} alt="Integrations" className=" w-full object-contain max-h-96" />
          <motion.div
            initial={{
              // if odd index card,slide from right instead of left
              opacity: 0.5,
              x: 17.5
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1 // Animation duration
              }
            }}>
            <p className="lg:text-3xl md:text-2xl text-xl text-center font-medium p-8 capitalize">
              Put yourself on a faster path to automating the critical security frameworks
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageIntegrations;
